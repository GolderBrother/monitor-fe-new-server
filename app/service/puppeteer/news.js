"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { EBizType } from '@/common';
const baseService_1 = __importDefault(require("../baseService"));
const puppeteer = __importStar(require("puppeteer"));
/**
 * 检查页面是否已经加载完毕
 * @param page
 * @param timeout
 */
const waitTillHTMLRendered = async (page, timeout = 30000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1;
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;
    // 每隔一秒钟就判断页面的长度是否发生了变化，如果三秒内没有发生变化，默认页面已经加载完毕
    while (checkCounts++ <= maxChecks) {
        const html = await page.content();
        const currentHTMLSize = html.length;
        const bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);
        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, ' body html size: ', bodyHTMLSize);
        const hasHtml = lastHTMLSize !== 0 && currentHTMLSize === lastHTMLSize;
        if (hasHtml) {
            countStableSizeIterations++;
        }
        else {
            countStableSizeIterations = 0;
        } // reset the counter
        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }
        lastHTMLSize = currentHTMLSize;
        await page.waitForTimeout(checkDurationMsecs);
    }
};
/**
 * 通过puppeteer获取html结构
 */
class Index extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.viewport = {
            width: 1920,
            height: 1080,
        };
        /** 无头浏览器 */
        this.launch = {
            headless: true,
            args: ['--disable-setuid-sandbox', '--no-sandbox']
        };
        this.args = ["--no-sandbox", "--disable-setuid-sandbox"];
        /** 模拟浏览器版本信息 */
        this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36";
    }
    /**
     * 获取页面html结构
     * @param link 页面链接
     * @param bizType 类型
     * @param waitTime 超时时间
     */
    async getHtml(link) {
        const browser = await puppeteer.launch(this.launch);
        const page = await browser.newPage();
        await page.setViewport(this.viewport);
        await page.setUserAgent(this.userAgent);
        await page.goto(link);
        await waitTillHTMLRendered(page);
        const html = await page.evaluate(() => {
            var _a;
            return (_a = document === null || document === void 0 ? void 0 : document.querySelector("html")) === null || _a === void 0 ? void 0 : _a.outerHTML;
        });
        await browser.close();
        return {
            status: true,
            data: html,
        };
    }
}
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ld3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxpRUFBeUM7QUFDekMscURBQXVDO0FBRXZDOzs7O0dBSUc7QUFDSCxNQUFNLG9CQUFvQixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQzNELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLE1BQU0sU0FBUyxHQUFHLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQztJQUMvQyxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUkseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0lBRWxDLDhDQUE4QztJQUM5QyxPQUFPLFdBQVcsRUFBRSxJQUFJLFNBQVMsRUFBRTtRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXBDLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FDdEMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNyQyxDQUFDO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEcsTUFBTSxPQUFPLEdBQUcsWUFBWSxLQUFLLENBQUMsSUFBSSxlQUFlLEtBQUssWUFBWSxDQUFDO1FBQ3ZFLElBQUksT0FBTyxFQUFFO1lBQ1gseUJBQXlCLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0wseUJBQXlCLEdBQUcsQ0FBQyxDQUFDO1NBQy9CLENBQUMsb0JBQW9CO1FBRXRCLElBQUkseUJBQXlCLElBQUksdUJBQXVCLEVBQUU7WUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU07U0FDUDtRQUVELFlBQVksR0FBRyxlQUFlLENBQUM7UUFDL0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUM7QUFDRjs7R0FFRztBQUNILE1BQXFCLEtBQU0sU0FBUSxxQkFBVztJQUE5Qzs7UUFDRSxhQUFRLEdBQUc7WUFDVCxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLFlBQVk7UUFDWixXQUFNLEdBQUc7WUFDUCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxDQUFDLDBCQUEwQixFQUFFLGNBQWMsQ0FBQztTQUNuRCxDQUFDO1FBRUYsU0FBSSxHQUFHLENBQUMsY0FBYyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDcEQsZ0JBQWdCO1FBQ2hCLGNBQVMsR0FDUCxvSEFBb0gsQ0FBQztJQXdCekgsQ0FBQztJQXRCQzs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUN2QixNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELE1BQU0sSUFBSSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsTUFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFOztZQUNwQyxPQUFPLE1BQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsMENBQUUsU0FBUyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBdENELHdCQXNDQyJ9