import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import onCreateUserHandler from "./handlers/onCreateUserHandler";

admin.initializeApp();

export const onCreateUser = functions
  .region("europe-west1")
  .auth.user()
  .onCreate(onCreateUserHandler);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
