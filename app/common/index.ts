// 爬虫站点枚举
export enum EBizType {
  /** 牛客:https://www.nowcoder.com/ */
  NEWCODER = "newcoder",
  /** 稀土掘金前端:https://juejin.cn/ */
  JUEJIN = "juejin",
  JUEJINNode = "juejinNode",
  /** segmentfault: https://segmentfault.com/ */
  SEGMENTFAULT = "segmentfault",
  /** 知乎: https://www.zhihu.com/ */
  ZHIHU = "zhihu",
  /** github trending: https://github.com/trending/javascript */
  GITHUB_TRENDING= "githubTrending",
  /** github issues */
  GITHUBISSUES = "githubIssues",
  /** 美团外卖: https://h5.waimai.meituan.com/waimai/mindex/home */
  MEITUAN = "meituan",
}

/**
 * 企业微信群机器人Token
 */
export const QY_WEI_XIN_ROBOT_TOKEN = 'dabb1391-bdfe-483e-a93d-3079b8feedd9';