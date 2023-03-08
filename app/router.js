"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    const { controller, router } = app;
    router.get('/', controller.home.index);
    // 前端前沿知识爬虫
    router.get('/monitorNews', controller.monitorNews.index);
    // 推送微信机器人消息
    router.get('/sendMsg2WeiXin', controller.monitorNews.sendMsg2WeiXin);
    // 定时任务
    router.get('/schedule', controller.scheduleController.scheduleHandler);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDbEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxXQUFXO0lBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxZQUFZO0lBQ1osTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLE9BQU87SUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDIn0=