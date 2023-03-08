import BaseService from "../baseService";
/**
 * 发送信息到企业微信群
 */
export default class Index extends BaseService {
    /**
     * 获取企业微信群机器人 webhook 地址
     * @param bizType 业务类型
     */
    getQYWeiXinWebHookUrl(): string;
    generateMarkdownContent(content: any): string;
    index(content: any): Promise<{
        data: any;
        result: boolean;
    }>;
}
