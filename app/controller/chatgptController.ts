import Controller from "./baseController";

export default class ChatgptController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("chatgpt");
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
      ? content
          .map((item, index) => `${index + 1}.[${item.title}](${item.href})`)
          .join("\n > #### ")
      : String(content);
    const mdContent = `
      > #### ${type}
      > #### ${newContent}
    `;
    console.log("generateMDContent mdContent", mdContent);
    return mdContent;
  }

  async ask() {
    const { request, helper: _helper, axios, logger } = this.ctx;
    const { message } = request.body;
    logger.info("requset body===", request.body);

    logger.info("message===", message);
    //   openai上申请到的token
    // const token = "";
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    const req = {
      model: "text-curie-001",
      prompt: message,
      max_tokens: 2000,
      temperature: 0.5,
    };

    console.log("req===", req);

    let text = "";
    const result = await axios
      .post("https://api.openai.com/v1/completions", req, {
        timeout: 300000,
        headers: { Authorization: "Bearer ${token}" },
      })
      .then((rsp) => {
        console.log("pdf file result", rsp);

        if (rsp.choices) {
          text = rsp.choices[0].text;
        }
      })
      .catch((err) => {
        console.log("pdf file error", err);
      });

    const data = {
      rsp: text,
    };

    this.success({
      resultObj: {
        msg: "发送成功",
        data,
        result,
      },
    });
  }
}
