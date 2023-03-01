import BaseService from '../../baseService';
/**
 * 掘金页面数据爬取
 * @type 前端 https://juejin.cn/frontend
 */
export default class Index extends BaseService {
    DOMAIN: string;
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
