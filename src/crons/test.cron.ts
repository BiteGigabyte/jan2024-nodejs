import { CronJob } from "cron";

const handler = () => {
  console.log("Cron is running");
};

export const testCron = new CronJob("*/5 * 0 8 * *", handler);
