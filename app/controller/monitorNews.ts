import { EBizType } from "../common";
import Controller from "./baseController";

export default class morningNews extends Controller {
  public async index() {
    const link = this.ctx.query.link;
    const bizType = this.ctx.query.bizType;
    let html = "";
    if (!link) {
      this.fail({
        msg: "入参校验不通过",
      });
      return;
    }
    const htmlResult = await this.service.puppeteer.news.getHtml(link);
    if (htmlResult.status === false) {
      this.fail({
        msg: "爬取html失败，请稍后重试或者调整超时时间",
      });
      return;
    }
    html = htmlResult.data as string;
    const links =
      await this.service.monitorNews.index.formatHtmlByBizType(bizType as EBizType, html) || [];
    this.success({
      data: links.filter((item) => !item.title.match("招聘")),
    });
    return;
  }

  /**
   * 推送微信机器人消息
   */
  async sendMsg2WeiXin() {
    const content = this.ctx.query.content;
    if (!content) {
      this.fail({
        resultObj: {
          msg: "入参数据异常",
        },
      });
      return;
    }
    try {
      const { data, result } = await this.service.sendMsg.qyweixin.index(content);
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
}
