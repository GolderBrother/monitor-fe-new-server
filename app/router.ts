import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // 前端前沿知识爬虫
  router.get('/monitorNews', controller.monitorNews.index);
  // 推送微信机器人消息
  router.get('/sendMsg2WeiXin', controller.monitorNews.sendMsg2WeiXin);
  // 定时任务
  router.get('/schedule', controller.scheduleController.scheduleHandler);
};
