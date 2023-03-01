import BaseService from '../baseService';
import { EBizType } from '../../common';

export default class Index extends BaseService {
  /**
   * 根据业务类型进行html格式清洗
   * @param bizType 业务类型
   * @param html html结构
   */
  async formatHtmlByBizType(bizType: EBizType, html: string) {
    switch (bizType) {
      case EBizType.JUEJIN:
        return await this.service.spider.juejin.index.getLinks(html);
      case EBizType.SEGMENTFAULT:
        return await this.service.spider.segmentfault.index.getLinks(html);
      case EBizType.ZHIHU:
        return await this.service.spider.zhihu.index.getLinks(html);
      case EBizType.NEWCODER:
        return await this.service.spider.newcoder.index.getLinks(html);
      case EBizType.GITHUBISSUES:
        return await this.service.spider.githubIssues.index.getLinks(html);
      case EBizType.GITHUB_TRENDING:
        return await this.service.spider.githubTrending.index.getLinks(html);
      case EBizType.MEITUAN:
        return await this.service.spider.meituan.index.getLinks(html);
      default:
        break;
    }
  }
}