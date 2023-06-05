// 配置
window.Config = {

  // 站点名
  SiteName: '阿付の控制台 状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur986451-35b51ec394a7f23516df5149',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 50,

  // 导航栏菜单
  Navi: [
    {

    },
  ]
};
