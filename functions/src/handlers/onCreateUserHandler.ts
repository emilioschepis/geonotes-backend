import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import { sdk } from "../graphql/client";

export default async function onCreateUserHandler(
  user: functions.auth.UserRecord
) {
  const isAnonymous = user.providerData.length === 0;

  const customUserClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": isAnonymous ? "anonymous" : "user",
      "x-hasura-allowed-roles": isAnonymous ? ["anonymous"] : ["user"],
      "x-hasura-user-id": user.uid,
    },
  };

  await admin.auth().setCustomUserClaims(user.uid, customUserClaims);

  if (isAnonymous) {
    // Do not create a database record for this anonymous user.
    return;
  }

  return sdk.CreateUser({
    id: user.uid,
    email: user.email as string,
  });
}
