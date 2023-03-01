import BaseService from "../../baseService";
/**
 * 牛客网页面数据爬取
 * @type 前端工程师精选面经合集 https://www.nowcoder.com/discuss/experience?tagId=644
 */
export default class Index extends BaseService {
    DOMAIN: string;
    link: string;
    /**
     * 获取资讯列表
     */
    getLinks(html: any): Link[];
    /**
     * 解析html结构
     * @param $ cheerio对象
     */
    getHtmlContent($: any): Link[];
}
