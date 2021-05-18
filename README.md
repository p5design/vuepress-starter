# vuepress-starter

基于 vuepress 实现的文档脚手架，帮你配置导航信息与提供辅助运行脚本

## 项目依赖

| 库                           | 版本  | 说明           |
| :--------------------------- | :---- | :------------- |
| vuepress                     | 1.8.2 | 生成文档       |
| vuepress-plugin-auto-sidebar | 2.2.2 | 生成侧边栏链接 |
| @vuepress/plugin-back-to-top | 1.8.2 | 返回文档顶部   |
| @vuepress/plugin-nprogress   | 1.8.2 | 显示加载进度条 |



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
  |   |   |-- config.js               # 项目基本信息（根据项目自定修改）
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

# 预览文档
doc_run dev

# 编译文档
doc_run build

# 拷贝编译后的文档到指定服务器目录下
# 重要:需要先补全doc_run文件中的scp_tar参数，例如 xxx@192.168.1.1:/opt/xxxx 
doc_run public

# 编译+发布
doc_run all
```