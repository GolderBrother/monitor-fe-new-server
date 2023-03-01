import BaseService from '../../baseService';
import * as cheerio from 'cheerio';

/**
 * 知乎页面数据爬取
 * @type 前端 https://www.zhihu.com/column/58fed
 */
export default class Index extends BaseService {
  DOMAIN = 'https:';
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
    $('.Card .ContentItem.ArticleItem').each((index, ele) => {
      const linkDom = $(ele).find('.ContentItem-title a');
      const title = linkDom.text();
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