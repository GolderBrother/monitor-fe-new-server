import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

// https://gitee.com/mmdapl/egg-axios-plus
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1662278066490_6803";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    bizTypeToken: "1b7ff774-5ed2-4042-b0e9-f86c90183cdf", // 企业微信群机器人
  };

  // const axiosConfig = {
  //   // can set more config in headers,like token,references and so on
  //   headers: {
  //     common: {
  //       "Content-Type": "application/json; charset=UTF-8",
  //       // 添加认证【例如】，也可以在请求拦截器中修改具体的request config
  //       // 'Authorization':'19980115_520' // 不要问我19980115是什么，当然是女朋友生日呀！！！
  //     },
  //     // 可以设置请求头等属性
  //   },
  //   // 定义请求拦截器处理方法【可选】
  //   // requestInterceptorsHandler: config => {
  //   //   // 请求之前的配置信息
  //   //   // 当该字段【函数】不存在是，默认如下：
  //   //   app.coreLogger.debug(`[egg-axios-plus] send request, baseURL: ${JSON.stringify(config.baseURL)}, url: ${config.url}, method: ${config.method}, data: ${JSON.stringify(config.data)}, headers: ${JSON.stringify(config.headers)}`);
  //   //   return config;
  //   // },
  //   // requestInterceptorsErrorHandler: error => {
  //   //   // 请求之后发生的错误信息
  //   //   // 当该字段【函数】不存在是，默认如下：
  //   //   app.coreLogger.error(`[egg-axios-plus] send request error, ${error.message}`);
  //   //   return Promise.reject(error);
  //   // },
  //   // // 定义axios响应拦截器处理方法【可选】
  //   // responseInterceptorsHandler: response => {
  //   //   // response 响应结果
  //   //   // 当该字段【函数】不存在是，默认如下：
  //   //   app.coreLogger.debug(`[egg-axios-plus] receive response, data: ${JSON.stringify(response.data)}, status: ${response.status}, headers: ${JSON.stringify(response.headers)}`);
  //   //   if (response.config && (response.config.method.toUpperCase() === 'HEAD' || response.config.method.toUpperCase() === 'options')) {
  //   //     return response;
  //   //   }
  //   //   return response.data;
  //   // },
  //   // responseInterceptorsErrorHandler: error => {
  //   //   // 接口响应失败的错误结果
  //   //   // 当该字段【函数】不存在是，默认如下：
  //   //   app.coreLogger.error(`[egg-axios-plus] receive response error, ${error.message}`);
  //   //   return Promise.reject(error);
  //   // },
  //   timeout: 5000, // 默认请求超时
  //   app: true, // 在app.js上启动加载
  //   agent: false, // 在agent.js上启动加载
  // };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
