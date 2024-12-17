const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-12-16', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到炎黄产业研究院', url: 'https://www.richtree.cc/' },
    { title: '访问研究中心获取更多咨询', url: 'https://www.richtree.cc/yanjiuyuan.html' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享政策洞察',
  HEO_HERO_TITLE_2: '与市场认知',
  HEO_HERO_TITLE_3: '炎黄产业研究院',
  HEO_HERO_TITLE_4: '全新上线',
  HEO_HERO_TITLE_5: '轻松掌握政策与市场趋势',
  HEO_HERO_TITLE_LINK: 'https://www.richtree.cc/',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '快速阅览',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热点洞察', url: '/tag/热点洞察' },
  HEO_HERO_CATEGORY_3: { title: '行业研究', url: '/tag/行业研究' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '📊 深耕政策与市场洞察',
    '🧭 专注趋势解读与前瞻',
    '📈 助力企业精准决策者',
    '🏢 产业发展专业分析师',
    '🔎 区域经济深度研究员',
    '🚀 机构战略赋能智囊团'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://www.richtree.cc/',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.richtree.cc/',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/SDL.png',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/yhzb.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/ljyy.png',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/AITY.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/shcs.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/kytj.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/winwin.png',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/ltsz.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/HGYJ.png',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/cjyyj.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/jslh.png',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707ggn.png',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20241217221428.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://www.richtree.cc/recruit.html',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
