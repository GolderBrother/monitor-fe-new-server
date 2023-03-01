import BaseService from '../baseService';
export default class Index extends BaseService {
    /**
     * 根据业务类型进行html格式清洗
     * @param bizType 业务类型
     * @param html html结构
     */
    formatHtmlByBizType(bizType: string, html: string): Link[] | undefined;
}
