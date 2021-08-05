import * as functions from "firebase-functions";

type ErrorOutput = { message: string; code?: string; status?: number };

export type ActionHandler<I, O> = (
  userId: string,
  params: I,
  sendOutput: (output: O) => void,
  sendError: (error: ErrorOutput) => void
) => void;

export const actionWrapper =
  <I, O>(handler: ActionHandler<I, O>) =>
  async (req: functions.https.Request, res: functions.Response<O | ErrorOutput>): Promise<void> => {
    if (req.method.toUpperCase() !== "POST") {
      res.status(405).send({
        code: "method-not-allowed",
        message: "Actions should be called with the POST method.",
      });
      return;
    }

    const variables = req.body.session_variables;
    const userId = variables["x-hasura-user-id"] as string;

    if (!userId) {
      res.status(400).send({
        code: "user-required",
        message: 'Actions should be performed by a specific user. No "x-hasura-user-id" was provided.',
      });
      return;
    }

    // TODO: Check actions secret

    const sendOutput = (output: O) => {
      res.status(200).send(output);
      return;
    };

    const sendError = (error: ErrorOutput) => {
      res.status(error.status ?? 400).send(error);
      return;
    };

    return handler(userId, req.body.input, sendOutput, sendError);
  };
