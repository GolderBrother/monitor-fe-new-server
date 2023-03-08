import BaseService from "../baseService";
/**
 * 通过puppeteer获取html结构
 */
export default class Index extends BaseService {
    viewport: {
        width: number;
        height: number;
    };
    /** 无头浏览器 */
    launch: {
        headless: boolean;
        args: string[];
    };
    args: string[];
    /** 模拟浏览器版本信息 */
    userAgent: string;
    /**
     * 获取页面html结构
     * @param link 页面链接
     * @param bizType 类型
     * @param waitTime 超时时间
     */
    getHtml(link: any): Promise<{
        status: boolean;
        data: string | undefined;
    }>;
}
