import { removeOldTokenCron } from "./remove-old-tokens.cron";
import { testCron } from "./test.cron";

export const jobRunner = () => {
  testCron.start();
  removeOldTokenCron.start();
};
