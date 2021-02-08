module.exports = {
  "title": "YuYin's Blog",
  "description": "Keep Thinking",
  //"dest": "/var/www/laravel/test/public/blog",
  //"base":"/blog/",
  "dest":"docs/.vuepress/dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
        appId: 'vJtxNMeuGPWxlEN9L8AEaD0K-gzGzoHsz',// your appId
        appKey: '8QkTDXtyHjB9j4epy2fccCj4', // your appKey
        visitor: true,
        placeholder:"留下你的回复..."
    },

    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/yuyinws",
            "icon": "reco-github"
          },
          {
              "text":"微博",
              "link":"https://weibo.com/lyuuc",
              "icon":"reco-weibo"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "KeyLoL",
        "desc": "这个坛子里的老哥各个说话都好听!",
        "link": "https://www.KeyLoL.com",
        "logo":"/keylol.jpg"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "YuYin",
    "authorAvatar": "/avatar.jpg",
    "record": "浙ICP备20015584号",
    "recordLink":"http://www.beian.miit.gov.cn/",
    "startYear": '2020',
  },
  "markdown": {
    "lineNumbers": true
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins:[
    ["vuepress-plugin-boxx"]
  ]
}