import dotenv from "dotenv";

dotenv.config(); //потрібен для того щоб ми наповнили наш process

export const configs = {
  APP_PORT: Number(process.env.APP_PORT),
  APP_HOST: process.env.APP_HOST,

  FRONTEND_URL: process.env.FRONTEND_URL,

  MONGO_URL: process.env.MONGO_URL,

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRE_IN,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRE_IN,

  JWT_ACTION_FORGOT_PASSWORD_SECRET:
    process.env.JWT_ACTION_FORGOT_PASSWORD_SECRET,
  JWT_ACTION_FORGOT_PASSWORD_EXPIRES_IN:
    process.env.JWT_ACTION_FORGOT_PASSWORD_EXPIRES_IN,

  SMTP_EMAIL: process.env.SMTP_EMAIL,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
};