import { EBizType } from "../common";
import Controller from "./baseController";

export default class ScheduleController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("schedule");
  }

  /**
   * 推送微信机器人消息
   */
  async sendMsg2WeiXin(content: string | string[]) {
    console.log("sendMsg2WeiXin content", content);
    try {
      const { data, result } = await this.service.sendMsg.qyweixin.index(
        content ?? "我是定时任务-你今天可真美呀~"
      );
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
    } catch (error) {
      console.error("sendMsg2WeiXin error", error);
      this.fail({
        resultObj: {
          msg: "发送失败",
          data: JSON.stringify(error),
          result: false,
        },
      });
    } finally {
      return;
    }
  }

  /**
   * 生成markdown格式内容
   * @param content
   * @returns
   */
  generateMDContent(
    content:
      | string
      | {
          title: string;
          href: string;
        }[],
    type: string
  ) {
    const newContent = Array.isArray(content)
      ? content.map(
          (item, index) => `${index + 1}.[${item.title}](${item.href})`
        ).join('\n > #### ')
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
    const bizType = EBizType.MEITUAN;
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
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
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
    const bizType = EBizType.JUEJIN;
    const link = "https://juejin.cn/frontend";
    let html = "";
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
    const links = data.filter((item) => !item.title.match("招聘"));
    const content = this.generateMDContent(links, bizType);
    await this.service.schedule.index.scheduleHandler(async () => {
      await this.sendMsg2WeiXin(content);
      console.log("schedule content", content);
    }, EBizType.JUEJIN);
  }

  /**
   * 掘金-Node
   * 每天早上9点推送
   * @returns
   */
  async juejinNodeNewsScheduleHandler() {
    const bizType = EBizType.JUEJIN;
    const link = "https://juejin.cn/frontend/Node.js";
    let html = "";
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
    const links = data.filter((item) => !item.title.match("招聘"));
    const content = this.generateMDContent(links, bizType);
    await this.service.schedule.index.scheduleHandler(async () => {
      await this.sendMsg2WeiXin(content);
      console.log("schedule content", content);
    }, EBizType.JUEJINNode);
  }
  /**
   * 前端-知乎
   * 每天早上9点推送
   * @returns
   */
  async zhihuFENewsScheduleHandler() {
    const bizType = EBizType.ZHIHU;
    const link = "https://www.zhihu.com/column/58fed";
    let html = "";
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
    console.log('data', data)
    const links = data.filter((item) => !item.title.match("招聘"));
    const content = this.generateMDContent(links, bizType);
    await this.service.schedule.index.scheduleHandler(async () => {
      await this.sendMsg2WeiXin(content);
      console.log("schedule content", content);
    }, EBizType.ZHIHU);
  }

  /**
   * 前端-segmentfault
   * 每天早上9点推送
   * @returns
   */
  async segmentfaultFENewsScheduleHandler() {
    const bizType = EBizType.SEGMENTFAULT;
    const link = "https://segmentfault.com/channel/frontend";
    let html = "";
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
    const links = data.filter((item) => !item.title.match("招聘"));
    const content = this.generateMDContent(links, bizType);
    await this.service.schedule.index.scheduleHandler(async () => {
      await this.sendMsg2WeiXin(content);
      console.log("schedule content", content);
    }, EBizType.SEGMENTFAULT);
  }

  /**
   * 前端-githubTrending
   * 每天早上9点推送
   * @returns
   */
  async githubTrendingFENewsScheduleHandler() {
    const bizType = EBizType.GITHUB_TRENDING;
    const link = "https://github.com/trending/javascript";
    let html = "";
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const data =
      (await this.service.monitorNews.index.formatHtmlByBizType(
        bizType,
        html
      )) || [];
    const links = data.filter((item) => !item.title.match("招聘"));
    const content = this.generateMDContent(links, bizType);
    await this.service.schedule.index.scheduleHandler(async () => {
      await this.sendMsg2WeiXin(content);
      console.log("schedule content", content);
    }, EBizType.GITHUB_TRENDING);
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
