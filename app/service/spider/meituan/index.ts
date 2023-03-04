import BaseService from "../../baseService";
import * as cheerio from "cheerio";
// import axios from "axios";

/**
 * 掘金页面数据爬取
 * @type 前端 https://i.waimai.meituan.com
 */

export default class Index extends BaseService {
  DOMAIN = "https://waimai.meituan.com";
  // 接口：https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&_=1665836953751
  // private data2list(data) {
  //   if (!data) return [];
  //   const { module_list: moduleList = [] } = data;
  //   const [detailModuleList = []] = moduleList || [];
  //   const list = detailModuleList.module_list.map((item) =>
  //     JSON.parse(item.string_data ?? "{}")
  //   );
  //   return list;
  // }
  /**
   * 获取外卖美食列表
   */
  public async _getLinks(html) {
    const $ = cheerio.load(html);
    const links = this.getHtmlContent($);
    return links;
  }
  /**
   * 获取外卖美食列表
   */
  public async getLinks(_html) {
    return [];
    // 这里可以调整为深圳区域的
    // TODO 这里美团外卖拿不到免登录的开放接口
    // const baseUrl = `https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=&region_id=&_=1677157821579`;
    // const result = await axios.post(baseUrl, {
    //   optimus_code: 10,
    //   optimus_risk_level: 71,
    //   pageSize: 20,
    //   page_index: 0,
    //   offset: 0,
    //   content_personalized_switch: 0,
    //   sort_type: '',
    //   slider_select_data: '',
    //   activity_filter_codes: '',
    //   wm_latitude: 22547254,
    //   wm_longitude: 113943154,
    //   wmUuidDeregistration: 0,
    //   wmUserIdDeregistration: 0,
    //   openh5_uuid: '31FBF6656D230BC7DC6D4145EFF546FFB4FD2D68246FDEB1F2D80C62540F1F63',
    //   uuid: '31FBF6656D230BC7DC6D4145EFF546FFB4FD2D68246FDEB1F2D80C62540F1F63'
    // });
    // debugger;
    // console.log("getLinks result123", result);
    // const data = JSON.parse(result.data);
    // const list = this.data2list(data);
    // const links = list.map((item, index) => ({
    //   title: item.poi_name,
    //   href: item.scheme,
    //   index,
    // }));
    // return links;
  }
  /**
   * 解析html结构
   * @param $ cheerio对象
   */
  getHtmlContent($): Link[] {
    const links: Link[] = [];
    console.log('getHtmlContent, $(".homeshoplist")', $(".homeshoplist"));
    console.log('getHtmlContent $', $);
    $(".homeshoplist").each((index, ele) => {
      const title = $(ele).find("div.poilist-item-info1name").text().trim();
      console.log('title1', title);
      // https://waimai.meituan.com/waimai/mindex/menu?mtShopId=940392942932472&poi_id_str=wWI8SdhtQncFpQQ-XjeoSAI&dishId=&source=shoplist&utm_source=&channel=default&mtOrderId=&h5_detail_back=&initialLat=22.522802&initialLng=113.935298&actualLat=22.522802&actualLng=113.935298
      // const href = `${this.DOMAIN}${$(ele).find("a.title").attr("href")}`;
      // 暂时写死
      const href = `${this.DOMAIN}`;
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
