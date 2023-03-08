"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("../baseService"));
const common_1 = require("../../common");
class Index extends baseService_1.default {
    /**
     * 根据业务类型进行html格式清洗
     * @param bizType 业务类型
     * @param html html结构
     */
    async formatHtmlByBizType(bizType, html) {
        switch (bizType) {
            case common_1.EBizType.JUEJIN:
                return await this.service.spider.juejin.index.getLinks(html);
            case common_1.EBizType.SEGMENTFAULT:
                return await this.service.spider.segmentfault.index.getLinks(html);
            case common_1.EBizType.ZHIHU:
                return await this.service.spider.zhihu.index.getLinks(html);
            case common_1.EBizType.NEWCODER:
                return await this.service.spider.newcoder.index.getLinks(html);
            case common_1.EBizType.GITHUBISSUES:
                return await this.service.spider.githubIssues.index.getLinks(html);
            case common_1.EBizType.GITHUB_TRENDING:
                return await this.service.spider.githubTrending.index.getLinks(html);
            case common_1.EBizType.MEITUAN:
                return await this.service.spider.meituan.index.getLinks(html);
            default:
                break;
        }
    }
}
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUF5QztBQUN6Qyx5Q0FBd0M7QUFFeEMsTUFBcUIsS0FBTSxTQUFRLHFCQUFXO0lBQzVDOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBaUIsRUFBRSxJQUFZO1FBQ3ZELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxpQkFBUSxDQUFDLE1BQU07Z0JBQ2xCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxLQUFLLGlCQUFRLENBQUMsWUFBWTtnQkFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLEtBQUssaUJBQVEsQ0FBQyxLQUFLO2dCQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUQsS0FBSyxpQkFBUSxDQUFDLFFBQVE7Z0JBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRSxLQUFLLGlCQUFRLENBQUMsWUFBWTtnQkFDeEIsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLEtBQUssaUJBQVEsQ0FBQyxlQUFlO2dCQUMzQixPQUFPLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkUsS0FBSyxpQkFBUSxDQUFDLE9BQU87Z0JBQ25CLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRTtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7QUExQkQsd0JBMEJDIn0=