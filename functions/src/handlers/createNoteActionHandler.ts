import * as admin from "firebase-admin";
import { v4 as uuid } from "uuid";

import { sdk } from "../graphql/client";
import { CreateNoteActionMutation, CreateNoteActionMutationVariables } from "../graphql/generated";
import { ActionHandler } from "../utils/actionsUtils";
import { generateStaticMap } from "../utils/mapUtils";

type Action = ActionHandler<CreateNoteActionMutationVariables, CreateNoteActionMutation["create_note"]>;

const createNoteActionHandler: Action = async (userId, params, sendOutput) => {
  const id = uuid();

  const map = await generateStaticMap(params.latitude, params.longitude);

  // Save the Google Maps Static API image to Cloud Storage
  const storage = admin.storage().bucket();
  const file = storage.file(`public/static-maps/${id}/map.png`);
  await file.save(map.data, { contentType: "image/png", public: true });

  const { note } = await sdk.CreateNote({
    id,
    user_id: userId,
    content: params.content,
    latitude: params.latitude,
    longitude: params.longitude,
    map_image_url: file.publicUrl(),
  });

  return sendOutput({ id: note?.id });
};

export default createNoteActionHandler;
