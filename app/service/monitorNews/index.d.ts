import BaseService from '../baseService';
import { EBizType } from '../../common';
export default class Index extends BaseService {
    /**
     * 根据业务类型进行html格式清洗
     * @param bizType 业务类型
     * @param html html结构
     */
    formatHtmlByBizType(bizType: EBizType, html: string): Promise<Link[] | undefined>;
}
