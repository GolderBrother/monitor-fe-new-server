"use strict";
// 使用Node.js实现一个定时任务调度中心
// https://www.myjerry.cn/backend/node/job.html
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelScheduleJob = exports.scheduleHandler = void 0;
// https://mrseawave.github.io/blogs/articles/2021/07/13/node-schedule/
const node_schedule_1 = __importDefault(require("node-schedule"));
const moment_1 = __importDefault(require("moment"));
// 允许'0'号进程设定定时任务，防止 pm2 多实例冲突
const isAllowWorkerSchedule = !process.env.NODE_APP_INSTANCE || process.env.NODE_APP_INSTANCE === "0";
// 每天早上 10 点执行
const defaultRecurrenceRule = new node_schedule_1.default.RecurrenceRule();
// defaultRecurrenceRule.hour = [10];
// defaultRecurrenceRule.minute = 0;
defaultRecurrenceRule.second = 0;
function scheduleHandler(scheduleTask, recurrenceRule = defaultRecurrenceRule) {
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
    const job = node_schedule_1.default.scheduleJob(recurrenceRule, async function () {
        console.log("定时任务开始执行!", (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss"));
        console.log("定时任务开始执行! scheduleTask", scheduleTask);
        scheduleTask && (await scheduleTask());
    });
    return job;
}
exports.scheduleHandler = scheduleHandler;
/**
 *  取消当前的job任务
 * @param job
 * @param reschedule
 * @returns
 */
function cancelScheduleJob(job, reschedule) {
    if (!isAllowWorkerSchedule)
        return;
    console.log("取消定时器");
    job.cancel(reschedule);
}
exports.cancelScheduleJob = cancelScheduleJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXdCO0FBQ3hCLCtDQUErQzs7Ozs7O0FBRS9DLHVFQUF1RTtBQUV2RSxrRUFBcUM7QUFDckMsb0RBQTRCO0FBRTVCLDhCQUE4QjtBQUM5QixNQUFNLHFCQUFxQixHQUN6QixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxHQUFHLENBQUM7QUFFMUUsY0FBYztBQUNkLE1BQU0scUJBQXFCLEdBQUcsSUFBSSx1QkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzVELHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQyxTQUFnQixlQUFlLENBQUMsWUFBWSxFQUFFLGNBQWMsR0FBRyxxQkFBcUI7SUFDbEYsc0JBQXNCO0lBQ3RCLG1EQUFtRDtJQUNuRCxpREFBaUQ7SUFDakQsc0RBQXNEO0lBRXRELGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUV4QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtJQUV0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixNQUFNLEdBQUcsR0FBRyx1QkFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFBLGdCQUFNLEdBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDcEQsWUFBWSxJQUFJLENBQUMsTUFBTSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBeEJELDBDQXdCQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFVBQVU7SUFDL0MsSUFBSSxDQUFDLHFCQUFxQjtRQUFFLE9BQU87SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pCLENBQUM7QUFKRCw4Q0FJQyJ9