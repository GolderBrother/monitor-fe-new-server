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
const baseService_1 = __importDefault(require("../../baseService"));
const cheerio = __importStar(require("cheerio"));
// import axios from "axios";
/**
 * 掘金页面数据爬取
 * @type 前端 https://i.waimai.meituan.com
 */
class Index extends baseService_1.default {
    constructor() {
        super(...arguments);
        this.DOMAIN = "https://waimai.meituan.com";
    }
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
    async _getLinks(html) {
        const $ = cheerio.load(html);
        const links = this.getHtmlContent($);
        return links;
    }
    /**
     * 获取外卖美食列表
     */
    async getLinks(_html) {
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
    getHtmlContent($) {
        const links = [];
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
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQTRDO0FBQzVDLGlEQUFtQztBQUNuQyw2QkFBNkI7QUFFN0I7OztHQUdHO0FBRUgsTUFBcUIsS0FBTSxTQUFRLHFCQUFXO0lBQTlDOztRQUNFLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztJQWdGeEMsQ0FBQztJQS9FQywwRkFBMEY7SUFDMUYsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixtREFBbUQ7SUFDbkQsc0RBQXNEO0lBQ3RELDREQUE0RDtJQUM1RCwyQ0FBMkM7SUFDM0MsT0FBTztJQUNQLGlCQUFpQjtJQUNqQixJQUFJO0lBQ0o7O09BRUc7SUFDSSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUk7UUFDekIsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLO1FBQ3pCLE9BQU8sRUFBRSxDQUFDO1FBQ1YsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixxSEFBcUg7UUFDckgsNkNBQTZDO1FBQzdDLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQixxRkFBcUY7UUFDckYsNkVBQTZFO1FBQzdFLE1BQU07UUFDTixZQUFZO1FBQ1osNkNBQTZDO1FBQzdDLHdDQUF3QztRQUN4QyxxQ0FBcUM7UUFDckMsNkNBQTZDO1FBQzdDLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLE9BQU87UUFDUCxnQkFBZ0I7SUFDbEIsQ0FBQztJQUNEOzs7T0FHRztJQUNILGNBQWMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QiwrUUFBK1E7WUFDL1EsdUVBQXVFO1lBQ3ZFLE9BQU87WUFDUCxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM5QixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUM7b0JBQ1QsS0FBSztvQkFDTCxJQUFJO29CQUNKLEtBQUs7aUJBQ04sQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBakZELHdCQWlGQyJ9