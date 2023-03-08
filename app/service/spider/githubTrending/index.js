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
 * github trending爬取
 */
class Index extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.DOMAIN = 'https://github.com';
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
        $('.position-relative article.Box-row').each((index, ele) => {
            const linkDom = $(ele).find('.lh-condensed a');
            // const title = linkDom.text().trim();
            if (!linkDom)
                return;
            const title = linkDom.text().replace(/\s*/g, "");
            const href = `${this.DOMAIN}${linkDom.attr('href')}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLGlEQUFtQztBQUVuQzs7R0FFRztBQUNILE1BQXFCLEtBQU0sU0FBUSxxQkFBVztJQUE5Qzs7UUFDRSxXQUFNLEdBQUcsb0JBQW9CLENBQUM7SUFnQ2hDLENBQUM7SUEvQkM7O09BRUc7SUFDSSxRQUFRLENBQUMsSUFBSTtRQUNsQixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxLQUFLLENBQUM7SUFFZixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLENBQUM7UUFDZCxNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzFELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMvQyx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTztZQUNyQixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3JELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDVCxLQUFLO29CQUNMLElBQUk7b0JBQ0osS0FBSztpQkFDTixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFqQ0Qsd0JBaUNDIn0=