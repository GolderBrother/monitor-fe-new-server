// import { EBizType } from '@/common';
import BaseService from "../baseService";
import * as puppeteer from "puppeteer";

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

    const bodyHTMLSize = await page.evaluate(
      () => document.body.innerHTML.length
    );

    console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, ' body html size: ', bodyHTMLSize);
    const hasHtml = lastHTMLSize !== 0 && currentHTMLSize === lastHTMLSize;
    if (hasHtml) {
      countStableSizeIterations++;
    } else {
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
export default class Index extends BaseService {
  viewport = {
    width: 1920,
    height: 1080,
  };
  /** 无头浏览器 */
  launch = {
    headless: true,
  };
  args = ["--no-sandbox", "--disable-setuid-sandbox"];
  /** 模拟浏览器版本信息 */
  userAgent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36";

  /**
   * 获取页面html结构
   * @param link 页面链接
   * @param bizType 类型
   * @param waitTime 超时时间
   */
  public async getHtml(link) {
    const browser = await puppeteer.launch(this.launch);
    const page = await browser.newPage();
    await page.setViewport(this.viewport);
    await page.setUserAgent(this.userAgent);
    await page.goto(link);
    await waitTillHTMLRendered(page);
    const html = await page.evaluate(() => {
      return document?.querySelector("html")?.outerHTML;
    });
    await browser.close();
    return {
      status: true,
      data: html,
    };
  }
}
