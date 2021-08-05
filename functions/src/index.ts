import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import createNoteActionHandler from "./handlers/createNoteActionHandler";
import onCreateUserHandler from "./handlers/onCreateUserHandler";
import { actionWrapper } from "./utils/actionsUtils";

admin.initializeApp();

const builder = functions.region("europe-west1");

export const onCreateUser = builder.auth.user().onCreate(onCreateUserHandler);

// Actions

export const createNoteAction = builder.https.onRequest(actionWrapper(createNoteActionHandler));
