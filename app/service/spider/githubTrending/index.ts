import BaseService from '../../baseService';
import * as cheerio from 'cheerio';

/**
 * github trending爬取
 */
export default class Index extends BaseService {
  DOMAIN = 'https://github.com';
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
    $('.position-relative article.Box-row').each((index, ele) => {
      const linkDom = $(ele).find('.lh-condensed a');
      // const title = linkDom.text().trim();
      const title = linkDom.text().replace(/\s*/g,"");
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