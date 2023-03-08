"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = __importDefault(require("./baseController"));
class ChatgptController extends baseController_1.default {
    async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi("chatgpt");
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
exports.default = ChatgptController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdGdwdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Z3B0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNFQUEwQztBQUUxQyxNQUFxQixpQkFBa0IsU0FBUSx3QkFBVTtJQUNoRCxLQUFLLENBQUMsS0FBSztRQUNoQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUEwQjtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUk7WUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FDaEUsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksaUJBQWlCLENBQzdCLENBQUM7WUFDRixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFNBQVMsRUFBRTt3QkFDVCxHQUFHLEVBQUUsTUFBTTt3QkFDWCxJQUFJO3dCQUNKLE1BQU07cUJBQ1A7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNULEdBQUcsRUFBRSxNQUFNO29CQUNYLElBQUk7b0JBQ0osTUFBTTtpQkFDUDthQUNGLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lB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