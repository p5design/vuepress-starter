const pluginConf = require("./pluginConf.js");
const navConf = require("./navConf.js");
const mdConf = require("./mdConf.js");
module.exports = {
  plugins: pluginConf,
  base: "/project-name/",
  title: "项目名称",
  description: "项目说明",
  themeConfig: {
    nav: navConf,
  },
  markdown: mdConf,
};
