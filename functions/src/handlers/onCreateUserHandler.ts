import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import { sdk } from "../graphql/client";

export default async function onCreateUserHandler(
  user: functions.auth.UserRecord
) {
  const customUserClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": user.uid,
    },
  };

  await admin.auth().setCustomUserClaims(user.uid, customUserClaims);

  return sdk.CreateUser({
    id: user.uid,
    email: user.email as string,
  });
}
