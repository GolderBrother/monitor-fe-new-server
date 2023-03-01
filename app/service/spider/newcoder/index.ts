import BaseService from "../../baseService";
import * as cheerio from "cheerio";

/**
 * 牛客网页面数据爬取
 * @type 前端工程师精选面经合集 https://www.nowcoder.com/discuss/experience?tagId=644
 */
export default class Index extends BaseService {
  DOMAIN = "https://www.nowcoder.com/";
  link = "";
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
