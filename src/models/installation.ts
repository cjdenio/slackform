import { Schema, model, models } from "mongoose";
import { Installation } from "@slack/oauth";

const Team = new Schema({
  id: String,
  name: String,
});

const User = new Schema({
  token: String,
  scopes: [String],
  id: String,
});

const Bot = new Schema({
  token: String,
  scopes: [String],
  id: String,
  userId: String,
});

const schema = new Schema({
  team: Team,
  user: User,
  bot: Bot,
});

export { schema };

export default model("Installation", schema);
