# react-project
webpack4 + react 全家桶环境搭建

使用webpack4 + react + react-router + mobx + antd + axios + eslint  从零配置的react全家桶项目，
主要实现：
- 
- react-router  配合 react-loadable 实现按需加载
- mobx 实现状态管理
- axios 前后端数据交互
- eslint 代码规范检测
- less 书写 style 样式
- webpack4 splitChunks 实现代码拆分，常用静态资源包拆分并缓存
- webpack4 minimizer 中配置 压缩js，css 代码
- webpack-bundle-analyzer 插件实现代码打包分析
- webpack-dev-server proxy 实现代理（也可以再config/env.js中配置）
- 区分 开发，测试，生产，三个不同环境，不同环境可以配置不同变量

克隆下来，删除我写的demo 后可以直接使用， 如果想使用 sass 需要自行安装并配置
## github [项目地址](https://github.com/dadanihoutao/react-project) 

## 项目简介
#### webpack 版本和主要依赖包版本
```json
"webpack": "^4.42.1",
"webpack-cli": "^3.3.11",

"antd": "^4.1.0",
"axios": "^0.19.2",
"mobx": "^5.15.4",
"mobx-react": "^6.1.8",
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-loadable": "^5.5.0",
"react-router-dom": "^5.1.2"
```
#### 目录简介
```javascript
--build/
  |-build.js // 执行npm run build 打包命令执行文件入口
  |-utils.js // webpack 配置中提取的公共方法
  |-webpack.base.config.js // webpack 公共基础配置
  |-webpack.dev.config.js // webpack 开发环境配置
  |-webpack.prod.config.js // webpack 测试正式打包配置
--config/
  |-env.js // 开发测试生产，不同环境配置的全局变量
--src/
  |-assets
	  |-images // 图片
	  |-less // 全局less，less变量文件
--router/
  |-loadable.js // react-loadable 按需加载插件封装
  |-router.config.js // 测导航栏数据文件
  |-router.js // 路由配置文件
--store/
  |-index.js // mobx全局状态文件
--utils/
  |-request.js // axios 全局拦截器配置文件
--views/ // 项目页面目录
--app.less  // 全局样式
--main.js // 项目入口文件
--static // 静态资源目录
```
## 使用
项目clone 到本地
```javacript
git clone  https://github.com/dadanihoutao/react-project.git
```
安装依赖
```javacript
npm install 
```
运行
```javascript
npm run dev
```
打包测试
```javascript
npm run build-test
```
打包正式
```javascript
npm run build
```
打包后模块分析(打包完成后会自行打开浏览器)
```javascript
npm run analyz
```
# 版本问题
这个项目使用的是react 比较高的版本，
里边用到了很多react 的新特性，比如生命周期方法已经更改为
```javascript
componentWillMount → UNSAFE_componentWillMount
```
如果安装好依赖后浏览器控制台出现警告 提示 componentWillMount 已经废弃，使用 UNSAFE_componentWillMount 新版生命周期函数，可以参考下边的文章进行修改
#### [react中项目componentWillMount警告](https://blog.csdn.net/HarryHY/article/details/104153011?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-6)
##### [\[译\]React v16.9 新特性](https://blog.csdn.net/lunahaijiao/article/details/99619460?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1)

或者降低react 版本，但是就不能使用react 的新特性了。

# 详细介绍
此项目到此为止一共有6个版本号，之所以要打这么多版本号，是为了方便其他同学借鉴或者学习，每个版本都是配置好一些主要功能后，打了一个版本号，想学习的同学可以，从v.1.0.1 版本开始下载，查看配置。配置文件中有比较详细的注释。具体的配置过程这里就不详细叙述了。网上比较好的教程还是比较多的，我在搭建的过程中也参考了很多网络上的博客教程。最后会附上参考链接
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200412230928239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NoaTg1MTA1MTI3OQ==,size_16,color_FFFFFF,t_70)
## [tag 连接](https://github.com/dadanihoutao/react-project/releases)
v.1.0.5 之前是没有配置eslint 的，如果不想使用eslint 的同学，可以下载 v.1.0.4 使用
预计以后还会有一个版本，v.1.0.6 这个版本会把所有的配置文件中的注释删除掉，干净清爽，以后如果开发react 项目就省去了搭建的时间，可以直接使用了。

如果不想使用mobx ，喜欢使用redux 的话，需要自己配置，这里有一篇参考博客，写的比较详细，可能以后有时间，我也会再搞一个redux 版本的
#### [react+redux+router+webpack+antd环境搭建一版](https://www.cnblogs.com/mybilibili/p/10424448.html) 
#### [用webpack4从零开始构建react脚手架](https://www.cnblogs.com/guojbing/p/10391501.html)
上边的这篇文章也是使用的redux。配置redux 的话可以参考借鉴

### 写在最后
因为 webpack 更新比较快，webpack中文网的文档已经没有更新了，里边的内容还是webpack3版本的，但是官网上的版本好却是 4.42.1 的，刚开始阅读的时候没有发现，稍微往后发现了好多坑。就直接放弃这个文档了。后来找到一篇 **印记中国** 翻译的最新的webpack4 的文档，虽然里边也有几个小坑，但是绝对是现在市面上webpack4中文翻译最好的文档了，英语不好的小伙伴可以阅读这个文档，来学习webpack4 的知识。这里放个连接：
##### [webpack4 最新中文文档, 印记中国翻译](https://webpack.docschina.org/guides/)
我是阅读完中文文档以后开始搭建的，其中也在网上参考了很多资料，包括vue-cli2 搭建的项目中 webpack 的配置，熟悉vue 的同学，应该能发现，项目配置目录也是借鉴的 vue-cli2 生成的webpack3 的配置（vue-cli2 生成的webpack3 的配置因为是尤老大写的，还是有很多值得参考的地方的）

### 本文参考链接
主要参考下边的这篇博客，一共有5章，每一步配置写的都很详细，webpack 初学者，可以根据这篇文章从零配置搭建
##### [react+webpack4搭建前端项目（一）](https://www.jianshu.com/p/04e436cf75ba)
##### [eslint 中文网](https://eslint.bootcss.com/docs/rules/) 
##### [react+eslint 配置](https://blog.csdn.net/huangpb123/article/details/95936311)
eslint中文网 可以查阅所有的eslint 基本配置，可以根据自己喜欢的规则去配置

##### [webpack 4 搭建 React 架构：实现热更新（二）](https://www.jianshu.com/p/78e296fdd7cb)
最后附上几篇非常精简的webpack4 的相关文章，用来快速学些入门
##### [【Webpack】319- Webpack4 入门手册（共 18 章）（上）](https://mp.weixin.qq.com/s/qIbUEFS1SUdlm8-Z8ecmmg)
##### [【Webpack】320- Webpack4 入门手册（共 18 章）（下）](https://mp.weixin.qq.com/s/pW-paZdny8u28l-M9KZFQw)




