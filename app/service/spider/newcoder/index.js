"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("../../baseService"));
const cheerio = __importStar(require("cheerio"));
/**
 * 牛客网页面数据爬取
 * @type 前端工程师精选面经合集 https://www.nowcoder.com/discuss/experience?tagId=644
 */
class Index extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.DOMAIN = "https://www.nowcoder.com/";
        this.link = "";
    }
    /**
     * 获取资讯列表
     */
    getLinks(html) {
        const $ = cheerio.load(html);
        const links = this.getHtmlContent($);
        return links;
    }
    /**
     * 解析html结构
     * @param $ cheerio对象
     */
    getHtmlContent($) {
        const links = [];
        console.log($(".column-best-list .js-nc-wrap-link .cont"));
        $(".column-best-list .js-nc-wrap-link .cont").each((index, ele) => {
            const title = $(ele).find("a").text().trim();
            const href = `${this.DOMAIN}${$(ele).find("a").attr("href")}`;
            if (title && href) {
                links.push({
                    title,
                    href,
                    index,
                });
            }
        });
        return links;
    }
}
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLGlEQUFtQztBQUVuQzs7O0dBR0c7QUFDSCxNQUFxQixLQUFNLFNBQVEscUJBQVc7SUFBOUM7O1FBQ0UsV0FBTSxHQUFHLDJCQUEyQixDQUFDO1FBQ3JDLFNBQUksR0FBRyxFQUFFLENBQUM7SUE2QlosQ0FBQztJQTVCQzs7T0FFRztJQUNJLFFBQVEsQ0FBQyxJQUFJO1FBQ2xCLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsQ0FBQztRQUNkLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2hFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDOUQsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDO29CQUNULEtBQUs7b0JBQ0wsSUFBSTtvQkFDSixLQUFLO2lCQUNOLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQS9CRCx3QkErQkMifQ==