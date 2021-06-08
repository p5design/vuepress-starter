# vuepress-starter

提供开箱即用的项目文档脚手架


## 快速开始

首选确保本地的 `Node Version >= 10.0`

```bash
# 下载项目到本地
# --depth 1 参数可以清除历史记录
git clone --depth 1 https://github.com/p5design/vuepress-starter.git

# 进入目录
cd vuepress-starter

# 安装依赖
npm install

# 启动开发模式
npm run dev

# 或使用 doc_run 脚本启动开发模式
doc_run dev
```

## 项目依赖与功能

| 依赖库                                                                                                | 版本  | 功能说明               |
| :---------------------------------------------------------------------------------------------------- | :---- | :--------------------- |
| [vuepress](https://github.com/vuejs/vuepress)                                                         | 1.8.2 | 生成文档               |
| [vuepress-plugin-auto-sidebar](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar)          | 2.2.3 | 生成侧边栏链接         |
| [vuepress-plugin-image](https://github.com/im/vuepress-plugin-image)                                  | 1.0.4 | 控制图片大小，懒加载等 |
| [@vuepress/plugin-back-to-top](https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html) | 1.8.2 | 返回文档顶部           |
| [@vuepress/plugin-nprogress](https://v1.vuepress.vuejs.org/plugin/official/plugin-nprogress.html)     | 1.8.2 | 显示加载进度条         |
| [markdown-it-disable-url-encode](https://github.com/nanyuantingfeng/markdown-it-disable-url-encode)   | 1.0.1 | 图片路径支持中文       |


## 目录结构

```bash
$ROOT/                                # 根目录
  |-- 01_requirement/                 # 需求
  |-- 02_design/                      # 设计
  |-- 03_other/                       # 其他文件
  |-- 04_markdown/                    # 文档源文件
  |   |-- .vuepress/                  # vuepress配置目录
  |   |   |-- dist/                   # 打包目录
  |   |   |-- utils/                  # js文件目录
  |   |   |-- config.js               # 项目基本信息（根据项目自定修改）
  |   |   |-- mdConf.js               # markdown插件配置（根据项目自行修改）
  |   |   |-- navConf.js              # 导航栏链接（根据项目自行修改）
  |   |   |-- pluginConf.js           # 插件配置
  |   |-- data/                       # 【数据结构】目录
  |   |   |-- README.md               # 【数据结构】入口文件
  |   |-- api/                        # 【数据接口】目录
  |   |   |-- README.md               # 【数据接口】入口文件
  |   |-- README.md                   # 【首页】入口文件
  |-- doc_run                         # 辅助脚本，包括预览，打包，发布
  |-- package.json                    # 项目依赖配置
  |-- README.md                       # 本说明文件
```

## doc_run 脚本说明

```bash
# 查看说明
doc_run

# 预览文档（开发模式）
doc_run dev

# 编译文档（发布模式）
doc_run build

# 拷贝编译后的文档到指定服务器目录下
# 重要:需要先补全doc_run文件中的scp_tar参数，例如 xxx@192.168.1.1:/opt/xxxx 
doc_run public

# 编译+发布，依次执行 build 和 public
doc_run all
```