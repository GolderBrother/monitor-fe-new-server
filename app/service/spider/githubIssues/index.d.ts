import BaseService from '../../baseService';
/**
 * github issues爬取
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
