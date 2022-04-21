export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#00f',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  entryPagePath: 'pages/index/index',
  tabBar: {
    "color": "#000",
    "borderStyle": "white",
    "selectedColor": "#0f0",
    "list": [
      {
        "pagePath": "pages/home/index",
        "text": "home222"
      },
      {
        "pagePath": "pages/index/index",
        "text": "index111"
      }
    ]
  }
})
