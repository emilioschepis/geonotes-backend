import * as admin from "firebase-admin";

import { sdk } from "../graphql/client";
import { GetNoteActionQuery, GetNoteActionQueryVariables } from "../graphql/generated";
import { ActionHandler } from "../utils/actionsUtils";

type Action = ActionHandler<GetNoteActionQueryVariables, GetNoteActionQuery["get_note"]>;

const getNoteActionHandler: Action = async (userId, params, sendOutput) => {
  const user = await admin.auth().getUser(userId);
  const isAnonymous = user.providerData.length === 0;

  if (!isAnonymous) {
    // Keep track of another user viewing the selected note.
    // This uses an upsert to ensure that the view is only registered once.
    await sdk.RegisterView({ note_id: params.note_id, user_id: userId });
  }

  return sendOutput({ note_id: params.note_id });
};

export default getNoteActionHandler;
