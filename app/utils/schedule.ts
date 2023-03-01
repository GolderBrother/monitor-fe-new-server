// 使用Node.js实现一个定时任务调度中心
// https://www.myjerry.cn/backend/node/job.html

// https://mrseawave.github.io/blogs/articles/2021/07/13/node-schedule/

import schedule from "node-schedule";
import moment from "moment";

// 允许'0'号进程设定定时任务，防止 pm2 多实例冲突
const isAllowWorkerSchedule =
  !process.env.NODE_APP_INSTANCE || process.env.NODE_APP_INSTANCE === "0";

// 每天早上 10 点执行
const defaultRecurrenceRule = new schedule.RecurrenceRule();
// defaultRecurrenceRule.hour = [10];
// defaultRecurrenceRule.minute = 0;
defaultRecurrenceRule.second = 0;
export function scheduleHandler(scheduleTask, recurrenceRule = defaultRecurrenceRule) {
  // 两个时间规则，降低爬虫频率，提高成功率
  // const ruleChina = new schedule.RecurrenceRule();
  // const ruleAll = new schedule.RecurrenceRule();
  // const ruleLanguage = new schedule.RecurrenceRule();

  // 每天早上 10 点执行
  // ruleChina.hour = [10];
  // ruleChina.minute = 0;
  // ruleChina.second = 0;

  // ruleAll.hour = [2];
  // 每分钟 0 秒执行
  // ruleAll.minute = 0;

  // ruleLanguage.hour = [3];
  // ruleLanguage.minute = 0;
  // 每天早上10点推送
  const job = schedule.scheduleJob(recurrenceRule, async function () {
    console.log("定时任务开始执行!", moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log("定时任务开始执行! scheduleTask", scheduleTask);
    scheduleTask && (await scheduleTask());
  });
  return job;
}

/**
 *  取消当前的job任务
 * @param job
 * @param reschedule
 * @returns
 */
export function cancelScheduleJob(job, reschedule) {
  if (!isAllowWorkerSchedule) return;
  console.log("取消定时器");
  job.cancel(reschedule);
}
