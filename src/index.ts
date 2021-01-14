import { App } from "@slack/bolt";

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
});

(async () => {
  await app.start(3000);
  console.log("app started!");
})();
