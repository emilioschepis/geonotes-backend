import * as admin from "firebase-admin";

import { sdk } from "../graphql/client";
import { GetNoteActionQuery, GetNoteActionQueryVariables } from "../graphql/generated";
import { ActionHandler } from "../utils/actionsUtils";

type Action = ActionHandler<GetNoteActionQueryVariables, GetNoteActionQuery["get_note"]>;

const getNoteActionHandler: Action = async (userId, params, sendOutput, sendError) => {
  const { note } = await sdk.Note({ id: params.id });

  if (!note) {
    return sendError({ code: "note-not-found", message: "The requested note could not be found." });
  }

  const user = await admin.auth().getUser(userId);
  const isAnonymous = user.providerData.length === 0;

  if (!isAnonymous) {
    // Keep track of another user viewing the selected note.
    // This uses an upsert to ensure that the view is only registered once.
    await sdk.RegisterView({ note_id: params.id, user_id: userId });
  }

  return sendOutput({
    id: params.id,
    content: note.content,
    created_at: note.created_at,
    username: note.user.username,
    view_count: note.views_aggregate.aggregate?.count ?? 0,
  });
};

export default getNoteActionHandler;
