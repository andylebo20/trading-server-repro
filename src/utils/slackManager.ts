import axios from "axios";
import SlackNode from "slack-node";

// insert slack webhook url
const webhookUrl = "";

const slack = new SlackNode();
slack.setWebhook(webhookUrl);

type Log = {
  channel: string;
  text: string;
  username: string;
  icon_emoji?: string;
};

export class SlackManager {
  static async log(logObj: Log) {
    slack.webhook(logObj, (error) => error && console.log(error));
  }
}
