import BaseService from '../baseService';
import { scheduleHandler } from '../../utils/schedule';
import { EBizType } from '../../common';
import { ScheduleRule } from './scheduleRule';
export default class Index extends BaseService {
  /**
   * 执行定时任务
   * @param scheduleTask 定时任务
   */
  async scheduleHandler(scheduleTask: Function, bizType: EBizType) {
    switch (bizType) {
      case EBizType.JUEJIN:
        scheduleHandler(scheduleTask, ScheduleRule.JUEJIN);
        break;
      case EBizType.JUEJINNode:
        scheduleHandler(scheduleTask, ScheduleRule.JUEJINNode);
        break;
      case EBizType.SEGMENTFAULT:
        scheduleHandler(scheduleTask, ScheduleRule.SEGMENTFAULT);
        break;
      case EBizType.ZHIHU:
        scheduleHandler(scheduleTask, ScheduleRule.ZHIHU);
        break;
      case EBizType.GITHUB_TRENDING:
        scheduleHandler(scheduleTask, ScheduleRule.GITHUB_TRENDING);
        break;
      default:
        break;
    }
  }
}