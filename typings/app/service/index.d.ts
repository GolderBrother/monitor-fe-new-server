// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportBaseServiceIndex from '../../../app/service/baseService/index';
import ExportMonitorNewsIndex from '../../../app/service/monitorNews/index';
import ExportPuppeteerNews from '../../../app/service/puppeteer/news';
import ExportScheduleIndex from '../../../app/service/schedule/index';
import ExportScheduleScheduleRule from '../../../app/service/schedule/scheduleRule';
import ExportSendMsgQyweixin from '../../../app/service/sendMsg/qyweixin';
import ExportSpiderGithubIssuesIndex from '../../../app/service/spider/githubIssues/index';
import ExportSpiderGithubTrendingIndex from '../../../app/service/spider/githubTrending/index';
import ExportSpiderJuejinIndex from '../../../app/service/spider/juejin/index';
import ExportSpiderMeituanIndex from '../../../app/service/spider/meituan/index';
import ExportSpiderNewcoderIndex from '../../../app/service/spider/newcoder/index';
import ExportSpiderSegmentfaultIndex from '../../../app/service/spider/segmentfault/index';
import ExportSpiderZhihuIndex from '../../../app/service/spider/zhihu/index';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    baseService: {
      index: AutoInstanceType<typeof ExportBaseServiceIndex>;
    }
    monitorNews: {
      index: AutoInstanceType<typeof ExportMonitorNewsIndex>;
    }
    puppeteer: {
      news: AutoInstanceType<typeof ExportPuppeteerNews>;
    }
    schedule: {
      index: AutoInstanceType<typeof ExportScheduleIndex>;
      scheduleRule: AutoInstanceType<typeof ExportScheduleScheduleRule>;
    }
    sendMsg: {
      qyweixin: AutoInstanceType<typeof ExportSendMsgQyweixin>;
    }
    spider: {
      githubIssues: {
        index: AutoInstanceType<typeof ExportSpiderGithubIssuesIndex>;
      }
      githubTrending: {
        index: AutoInstanceType<typeof ExportSpiderGithubTrendingIndex>;
      }
      juejin: {
        index: AutoInstanceType<typeof ExportSpiderJuejinIndex>;
      }
      meituan: {
        index: AutoInstanceType<typeof ExportSpiderMeituanIndex>;
      }
      newcoder: {
        index: AutoInstanceType<typeof ExportSpiderNewcoderIndex>;
      }
      segmentfault: {
        index: AutoInstanceType<typeof ExportSpiderSegmentfaultIndex>;
      }
      zhihu: {
        index: AutoInstanceType<typeof ExportSpiderZhihuIndex>;
      }
    }
  }
}
