const SERVE = false; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "Dtlalala-Blog"; // 个人网站名字

const BLOG_URL = "https://www.dtlalala.top"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/dtlalala"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "wallhaven.png"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "Projects" },
  { sortId: 2, title: "AboutMe" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "ABOUT",
    subtitle: "About by terminal",
    url: "/terminal",
    icon: "terminal.svg"
  },
  {
    pageId: 2,
    sortId: 1,
    title: "简单的个人图片列表",
    subtitle: "Photo Gallery",
    url: "http://116.62.15.24:8090/",
    icon: "gallery.svg"
  },
  {
    pageId: 3,
    sortId: 2,
    title: "Blog",
    subtitle: "Hexo Blog for me",
    url: "http://www.dtlalala.top/",
    icon: "blog.svg"
  },
  {
    pageId: 4,
    sortId: 2,
    title: "GitHub",
    subtitle: "My Github",
    url: "https://github.com/dtlalala",
    icon: "github.svg"
  },
  {
    pageId: 5,
    sortId: 2,
    title: "Bilibili",
    subtitle: "My Bilibili",
    url: "https://space.bilibili.com/320611356",
    icon: "bilibili.svg"
  },
  {
    pageId: 6,
    sortId: 2,
    title: "Weibo",
    subtitle: "My Weibo",
    url: "https://weibo.com/6032130346/profile",
    icon: "weibo.svg"
  },
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "Welcome, my friend!",
  "嗨，别来无恙",
  "最近还好吗？",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
