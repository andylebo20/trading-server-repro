import { SlackManager } from "./slackManager";

export const exceptionHandler = (error, req, res, next) => {
  const prettyErrorMessage = `Code: ${error.code || "N/A"}\nMessage: ${
    error.message || "N/A"
  }`;

  console.error(error.message);
  if (!process.env.IS_DEV) {
    SlackManager.log({
      channel: "#server-error-logs",
      text: prettyErrorMessage,
      username: `Error Report${process.env.IS_DEV ? " [DEV]" : ""}`,
    });
  }
  res.status(500).send(error);
};
