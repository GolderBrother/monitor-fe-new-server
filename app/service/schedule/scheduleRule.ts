import schedule from "node-schedule";
// 每天早上 8 点执行
const JueJinFERecurrenceRule = new schedule.RecurrenceRule();
JueJinFERecurrenceRule.hour = [8];
JueJinFERecurrenceRule.minute = 0;
JueJinFERecurrenceRule.second = 0;

// 每天早上 8：15 执行
const JueJinNodeRecurrenceRule = new schedule.RecurrenceRule();
JueJinNodeRecurrenceRule.hour = [8];
JueJinNodeRecurrenceRule.minute = 15;
JueJinNodeRecurrenceRule.second = 0;

// 每天早上 8:30 执行
const SegmentfaultFERecurrenceRule = new schedule.RecurrenceRule();
SegmentfaultFERecurrenceRule.hour = [8];
SegmentfaultFERecurrenceRule.minute = 30;
SegmentfaultFERecurrenceRule.second = 0;

// 每天早上 9:00 执行
const ZhihuFERecurrenceRule = new schedule.RecurrenceRule();
ZhihuFERecurrenceRule.hour = [9];
ZhihuFERecurrenceRule.minute = 0;
ZhihuFERecurrenceRule.second = 0;

// 每天早上 9:30 执行
const GithubTrendingFERecurrenceRule = new schedule.RecurrenceRule();
GithubTrendingFERecurrenceRule.hour = [9];
GithubTrendingFERecurrenceRule.minute = 30;
GithubTrendingFERecurrenceRule.second = 0;

/**
 * 爬虫站点枚举
 */
export const ScheduleRule = {
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
