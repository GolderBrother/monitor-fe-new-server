import Controller from "./baseController";
export default class ChatgptController extends Controller {
    index(): Promise<void>;
    /**
     * 推送微信机器人消息
     */
    sendMsg2WeiXin(content: string | string[]): Promise<void>;
    /**
     * 生成markdown格式内容
     * @param content
     * @returns
     */
    generateMDContent(content: string | {
        title: string;
        href: string;
    }[], type: string): string;
    ask(): Promise<void>;
}
