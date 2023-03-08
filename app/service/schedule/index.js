"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseService_1 = __importDefault(require("../baseService"));
const schedule_1 = require("../../utils/schedule");
const common_1 = require("../../common");
const scheduleRule_1 = require("./scheduleRule");
class Index extends baseService_1.default {
    /**
     * 执行定时任务
     * @param scheduleTask 定时任务
     */
    async scheduleHandler(scheduleTask, bizType) {
        switch (bizType) {
            case common_1.EBizType.JUEJIN:
                (0, schedule_1.scheduleHandler)(scheduleTask, scheduleRule_1.ScheduleRule.JUEJIN);
                break;
            case common_1.EBizType.JUEJINNode:
                (0, schedule_1.scheduleHandler)(scheduleTask, scheduleRule_1.ScheduleRule.JUEJINNode);
                break;
            case common_1.EBizType.SEGMENTFAULT:
                (0, schedule_1.scheduleHandler)(scheduleTask, scheduleRule_1.ScheduleRule.SEGMENTFAULT);
                break;
            case common_1.EBizType.ZHIHU:
                (0, schedule_1.scheduleHandler)(scheduleTask, scheduleRule_1.ScheduleRule.ZHIHU);
                break;
            case common_1.EBizType.GITHUB_TRENDING:
                (0, schedule_1.scheduleHandler)(scheduleTask, scheduleRule_1.ScheduleRule.GITHUB_TRENDING);
                break;
            default:
                break;
        }
    }
}
exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUF5QztBQUN6QyxtREFBdUQ7QUFDdkQseUNBQXdDO0FBQ3hDLGlEQUE4QztBQUM5QyxNQUFxQixLQUFNLFNBQVEscUJBQVc7SUFDNUM7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FBQyxZQUFzQixFQUFFLE9BQWlCO1FBQzdELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxpQkFBUSxDQUFDLE1BQU07Z0JBQ2xCLElBQUEsMEJBQWUsRUFBQyxZQUFZLEVBQUUsMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsTUFBTTtZQUNSLEtBQUssaUJBQVEsQ0FBQyxVQUFVO2dCQUN0QixJQUFBLDBCQUFlLEVBQUMsWUFBWSxFQUFFLDJCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZELE1BQU07WUFDUixLQUFLLGlCQUFRLENBQUMsWUFBWTtnQkFDeEIsSUFBQSwwQkFBZSxFQUFDLFlBQVksRUFBRSwyQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1IsS0FBSyxpQkFBUSxDQUFDLEtBQUs7Z0JBQ2pCLElBQUEsMEJBQWUsRUFBQyxZQUFZLEVBQUUsMkJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNSLEtBQUssaUJBQVEsQ0FBQyxlQUFlO2dCQUMzQixJQUFBLDBCQUFlLEVBQUMsWUFBWSxFQUFFLDJCQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzVELE1BQU07WUFDUjtnQkFDRSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0NBQ0Y7QUExQkQsd0JBMEJDIn0=