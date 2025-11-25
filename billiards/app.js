App({
  onLaunch() {
    // 小程序初始化完成时触发
    console.log('小程序初始化完成');
  },
  onShow() {
    // 小程序启动，或从后台进入前台显示时触发
    console.log('小程序启动或从后台进入前台');
  },
  onHide() {
    // 小程序从前台进入后台时触发
    console.log('小程序从前台进入后台');
  },
});
