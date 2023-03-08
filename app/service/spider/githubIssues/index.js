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
 * github issues爬取
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
        $('.js-navigation-container .js-navigation-item').each((index, ele) => {
            const title = $(ele).find('a.js-navigation-open').text();
            const href = `${this.DOMAIN}${$(ele).find('a.js-navigation-open').attr('href')}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLGlEQUFtQztBQUVuQzs7R0FFRztBQUNILE1BQXFCLEtBQU0sU0FBUSxxQkFBVztJQUE5Qzs7UUFDRSxXQUFNLEdBQUcsb0JBQW9CLENBQUM7SUE2QmhDLENBQUM7SUE1QkM7O09BRUc7SUFDSSxRQUFRLENBQUMsSUFBSTtRQUNsQixNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxLQUFLLENBQUM7SUFFZixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLENBQUM7UUFDZCxNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3BFLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ2pGLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDakIsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDVCxLQUFLO29CQUNMLElBQUk7b0JBQ0osS0FBSztpQkFDTixDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUE5QkQsd0JBOEJDIn0=