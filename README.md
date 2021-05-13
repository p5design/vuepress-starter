# vuepress-starter

基于 vuepress 实现的文档脚手架，帮你配置导航信息与提供辅助运行脚本

## 项目依赖

| 库                           | 版本  | 说明         |
| :--------------------------- | :---- | :----------- |
| vuepress                     | 1.8.2 | 生成文档     |
| @vuepress/plugin-back-to-top | 1.8.2 | 返回文档顶部 |
| vuepress-plugin-auto-sidebar | 2.2.2 | 生成侧边栏   |


## 目录结构

```bash
$ROOT/                                # 根目录
  |-- 01_requirement/                 # 需求
  |-- 02_design/                      # 设计
  |-- 03_other/                       # 其他文件
  |-- 04_markdown/                    # 文档源文件
  |   |-- .vuepress/                  # vuepress配置目录
  |   |   |-- dist/                   # 打包目录
  |   |   |-- utils/                  # 帮助js文件
  |   |   |-- config.js
  |   |   |-- headConf.js
  |   |   |-- navConf.js
  |   |   |-- pluginConf.js
  |   |-- data/
  |   |   |-- README.md               # 【数据结构】入口文件
  |   |-- api/
  |   |   |-- README.md               # 【数据接口】入口文件
  |   |-- README.md                   # 【首页】入口文件
  |-- doc_run                         # 文档辅助命令，包括预览，打包，发布
  |-- package.json                    # 项目依赖配置
  |-- README.md                       # 本说明文件
```
