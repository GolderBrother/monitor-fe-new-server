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
 * 掘金页面数据爬取
 * @type 前端 https://juejin.cn/frontend
 */
class Index extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.DOMAIN = 'https://juejin.cn';
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
        $('.entry-list .entry').each((index, ele) => {
            const title = $(ele).find('a.title').text()
                .trim();
            const href = `${this.DOMAIN}${$(ele).find('a.title').attr('href')}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLGlEQUFtQztBQUVuQzs7O0dBR0c7QUFDSCxNQUFxQixLQUFNLFNBQVEscUJBQVc7SUFBOUM7O1FBQ0UsV0FBTSxHQUFHLG1CQUFtQixDQUFDO0lBOEIvQixDQUFDO0lBN0JDOztPQUVHO0lBQ0ksUUFBUSxDQUFDLElBQUk7UUFDbEIsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDO0lBRWYsQ0FBQztJQUNEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMxQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRTtpQkFDeEMsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNwRSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsS0FBSztvQkFDTCxJQUFJO29CQUNKLEtBQUs7aUJBQ04sQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBL0JELHdCQStCQyJ9