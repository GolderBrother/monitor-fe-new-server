import BaseService from "../../baseService";
/**
 * 掘金页面数据爬取
 * @type 前端 https://i.waimai.meituan.com
 */
export default class Index extends BaseService {
    DOMAIN: string;
    /**
     * 获取外卖美食列表
     */
    _getLinks(html: any): Promise<Link[]>;
    /**
     * 获取外卖美食列表
     */
    getLinks(_html: any): Promise<never[]>;
    /**
     * 解析html结构
     * @param $ cheerio对象
     */
    getHtmlContent($: any): Link[];
}
