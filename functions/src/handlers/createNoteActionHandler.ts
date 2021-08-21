import { sdk } from "../graphql/client";
import { CreateNoteActionMutation, CreateNoteActionMutationVariables } from "../graphql/generated";
import { ActionHandler } from "../utils/actionsUtils";

type Action = ActionHandler<CreateNoteActionMutationVariables, CreateNoteActionMutation["create_note"]>;

const createNoteActionHandler: Action = async (userId, params, sendOutput) => {
  const { note } = await sdk.CreateNote({
    user_id: userId,
    content: params.content,
    latitude: params.latitude,
    longitude: params.longitude,
  });

  return sendOutput({ id: note?.id });
};

export default createNoteActionHandler;
