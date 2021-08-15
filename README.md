# webpanda.js

> webpanda.js 是用于在 web 上构建项目的 JavaScript 框架。  
> webpanda.js is JavaScript framework for building project on the web.

官方网站：[http://webpandajs.com](http://webpandajs.com)  
中文文档：[http://repository.webpandajs.com/docs/zh_CN/](http://repository.webpandajs.com/docs/zh_CN/)
参考项目：[王阿和博客](http://xn--9krr1as9mqx0afp2b.xn--b6qp9e.xn--io0a7i/)  

## 参考项目

使用 webpanda.js 框架构建的项目大多都是后台管理系统，因为不需要考虑 SEO 优化。

目前公开的参考项目是一个博客系统，前端是使用 webpanda.js 框架构建。预览地址：[王阿和博客](http://xn--9krr1as9mqx0afp2b.xn--b6qp9e.xn--io0a7i/) 


# 极速的项目构建

webpanda.js 基于 ECMAScript 5 原生 JavaScript 开发，遵循原生 HTML、CSS、JavaScript 的开发模式，拿来即用，无需打包。不依赖各种前端工具（如 webpack 等，但从优化方面考虑，可以借助压缩工具，如：UglifyJS），不需要脚手架，不折腾依赖包，开发环境不需要安装 node，不用学习 TypeScript 、JSX，不需要复杂的配置，只面向浏览器本身进行前端开发、调试。

> 直接刷新浏览器，无需打包，返璞归真，一样能模块化，开发即生产，简单又高效，让 Webpack 、Vite 通通滚蛋，只让一切变得简单，让前端的生活充满意义。



# 程序文件按需加载

无论程序文件大小如何，都始终按需加载，用了哪些文件就加载哪些文件，不需要打包，更不需要分包。模板文件（HTML）、样式文件（CSS）、工程文件 （JavaScript）动态远程选择性的同步、异步的方式包含引入，可以根据业务需求将文件分散到多个静态文件服务器，实现分布式部署。


# 工程模块化

将一个大程序拆分成无数个小工程，工程之间支持多继承、封装，也可以相互调用，具备高内聚低耦合的能力。我们可以将各种插件、功能、组件都封装成工程，代码重复使用，减少代码量，提高开发效率，能显著增强代码的可读性、可维护性和可变更性。


# 模板语法简单高效

webpanda.js 基于 ECMAScript 5 的原生 JavaScript 开发，将模板解析为抽象节点树（Abstract Node Tree），并且利用 Object.defineProperty 的特性，实现了渲染数据的监听、更新视图等强大功能。


# 兼容传统UI框架 兼容IE9+浏览器

搭配 bootstrap、layui 等前端 UI 框架，能快速构建页面。同时以前的原生老项目，能快速替换成单页应用模式。框架不支持 IE8 及以下版本，但它支持所有兼容 ECMAScript 5 的浏览器。

