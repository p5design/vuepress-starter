const pluginConf = require("./pluginConf.js");
const navConf = require("./navConf.js");
module.exports = {
  plugins: pluginConf,
  base: "/prjname/",
  title: "项目名称",
  description: "项目说明",
  themeConfig: {
    nav: navConf,
  },
};
