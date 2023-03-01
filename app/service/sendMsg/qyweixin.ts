import { QY_WEI_XIN_ROBOT_TOKEN } from "../../common";
import BaseService from "../baseService";
import moment from "moment";

/**
 * 发送信息到企业微信群
 */
export default class Index extends BaseService {
  /**
   * 获取企业微信群机器人 webhook 地址
   * @param bizType 业务类型
   */
  getQYWeiXinWebHookUrl(): string {
    return `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${QY_WEI_XIN_ROBOT_TOKEN}`;
  }

  public generateMarkdownContent(content) {
    const midContent = Array.isArray(content)
      ? content.join("\n")
      : String(content);
    const now = moment().locale("zh-cn").format("YYYY-MM-DD HH:mm:ss");
    const newContent = `<font color="#389e0d">前端早报 时间：${now}</font> 欢迎大家阅读。
    ${midContent}
    本服务由**[jamesezhang](https://git.woa.com/u/jamesezhang)**提供技术支持`;
    return newContent;
  }

  public async index(content): Promise<{ data: any; result: boolean }> {
    const url = this.getQYWeiXinWebHookUrl();
    // 是否可以做成定时推送（周一到周五每天早上）
    const markdownContent = this.generateMarkdownContent(content);
    console.log('markdownContent', markdownContent);
    const data = {
      msgtype: "markdown",
      markdown: {
        content: markdownContent,
      },
    };

    const res = await this.app.curl(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    if (res.status !== 200) {
      return {
        data: res,
        result: false,
      };
    }
    return {
      data: null,
      result: true,
    };
  }
}
