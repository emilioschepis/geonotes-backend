import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import onCreateUserHandler from "./handlers/onCreateUserHandler";

admin.initializeApp();

const builder = functions.region("europe-west1");

export const onCreateUser = builder.auth.user().onCreate(onCreateUserHandler);
