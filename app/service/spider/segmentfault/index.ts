import BaseService from "../../baseService";
import * as cheerio from "cheerio";

/**
 * segmentfault页面数据爬取
 * @type 前端 https://segmentfault.com/channel/frontend
 */
export default class Index extends BaseService {
  DOMAIN = "https://segmentfault.com";
  /**
   * 获取资讯列表
   */
  public getLinks(html): Link[] {
    const $ = cheerio.load(html);
    const links = this.getHtmlContent($);
    return links;
  }
  /**
   * 解析html结构
   * @param $ cheerio对象
   */
  getHtmlContent($): Link[] {
    const links: Link[] = [];
    $(".content-list-wrap .list-group .list-group-item .content").each((index, ele) => {
      const linkDom = $(ele).find(".h5 .title");
      const title = linkDom.text();
      const url = linkDom.attr("href");
      const href = `${this.DOMAIN}${url}`;
      if (title && url) {
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
