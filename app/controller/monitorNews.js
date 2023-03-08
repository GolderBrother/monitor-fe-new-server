"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseController_1 = __importDefault(require("./baseController"));
class morningNews extends baseController_1.default {
    async index() {
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
        html = htmlResult.data;
        const links = await this.service.monitorNews.index.formatHtmlByBizType(bizType, html) || [];
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
        }
        catch (error) {
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
}
exports.default = morningNews;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvck5ld3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtb25pdG9yTmV3cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHNFQUEwQztBQUUxQyxNQUFxQixXQUFZLFNBQVEsd0JBQVU7SUFDMUMsS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixHQUFHLEVBQUUsU0FBUzthQUNmLENBQUMsQ0FBQztZQUNILE9BQU87U0FDUjtRQUNELE1BQU0sVUFBVSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssS0FBSyxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLHdCQUF3QjthQUM5QixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQWMsQ0FBQztRQUNqQyxNQUFNLEtBQUssR0FDVCxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxPQUFtQixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQsQ0FBQyxDQUFDO1FBQ0gsT0FBTztJQUNULENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxjQUFjO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsR0FBRyxFQUFFLFFBQVE7aUJBQ2Q7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1I7UUFDRCxJQUFJO1lBQ0YsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxFQUFFLE1BQU07d0JBQ1gsSUFBSTt3QkFDSixNQUFNO3FCQUNQO2lCQUNGLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLFNBQVMsRUFBRTtvQkFDVCxHQUFHLEVBQUUsTUFBTTtvQkFDWCxJQUFJO29CQUNKLE1BQU07aUJBQ1A7YUFDRixDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1QsR0FBRyxFQUFFLE1BQU07b0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUMzQixNQUFNLEVBQUUsS0FBSztpQkFDZDthQUNGLENBQUMsQ0FBQztTQUNKO2dCQUFTO1lBQ1IsT0FBTztTQUNSO0lBQ0gsQ0FBQztDQUNGO0FBeEVELDhCQXdFQyJ9