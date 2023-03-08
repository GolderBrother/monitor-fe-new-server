import BaseService from '../baseService';
import { EBizType } from '../../common';
export default class Index extends BaseService {
    /**
     * 执行定时任务
     * @param scheduleTask 定时任务
     */
    scheduleHandler(scheduleTask: Function, bizType: EBizType): Promise<void>;
}
