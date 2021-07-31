import * as functions from "firebase-functions";
import { GraphQLClient } from "graphql-request";

import { getSdk } from "./generated";

const config = functions.config();

const client = new GraphQLClient(config.hasura.endpoint + "/v1/graphql", {
  headers: {
    "X-Hasura-Admin-Secret": config.hasura.admin_secret,
    "X-Hasura-Role": "backend",
  },
});

export const sdk = getSdk(client);

export default client;
