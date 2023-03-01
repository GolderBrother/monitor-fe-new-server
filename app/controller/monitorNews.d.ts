import Controller from "./baseController";
export default class morningNews extends Controller {
    index(): Promise<void>;
    /**
     * 推送微信机器人消息
     */
    sendMsg2WeiXin(): Promise<void>;
}
