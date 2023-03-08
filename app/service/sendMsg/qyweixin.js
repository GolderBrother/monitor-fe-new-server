"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../../common");
const baseService_1 = __importDefault(require("../baseService"));
const moment_1 = __importDefault(require("moment"));
/**
 * 发送信息到企业微信群
 */
class Index extends baseService_1.default {
    /**
     * 获取企业微信群机器人 webhook 地址
     * @param bizType 业务类型
     */
    getQYWeiXinWebHookUrl() {
        return `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${common_1.QY_WEI_XIN_ROBOT_TOKEN}`;
    }
    generateMarkdownContent(content) {
        const midContent = Array.isArray(content)
            ? content.join("\n")
            : String(content);
        const now = (0, moment_1.default)().locale("zh-cn").format("YYYY-MM-DD HH:mm:ss");
        const newContent = `<font color="#389e0d">前端早报 时间：${now}</font> 欢迎大家阅读。
    ${midContent}
    本服务由**[jamesezhang](https://git.woa.com/u/jamesezhang)**提供技术支持`;
        return newContent;
    }
    async index(content) {
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
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXl3ZWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxeXdlaXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUFzRDtBQUN0RCxpRUFBeUM7QUFDekMsb0RBQTRCO0FBRTVCOztHQUVHO0FBQ0gsTUFBcUIsS0FBTSxTQUFRLHFCQUFXO0lBQzVDOzs7T0FHRztJQUNILHFCQUFxQjtRQUNuQixPQUFPLHdEQUF3RCwrQkFBc0IsRUFBRSxDQUFDO0lBQzFGLENBQUM7SUFFTSx1QkFBdUIsQ0FBQyxPQUFPO1FBQ3BDLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuRSxNQUFNLFVBQVUsR0FBRyxpQ0FBaUMsR0FBRztNQUNyRCxVQUFVO21FQUNtRCxDQUFDO1FBQ2hFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU87UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDekMsd0JBQXdCO1FBQ3hCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sSUFBSSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFVBQVU7WUFDbkIsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxlQUFlO2FBQ3pCO1NBQ0YsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ25DLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxJQUFJO1NBQ0wsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUN0QixPQUFPO2dCQUNMLElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxLQUFLO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBbERELHdCQWtEQyJ9