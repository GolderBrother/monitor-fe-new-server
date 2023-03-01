// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportHome from '../../../app/controller/home';
import ExportMonitorNews from '../../../app/controller/monitorNews';
import ExportScheduleController from '../../../app/controller/scheduleController';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    home: ExportHome;
    monitorNews: ExportMonitorNews;
    scheduleController: ExportScheduleController;
  }
}
