import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
  testInboxId: 4511327,

});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Zeina",
};