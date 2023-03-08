"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRule = void 0;
const node_schedule_1 = __importDefault(require("node-schedule"));
// 每天早上 8 点执行
const JueJinFERecurrenceRule = new node_schedule_1.default.RecurrenceRule();
// JueJinFERecurrenceRule.hour = [8];
// JueJinFERecurrenceRule.minute = 0;
JueJinFERecurrenceRule.second = 0;
// 每天早上 8：15 执行
const JueJinNodeRecurrenceRule = new node_schedule_1.default.RecurrenceRule();
JueJinNodeRecurrenceRule.hour = [8];
JueJinNodeRecurrenceRule.minute = 0;
JueJinNodeRecurrenceRule.second = 0;
// 每天早上 8:30 执行
const SegmentfaultFERecurrenceRule = new node_schedule_1.default.RecurrenceRule();
SegmentfaultFERecurrenceRule.hour = [8];
SegmentfaultFERecurrenceRule.minute = 30;
SegmentfaultFERecurrenceRule.second = 0;
// 每天早上 9:00 执行
const ZhihuFERecurrenceRule = new node_schedule_1.default.RecurrenceRule();
ZhihuFERecurrenceRule.hour = [9];
ZhihuFERecurrenceRule.minute = 0;
ZhihuFERecurrenceRule.second = 0;
// 每天早上 9:30 执行
const GithubTrendingFERecurrenceRule = new node_schedule_1.default.RecurrenceRule();
ZhihuFERecurrenceRule.hour = [9];
ZhihuFERecurrenceRule.minute = 30;
ZhihuFERecurrenceRule.second = 0;
/**
 * 爬虫站点枚举
 */
exports.ScheduleRule = {
    /** 稀土掘金-前端:https://juejin.cn/frontend */
    JUEJIN: JueJinFERecurrenceRule,
    /** 稀土掘金-NodeJS:https://juejin.cn/frontend/Node.js */
    JUEJINNode: JueJinNodeRecurrenceRule,
    /** segmentfault: https://segmentfault.com/ */
    SEGMENTFAULT: SegmentfaultFERecurrenceRule,
    /** 知乎: https://www.zhihu.com/ */
    ZHIHU: ZhihuFERecurrenceRule,
    /** github trending: https://github.com/trending/javascript */
    GITHUB_TRENDING: GithubTrendingFERecurrenceRule,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVSdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGVSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtFQUFxQztBQUNyQyxhQUFhO0FBQ2IsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHVCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDN0QscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxzQkFBc0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWxDLGVBQWU7QUFDZixNQUFNLHdCQUF3QixHQUFHLElBQUksdUJBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvRCx3QkFBd0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFcEMsZUFBZTtBQUNmLE1BQU0sNEJBQTRCLEdBQUcsSUFBSSx1QkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25FLDRCQUE0QixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLDRCQUE0QixDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekMsNEJBQTRCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUV4QyxlQUFlO0FBQ2YsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLHVCQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDNUQscUJBQXFCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWpDLGVBQWU7QUFDZixNQUFNLDhCQUE4QixHQUFHLElBQUksdUJBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyRSxxQkFBcUIsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFakM7O0dBRUc7QUFDVSxRQUFBLFlBQVksR0FBRztJQUMxQix5Q0FBeUM7SUFDekMsTUFBTSxFQUFFLHNCQUFzQjtJQUM5QixxREFBcUQ7SUFDckQsVUFBVSxFQUFFLHdCQUF3QjtJQUNwQyw4Q0FBOEM7SUFDOUMsWUFBWSxFQUFFLDRCQUE0QjtJQUMxQyxpQ0FBaUM7SUFDakMsS0FBSyxFQUFFLHFCQUFxQjtJQUM1Qiw4REFBOEQ7SUFDOUQsZUFBZSxFQUFFLDhCQUE4QjtDQUNoRCxDQUFDIn0=