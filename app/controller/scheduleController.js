"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const baseController_1 = __importDefault(require("./baseController"));
class ScheduleController extends baseController_1.default {
    async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi("schedule");
    }
    /**
     * 推送微信机器人消息
     */
    async sendMsg2WeiXin(content) {
        console.log("sendMsg2WeiXin content", content);
        try {
            const { data, result } = await this.service.sendMsg.qyweixin.index(content !== null && content !== void 0 ? content : "我是定时任务-你今天可真美呀~");
            if (result) {
                this.success({
                    resultObj: {
                        msg: "发送成功",
                        data,
                        result,
                    },
                });
                return;
            }
            this.fail({
                resultObj: {
                    msg: "发送失败",
                    data,
                    result,
                },
            });
        }
        catch (error) {
            console.error("sendMsg2WeiXin error", error);
            this.fail({
                resultObj: {
                    msg: "发送失败",
                    data: JSON.stringify(error),
                    result: false,
                },
            });
        }
        finally {
            return;
        }
    }
    /**
     * 生成markdown格式内容
     * @param content
     * @returns
     */
    generateMDContent(content, type) {
        const newContent = Array.isArray(content)
            ? content.map((item, index) => `${index + 1}.[${item.title}](${item.href})`).join('\n > #### ')
            : String(content);
        const mdContent = `
      > #### ${type}
      > #### ${newContent}
    `;
        console.log('generateMDContent mdContent', mdContent);
        return mdContent;
    }
    /**
     * 美团-美食
     * 每天早上10点推送
     * @returns
     */
    async meiTuanRecommendScheduleHandler() {
        // https://h5.waimai.meituan.com/waimai/mindex/kingkong?navigateType=910&title=%E7%BE%8E%E9%A3%9F&index=1&resource_id=10634
        // https://h5.waimai.meituan.com/waimai/mindex/home
        const bizType = common_1.EBizType.MEITUAN;
        // const link = "https://h5.waimai.meituan.com/waimai/mindex/home";
        let html = "";
        // const htmlResult = await this.service.puppeteer.news.getHtml(link);
        // if (htmlResult.status === false) {
        //   this.fail({
        //     msg: "爬取html失败，请稍后重试或者调整超时时间",
        //   });
        //   return;
        // }
        // html = htmlResult.data as string;
        // console.log('meiTuanRecommendScheduleHandler htmlResult', htmlResult);
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        const links = data.filter((item) => !item.title.match("招聘"));
        console.log('links', links);
        const content = this.generateMDContent(links, bizType);
        console.log('content', content);
        // await this.service.schedule.index.scheduleHandler(async () => {
        //   await this.sendMsg2WeiXin(content);
        //   console.log("schedule content", content);
        // });
    }
    /**
     * 掘金-前端
     * 每天早上9点推送
     * @returns
     */
    async juejinFENewsScheduleHandler() {
        const bizType = common_1.EBizType.JUEJIN;
        const link = "https://juejin.cn/frontend";
        let html = "";
        const htmlResult = await this.service.puppeteer.news.getHtml(link);
        if (htmlResult.status === false) {
            this.fail({
                msg: "爬取html失败，请稍后重试或者调整超时时间",
            });
            return;
        }
        html = htmlResult.data;
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        const links = data.filter((item) => !item.title.match("招聘"));
        const content = this.generateMDContent(links, bizType);
        await this.service.schedule.index.scheduleHandler(async () => {
            await this.sendMsg2WeiXin(content);
            console.log("schedule content", content);
        }, common_1.EBizType.JUEJIN);
    }
    /**
     * 掘金-Node
     * 每天早上9点推送
     * @returns
     */
    async juejinNodeNewsScheduleHandler() {
        const bizType = common_1.EBizType.JUEJIN;
        const link = "https://juejin.cn/frontend/Node.js";
        let html = "";
        const htmlResult = await this.service.puppeteer.news.getHtml(link);
        if (htmlResult.status === false) {
            this.fail({
                msg: "爬取html失败，请稍后重试或者调整超时时间",
            });
            return;
        }
        html = htmlResult.data;
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        const links = data.filter((item) => !item.title.match("招聘"));
        const content = this.generateMDContent(links, bizType);
        await this.service.schedule.index.scheduleHandler(async () => {
            await this.sendMsg2WeiXin(content);
            console.log("schedule content", content);
        }, common_1.EBizType.JUEJINNode);
    }
    /**
     * 前端-知乎
     * 每天早上9点推送
     * @returns
     */
    async zhihuFENewsScheduleHandler() {
        const bizType = common_1.EBizType.ZHIHU;
        const link = "https://www.zhihu.com/column/58fed";
        let html = "";
        const htmlResult = await this.service.puppeteer.news.getHtml(link);
        if (htmlResult.status === false) {
            this.fail({
                msg: "爬取html失败，请稍后重试或者调整超时时间",
            });
            return;
        }
        html = htmlResult.data;
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        console.log('data', data);
        const links = data.filter((item) => !item.title.match("招聘"));
        const content = this.generateMDContent(links, bizType);
        await this.service.schedule.index.scheduleHandler(async () => {
            await this.sendMsg2WeiXin(content);
            console.log("schedule content", content);
        }, common_1.EBizType.ZHIHU);
    }
    /**
     * 前端-segmentfault
     * 每天早上9点推送
     * @returns
     */
    async segmentfaultFENewsScheduleHandler() {
        const bizType = common_1.EBizType.SEGMENTFAULT;
        const link = "https://segmentfault.com/channel/frontend";
        let html = "";
        const htmlResult = await this.service.puppeteer.news.getHtml(link);
        if (htmlResult.status === false) {
            this.fail({
                msg: "爬取html失败，请稍后重试或者调整超时时间",
            });
            return;
        }
        html = htmlResult.data;
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        const links = data.filter((item) => !item.title.match("招聘"));
        const content = this.generateMDContent(links, bizType);
        await this.service.schedule.index.scheduleHandler(async () => {
            await this.sendMsg2WeiXin(content);
            console.log("schedule content", content);
        }, common_1.EBizType.SEGMENTFAULT);
    }
    /**
     * 前端-githubTrending
     * 每天早上9点推送
     * @returns
     */
    async githubTrendingFENewsScheduleHandler() {
        const bizType = common_1.EBizType.GITHUB_TRENDING;
        const link = "https://github.com/trending/javascript";
        let html = "";
        const htmlResult = await this.service.puppeteer.news.getHtml(link);
        if (htmlResult.status === false) {
            this.fail({
                msg: "爬取html失败，请稍后重试或者调整超时时间",
            });
            return;
        }
        html = htmlResult.data;
        const data = (await this.service.monitorNews.index.formatHtmlByBizType(bizType, html)) || [];
        const links = data.filter((item) => !item.title.match("招聘"));
        const content = this.generateMDContent(links, bizType);
        await this.service.schedule.index.scheduleHandler(async () => {
            await this.sendMsg2WeiXin(content);
            console.log("schedule content", content);
        }, common_1.EBizType.GITHUB_TRENDING);
    }
    /**
     * 定时任务
     */
    async scheduleHandler() {
        await this.index();
        console.log("scheduleHandler start");
        this.juejinFENewsScheduleHandler();
        this.juejinNodeNewsScheduleHandler();
        // this.meiTuanRecommendScheduleHandler();
        this.zhihuFENewsScheduleHandler();
        this.segmentfaultFENewsScheduleHandler();
        this.githubTrendingFENewsScheduleHandler();
    }
}
exports.default = ScheduleController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLHNFQUEwQztBQUUxQyxNQUFxQixrQkFBbUIsU0FBUSx3QkFBVTtJQUNqRCxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUEwQjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUk7WUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDaEUsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksaUJBQWlCLENBQzdCLENBQUM7WUFDRixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFNBQVMsRUFBRTt3QkFDVCxHQUFHLEVBQUUsTUFBTTt3QkFDWCxJQUFJO3dCQUNKLE1BQU07cUJBQ1A7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNULEdBQUcsRUFBRSxNQUFNO29CQUNYLElBQUk7b0JBQ0osTUFBTTtpQkFDUDthQUNGLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEtB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