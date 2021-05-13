const pluginConf = require("./pluginConf.js");
const navConf = require("./navConf.js");
module.exports = {
  plugins: pluginConf,
  base: "/projectName/",
  title: "项目名称",
  description: "项目说明",
  themeConfig: {
    nav: navConf,
  },
};
