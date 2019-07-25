# mpvue-app

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

### 技术点介绍
本项目使用到vue + vuex数据流  
暂时未使用到ui框架 可以考虑和uni-app ui框架一起使用  
建议使用utils工具类 详细如下  
data.js 数组或者对象的 增删改  
dedounce.js 防抖操作  
promiseWrapper.js promise 封装  
index.js 各种工具类  
