import { sdk } from "../graphql/client";
import { GetNotesActionQuery, GetNotesActionQueryVariables } from "../graphql/generated";
import { ActionHandler } from "../utils/actionsUtils";
import { LocationConstants } from "../utils/constants";

type Action = ActionHandler<GetNotesActionQueryVariables, GetNotesActionQuery["get_notes"]>;

const getNotesActionHandler: Action = async (_, params, sendOutput) => {
  const { notes } = await sdk.Notes({
    latitude: params.latitude,
    longitude: params.longitude,
    distance: LocationConstants.maximumNoteDistance,
  });

  return sendOutput(
    notes.map((note) => ({
      id: note.id,
      latitude: note.location.coordinates[1],
      longitude: note.location.coordinates[0],
      content: note.content,
    }))
  );
};

export default getNotesActionHandler;
