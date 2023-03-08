import Controller from "./baseController";
export default class ScheduleController extends Controller {
    index(): Promise<void>;
    /**
     * 推送微信机器人消息
     */
    sendMsg2WeiXin(content: string | string[]): Promise<void>;
    /**
     * 生成markdown格式内容
     * @param content
     * @returns
     */
    generateMDContent(content: string | {
        title: string;
        href: string;
    }[], type: string): string;
    /**
     * 美团-美食
     * 每天早上10点推送
     * @returns
     */
    meiTuanRecommendScheduleHandler(): Promise<void>;
    /**
     * 掘金-前端
     * 每天早上9点推送
     * @returns
     */
    juejinFENewsScheduleHandler(): Promise<void>;
    /**
     * 掘金-Node
     * 每天早上9点推送
     * @returns
     */
    juejinNodeNewsScheduleHandler(): Promise<void>;
    /**
     * 前端-知乎
     * 每天早上9点推送
     * @returns
     */
    zhihuFENewsScheduleHandler(): Promise<void>;
    /**
     * 前端-segmentfault
     * 每天早上9点推送
     * @returns
     */
    segmentfaultFENewsScheduleHandler(): Promise<void>;
    /**
     * 前端-githubTrending
     * 每天早上9点推送
     * @returns
     */
    githubTrendingFENewsScheduleHandler(): Promise<void>;
    /**
     * 定时任务
     */
    scheduleHandler(): Promise<void>;
}
