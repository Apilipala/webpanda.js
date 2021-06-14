# webpanda\.js 


官方网站：[http://webpandajs.com](http://webpandajs.com)  

源码站点：[http://repository.webpandajs.com](http://repository.webpandajs.com)  


> webpanda.js 是用于在 web 上构建项目的 JavaScript 框架。  
> webpanda.js is JavaScript framework for building project on the web.



- [webpanda\.js](#webpandajs)
- [安装](#安装)
  - [兼容性](#兼容性)
  - [多语言与自定义语言](#多语言与自定义语言)
  - [开发环境与生产环境](#开发环境与生产环境)
- [框架](#框架)
  - [选项 webpanda.option](#选项-webpandaoption)
  - [代码示例](#代码示例)
  - [webpanda(object) 定义](#webpandaobject-定义)
    - [version 版本号](#version-版本号)
    - [includeDisableCache 包含文件是否禁用缓存](#includedisablecache-包含文件是否禁用缓存)
    - [includeSelector 包含文件筛选器](#includeselector-包含文件筛选器)
    - [includeMethod 包含文件筛选器的添加方法](#includemethod-包含文件筛选器的添加方法)
    - [historyPageMaximum 浏览记录中的页面上限](#historypagemaximum-浏览记录中的页面上限)
    - [historyStepMaximum 浏览记录中的步数上限](#historystepmaximum-浏览记录中的步数上限)
    - [router 路由设置](#router-路由设置)
    - [environmentVariable 环境变量](#environmentvariable-环境变量)
    - [onpage(project, env) 页面开始执行时](#onpageproject-env-页面开始执行时)
    - [onpaged(project, env) 页面最后执行时](#onpagedproject-env-页面最后执行时)
    - [onpagechange(project, env) 页面改变跳转时](#onpagechangeproject-env-页面改变跳转时)
    - [onpagenotfound(project, env) 页面不存在时触发](#onpagenotfoundproject-env-页面不存在时触发)
    - [onpageprogress(project, env) 页面生命周期进度](#onpageprogressproject-env-页面生命周期进度)
    - [onpagedestroy(project, env) 页面离开销毁时](#onpagedestroyproject-env-页面离开销毁时)
    - [oninclude(project, env) 包含文件开始时](#onincludeproject-env-包含文件开始时)
    - [onincluded(project, env) 包含文件完成时](#onincludedproject-env-包含文件完成时)
    - [onproject(project, env) 工程开始加载时](#onprojectproject-env-工程开始加载时)
    - [onprojected(project, env) 工程完成加载时](#onprojectedproject-env-工程完成加载时)
    - [onready(project, env) 工程开始准备时](#onreadyproject-env-工程开始准备时)
    - [onreadied(project, env) 工程完成准备时](#onreadiedproject-env-工程完成准备时)
    - [on* 其他事件处理函数](#on-其他事件处理函数)
  - [webpanda() 对象](#webpanda-对象)
    - [execute 执行框架](#execute-执行框架)
    - [pageRuntime() 获取当前页面的执行时间](#pageruntime-获取当前页面的执行时间)
    - [pageFirstStatus() 页面是否第一次加载的状态](#pagefirststatus-页面是否第一次加载的状态)
    - [pageProject() 当前页面的工程对象](#pageproject-当前页面的工程对象)
    - [pageUrl() 当前页面的URL对象](#pageurl-当前页面的url对象)
    - [projectAll() 获取所有工程](#projectall-获取所有工程)
    - [includeAll() 获取所有引入(包含)资源](#includeall-获取所有引入包含资源)
  - [框架与工程的事件执行优先级](#框架与工程的事件执行优先级)
- [webpanda\.project() 工程](#webpandaproject-工程)
  - [工程定义](#工程定义)
    - [name 工程名称](#name-工程名称)
    - [selector 筛选器](#selector-筛选器)
    - [template 模板](#template-模板)
    - [include 包含资源文件](#include-包含资源文件)
      - [异步包含](#异步包含)
      - [分布式与跨域包含](#分布式与跨域包含)
    - [extend 继承](#extend-继承)
      - [继承冲突问题](#继承冲突问题)
      - [直属与非直属多次继承](#直属与非直属多次继承)
    - [friend 友元工程](#friend-友元工程)
    - [property 自定义成员属性](#property-自定义成员属性)
    - [data 工程渲染数据](#data-工程渲染数据)
    - [onreadied(project, env) 工程完成准备时](#onreadiedproject-env-工程完成准备时-1)
    - [onpaged(project, env) 页面最后执行时](#onpagedproject-env-页面最后执行时-1)
    - [onpagechange(project, env) 页面改变跳转时](#onpagechangeproject-env-页面改变跳转时-1)
    - [onpagedestroy(project, env) 页面离开销毁时](#onpagedestroyproject-env-页面离开销毁时-1)
    - [onurlchange(project, env) 页面URL改变时](#onurlchangeproject-env-页面url改变时)
    - [onexecute(project, env) 工程开始执行时](#onexecuteproject-env-工程开始执行时)
    - [onexecuted(project, env) 工程结束执行时](#onexecutedproject-env-工程结束执行时)
    - [onexecutestart(project, env) 工程启动执行时](#onexecutestartproject-env-工程启动执行时)
    - [onexecutepause(project, env) 工程暂停执行时](#onexecutepauseproject-env-工程暂停执行时)
    - [onexecutestop(project, env) 工程停止执行时](#onexecutestopproject-env-工程停止执行时)
    - [onrender(project, env) 工程渲染开始时](#onrenderproject-env-工程渲染开始时)
    - [onrendered(project, env) 工程渲染结束时](#onrenderedproject-env-工程渲染结束时)
    - [onrenderstart(project, env) 工程启动渲染时](#onrenderstartproject-env-工程启动渲染时)
    - [onrenderpause(project, env) 工程渲染暂停时](#onrenderpauseproject-env-工程渲染暂停时)
    - [onrenderstop(project, env) 工程渲染停止](#onrenderstopproject-env-工程渲染停止)
    - [onrenderlistener(project, env) 工程渲染监听触发时](#onrenderlistenerproject-env-工程渲染监听触发时)
    - [onshow(project, env) 进入显示该页面时](#onshowproject-env-进入显示该页面时)
    - [onhide(project, env) 离开隐藏该页面时](#onhideproject-env-离开隐藏该页面时)
    - [oncompatibleresize(project, env) 窗口或框架被重新调整大小时](#oncompatibleresizeproject-env-窗口或框架被重新调整大小时)
    - [oncompatiblescroll(project, env) 窗口滚动时](#oncompatiblescrollproject-env-窗口滚动时)
    - [on*(project, env) 其他 Document 原生事件](#onproject-env-其他-document-原生事件)
  - [工程对象](#工程对象)
    - [name 工程名称](#name-工程名称-1)
    - [index 工程索引](#index-工程索引)
    - [parent 父工程](#parent-父工程)
    - [children 子工程](#children-子工程)
    - [extend 继承属性](#extend-继承属性)
    - [property 成员属性](#property-成员属性)
    - [data 渲染数据](#data-渲染数据)
    - [ready(callback, setting) 准备工程或准备完成执行](#readycallback-setting-准备工程或准备完成执行)
    - [include() 包含源文件](#include-包含源文件)
    - [friend() 友元属性](#friend-友元属性)
    - [clone(name) 克隆工程](#clonename-克隆工程)
    - [page() 加载页面](#page-加载页面)
    - [execute(args) 执行工程](#executeargs-执行工程)
    - [render(args) 渲染工程](#renderargs-渲染工程)
    - [start() 启动执行或渲染](#start-启动执行或渲染)
    - [pause() 暂停执行或渲染](#pause-暂停执行或渲染)
    - [stop() 停止执行或渲染](#stop-停止执行或渲染)
    - [event(config) 启用或关闭事件](#eventconfig-启用或关闭事件)
    - [template(content) 设置或获取模板内容](#templatecontent-设置或获取模板内容)
    - [compiler(compilerObject) 设置或获取编译器](#compilercompilerobject-设置或获取编译器)
    - [selector(ele) 设置或获取筛选器](#selectorele-设置或获取筛选器)
    - [html() 获取渲染后的节点字符串](#html-获取渲染后的节点字符串)
    - [text() 获取渲染后的文本字符串](#text-获取渲染后的文本字符串)
  - [选项 webpanda\.project\.option](#选项-webpandaprojectoption)
  - [检测 webpanda\.project\.isInstanceOf (obj)](#检测-webpandaprojectisinstanceof-obj)
  - [获取工程对象](#获取工程对象)
  - [获取工程准备状态值](#获取工程准备状态值)
  - [获取当前页面工程](#获取当前页面工程)
- [webpanda\.include 包含资源文件](#webpandainclude-包含资源文件)
- [webpanda\.compiler(template,config) 编译模板](#webpandacompilertemplateconfig-编译模板)
  - [选项 webpanda.compiler.option](#选项-webpandacompileroption)
  - [检测 webpanda\.compiler\.isInstanceOf (obj)](#检测-webpandacompilerisinstanceof-obj)
  - [属性](#属性)
  - [方法](#方法)
    - [render(data, config) 渲染](#renderdata-config-渲染)
    - [reparse() 重新解析模板](#reparse-重新解析模板)
    - [clear() 清理渲染节点](#clear-清理渲染节点)
  - [模板语法](#模板语法)
    - [文本输出  webpanda\-html、双小括号](#文本输出--webpanda-html双小括号)
    - [文本打印 webpanda\-text、双大括号](#文本打印-webpanda-text双大括号)
    - [模板 webpanda\-template](#模板-webpanda-template)
      - [模板递归嵌入会造成死循环](#模板递归嵌入会造成死循环)
    - [遍历 webpanda\-for](#遍历-webpanda-for)
    - [包裹  webpanda\-void 、&lt;webpanda&gt;](#包裹--webpanda-void-webpanda)
    - [分支 webpanda\-if、webpanda\-else\-if、webpanda\-elseif、webpanda\-else](#分支-webpanda-ifwebpanda-else-ifwebpanda-elseifwebpanda-else)
    - [条件 webpanda\-is](#条件-webpanda-is)
    - [属性 webpanda\-attribute、webpanda\-attr](#属性-webpanda-attributewebpanda-attr)
      - [单个属性操作 webpanda\-attribute\-\*](#单个属性操作-webpanda-attribute-)
    - [类 webpanda\-class](#类-webpanda-class)
      - [单个类名称操作 webpanda\-class\-\*](#单个类名称操作-webpanda-class-)
    - [样式 webpanda\-style](#样式-webpanda-style)
      - [单个样式操作 webpanda\-style\-\*](#单个样式操作-webpanda-style-)
    - [事件 webpanda\-event](#事件-webpanda-event)
      - [返回值为false，阻止系统默认（行为）](#返回值为false阻止系统默认行为)
    - [前置 webpanda\-before](#前置-webpanda-before)
    - [后置 webpanda\-after](#后置-webpanda-after)
  - [模板预编译参数](#模板预编译参数)
    - [模板预编译参数会不会与字符串的 “\#” 井号冲突呢？不会](#模板预编译参数会不会与字符串的--井号冲突呢不会)
    - [表单取值代码示例](#表单取值代码示例)
  - [模板语法简写](#模板语法简写)
    - [命令前缀  “webpanda\-” 简写为 “\-”](#命令前缀--webpanda--简写为--)
    - [命令前缀  “webpanda\-attribute-” 简写为 “\-\-”](#命令前缀--webpanda-attribute--简写为---)
  - [知识点](#知识点)
    - [webpanda\-template、webpanda\-html 打印模板字符串比较](#webpanda-templatewebpanda-html-打印模板字符串比较)
    - [webpanda\-template、webpanda\-for 模板与遍历的编译性质](#webpanda-templatewebpanda-for-模板与遍历的编译性质)
    - [webpanda\-void、\<webpanda\>、webpanda\-for 无效与遍历渲染性质](#webpanda-voidwebpandawebpanda-for-无效与遍历渲染性质)
  - [常见错误](#常见错误)
    - [为什么渲染数据的变量更新了，然而视图并没有自动刷新渲染？](#为什么渲染数据的变量更新了然而视图并没有自动刷新渲染)
    - [避免渲染数据中函数体未变动以为变动，然后视图并没有自动刷新渲染的错误](#避免渲染数据中函数体未变动以为变动然后视图并没有自动刷新渲染的错误)
    - [模板渲染出现”Maximum call stack size exceeded“错误](#模板渲染出现maximum-call-stack-size-exceeded错误)
- [webpanda\.timer (callback, timeout, limit, global) 页面计时器](#webpandatimer-callback-timeout-limit-global-页面计时器)
  - [属性](#属性-1)
  - [方法](#方法-1)
    - [start() 启动计时器](#start-启动计时器)
    - [stop() 停止计时器](#stop-停止计时器)
    - [status() 状态](#status-状态)
- [webpanda\.history 浏览记录](#webpandahistory-浏览记录)
  - [属性](#属性-2)
    - [backLength 上一页的数量](#backlength-上一页的数量)
    - [forwardLength 下一页的数量](#forwardlength-下一页的数量)
    - [lastLength 上一步的数量](#lastlength-上一步的数量)
    - [nextLength 下一步的数量](#nextlength-下一步的数量)
  - [方法](#方法-2)
    - [back() 上一页](#back-上一页)
    - [forward() 下一页](#forward-下一页)
    - [go(number) 跳转到某一页](#gonumber-跳转到某一页)
    - [last() 上一步](#last-上一步)
    - [next() 下一步](#next-下一步)
    - [step(number) 跳转到某一步](#stepnumber-跳转到某一步)
    - [log() 获取页面的浏览记录列表](#log-获取页面的浏览记录列表)
- [webpanda\.url(location) 地址解析](#webpandaurllocation-地址解析)
  - [选项 webpanda\.url\.option](#选项-webpandaurloption)
  - [检测 webpanda\.url\.isInstanceOf (obj)](#检测-webpandaurlisinstanceof-obj)
  - [属性](#属性-3)
  - [方法](#方法-3)
    - [merge() 合并URL地址或者url对象](#merge-合并url地址或者url对象)
    - [toString(options) 把 url 对象换为 URL 字符串(构造 URL)](#tostringoptions-把-url-对象换为-url-字符串构造-url)
- [webpanda\.require(config) 引入资源文件](#webpandarequireconfig-引入资源文件)
  - [选项 webpanda.require.option](#选项-webpandarequireoption)
  - [检测 webpanda\.require\.isInstanceOf (obj)](#检测-webpandarequireisinstanceof-obj)
  - [属性](#属性-4)
  - [方法](#方法-4)
    - [onerror(e) 错误事件](#onerrore-错误事件)
    - [onsuccess(e) 成功事件](#onsuccesse-成功事件)
    - [append() 向选择器的元素内部追加资源](#append-向选择器的元素内部追加资源)
    - [prepend() 向选择器的元素内部前置资源](#prepend-向选择器的元素内部前置资源)
    - [isExists() 判断资源文件是否已经存在](#isexists-判断资源文件是否已经存在)
    - [isLoad() 判断资源文件是否已经加载](#isload-判断资源文件是否已经加载)
    - [unload() 卸载已加载的资源文件](#unload-卸载已加载的资源文件)
    - [remove() 删除已加载的全部资源文件](#remove-删除已加载的全部资源文件)
- [webpanda.ajax(config) 网络请求](#webpandaajaxconfig-网络请求)
  - [选项 webpanda.ajax.option](#选项-webpandaajaxoption)
  - [检测 webpanda\.ajax\.isInstanceOf (obj)](#检测-webpandaajaxisinstanceof-obj)
  - [属性](#属性-5)
  - [方法](#方法-5)
    - [onready(readyState) 当 readyState 改变时执行事件](#onreadyreadystate-当-readystate-改变时执行事件)
    - [onrequest(XMLHttpRequest) 发送请求前执行事件](#onrequestxmlhttprequest-发送请求前执行事件)
    - [onresponse(result) 请求完成后执行事件](#onresponseresult-请求完成后执行事件)
    - [onerror(result) 响应错误事件](#onerrorresult-响应错误事件)
    - [onsuccess(result) 响应成功事件](#onsuccessresult-响应成功事件)
    - [request() 发起请求](#request-发起请求)
    - [post() 发起POST请求](#post-发起post请求)
    - [get() 发起GET请求](#get-发起get请求)
    - [abort() 中断请求任务](#abort-中断请求任务)
- [webpanda.trim(string) 去除字符串两端的空白字符](#webpandatrimstring-去除字符串两端的空白字符)
- [webpanda\.encodeURL(var) 编码 URL](#webpandaencodeurlvar-编码-url)
- [webpanda\.decodeURL(var) 解码 URL](#webpandadecodeurlvar-解码-url)
- [webpanda\.parseQuery(string) 将URL字符串的query部分, 解析成一个对象](#webpandaparsequerystring-将url字符串的query部分-解析成一个对象)
- [webpanda\.buildQuery(object) 将关联数组和对象生成 URL Query 字符串](#webpandabuildqueryobject-将关联数组和对象生成-url-query-字符串)
- [webpanda\.formData(object) 将关联数组和对象生成 FormData 键值对结构\[!\<=IE9\]](#webpandaformdataobject-将关联数组和对象生成-formdata-键值对结构ie9)
- [webpanda\.encodeHTML(string) 编码HTML标签](#webpandaencodehtmlstring-编码html标签)
- [webpanda\.decodeHTML(string) 解码HTML实体](#webpandadecodehtmlstring-解码html实体)



# 安装

下载地址：[https://github.com/Apilipala/webpanda.js](https://github.com/Apilipala/webpanda.js)

webpanda 安装非常简单，直接下载并用 `<script>` 标签引入，`webpanda` 会被注册为一个全局变量。

> 注意，webpanda\.js 不需要工具链、依赖包，更不需要打包工具，就是原生js传统的开发技能。

```html
<script src="http://repository.webpandajs.com/src/webpanda.release.js"></script>
```



## 兼容性

webpanda.js 不支持 IE8 及以下版本，因为 webpanda.js 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

注意，如果要使用 `FormData` 、`History.pushState` 等接口，那么IE浏览器必须要IE10及以上版本。并且IE9下，工程在引入非css、js的模板文件的时候，不支持带的`HTTP://` 路径，也就是不支持跨域，只能给相对路径（非跨域），否则会报拒绝访问的错误。



## 多语言与自定义语言

目前 `webpanda` 的默认文案是中文简体，可以引入下面的语言方案：

```html
<!-- 英语 -->
<script src="http://repository.webpandajs.com/src/language/en_US.js"></script>
<!-- 中文简体 -->
<script src="http://repository.webpandajs.com/src/language/zh_CN.js"></script>
<!-- 中文繁体 -->
<script src="http://repository.webpandajs.com/src/language/zh_HK.js"></script>
```

也可以自定义其他的语言方案：

```javascript
webpanda.language ({
    // ......
});
```





## 开发环境与生产环境

对于 `webpanda.js` 框架来说，根本不需要分什么开发环境或者生产环境，因为不需要 `webpack` 等类似的中间件，开发即生产，简单又高效。从优化方面考虑，可以借助 CSS、JavaScript 的压缩工具，如：`UglifyJS` 。



# 框架

## 选项 webpanda.option

使用示例：

```javascript
webpanda.option.caseInsensitive
```



| 名称            | 描述                         |
| --------------- | ---------------------------- |
| hash            | 路由 hash 模式               |
| history         | 路由 history 模式            |
| caseInsensitive | 设置路径检索时，大小写不敏感 |





## 代码示例

```javascript
var wp = webpanda ({
    // 版本号
    version : '1.0.0',
    // 是否禁止浏览器缓存
    includeDisableCache : true,
    // 包含筛选器
    includeSelector : 'head',
    // 包含筛选器的添加方法
    includeMethod : 'append',
    // 浏览记录的页面条数限制
    historyPageMaximum : 50,
    // 浏览记录的页面步数限制
    historyStepMaximum : 50,
    
    // 路由设置
    router : {
        // 模式: hash 、 history
        option : webpanda.option.history, // history 模式
        // 页面路径配置
        page : [
            {
                path : '/',
                name : "home",// 工程名称
                src : "/page/home.js",// 工程源文件地址
            },
            {
                path : '/logIn',
                name : "login",// 工程名称
                option : webpanda.option.caseInsensitive,// 设置局部的大小写不敏感
                src : "/page/login.js",// 工程源文件
            },
        ],

    },

    // 环境变量
    environmentVariable : {
        // 域名设置
        domain : function () {
            return 'http://example.com/';

        }
    },

    onpage : function(project, env) {
        console.log (project);// 当前的工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.setting);// 路由设置信息
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);

        // 如已经设置了，直接执行：可能来自 工程 page 方法的执行
		if (typeof this.setting != 'undefined') {
            this.page (this.setting);
        } 
        else if (typeof this.url.path[1] != 'undefined' && this.url.path[1] == 'login') {
            this.page ({
                name : "login",// 工程名称
                src : "/test/home/login.js",// 工程源文件
                callback : function (e) {
                    // 只有在未加载时才执行，否则不执行
                    // 这个回调暂时是保留功能
                    console.log (e);
                }
            });
        } 
        else {
            this.page ();// 如果当前页面链接在框架设置中 `webpanda({router:{page:[...]}})` 不存在（未定义），那么会触发 onPageNotFound 事件（页面不存在）。
        }
    },

    onincluded : function(project, env) {
        if (this.include.isError ()) {
            console.log (this.include.location + ' 引入失败', this);
        } else {
            console.log (this.include.location + ' 引入成功');
        }
    },


});

// 重置版本号并且执行框架
webpanda ({
    version : '1.0.2',
    includeDisableCache : true,
}).execute ();// 执行框架
```



## webpanda(object) 定义



### version 版本号

是一个字符串，一般用于包含文件时的query参数。



### includeDisableCache 包含文件是否禁用缓存

布尔值。如果为 true 那么在包含文件时，query 参数中会添加时间参数，否则不添加。

> 添加实时的时间参数，在包含(引入)文件时，可以避免浏览器的缓存。



### includeSelector 包含文件筛选器

针对 js、css 文件，在包含时父级的节点筛选(选择)器。



### includeMethod 包含文件筛选器的添加方法

针对 js、css 文件，在包含时父级的节点筛选(选择)器指定添加方式。

参考 `webpanda.require` 对象方法的使用，可选值：prepend \| append 。



### historyPageMaximum 浏览记录中的页面上限

页面变更记录的条数最大值，默认 10 。

> 注意，这个是上一页与下一页分别的数量限制。



### historyStepMaximum 浏览记录中的步数上限

在当前页面中，URL变更记录的条数（步数）最大值，默认 10 。

> 注意，与 historyPageMaximum 不同，这个是上一步与下一步共同的数量限制，不是分别限制。



### router 路由设置



```javascript
webpanda ({
	
    // 路由设置
    router : {
        // 模式: webpanda.option.hash 、 webpanda.option.history
        // 大小写不敏感设置: webpanda.option.caseInsensitive
        option : webpanda.option.hash | webpanda.option.caseInsensitive,
        // 页面路径配置
        page : [
            {
                // path 支持函数
                path : function (env) {
                    return env.prefix + '/index/';
                },
                // 工程名称
                name : "index",
                // 选项，设置局部的大小写不敏感
                option : webpanda.option.caseInsensitive,
                // 工程文件地址，支持函数、URL字符串、webpanda.url对象
                src : function (env) {
                    return env.prefix + "/index.js";
                },
            },
            {
                // 路径
                path : '/',
                // 工程名称
                name : "home",
                // 工程源文件地址
                src : "",
            },
            {    
                path : '/login',
                name : "login",
                src : "/login.js",// 工程源文件
            },
        ],

    },

});
```

在路由设置中，支持 hash 、history 两种模式。

> 注意，history 模式下，服务端需要做伪静态的设置。  
> 如果是IE9及小于IE9的浏览器版本，建议使用 hash 模式。

hash 模式如：

```shell
http://example.com/#login?id=123456
```



history 模式如：

```shell
http://example.com/login?id=123456
```

如果是 history 模式，需要服务端伪静态支持。如下 Nginx 示例：

```shell
location / {
  if (!-e $request_filename){
    rewrite ^.*$ /index.html last;
  }
}
```





### environmentVariable 环境变量

是一个对象，设置环境变量，在其他地方会带上该参数，主要是设置一些公用属性、方法。

```javascript
webpanda ({
	
    // 环境变量
    environmentVariable : {

        // 域名设置
        domain : function () {
            return 'http://example.com/';
        },

    },

    onpage : function(project, env) {
        console.log (project);
        console.log (env);// 来自框架设置中自定义的环境变量 environmentVariable
    },

});
```







### onpage(project, env) 页面开始执行时

该事件必须通过使用 `this.page()` 回调函数指定页面工程信息，如果不执行页面将停止加载。

> 注意，如果当前页面链接在框架设置中 `webpanda({router:{page:[...]}})` 不存在（未定义），那么会触发 onpagenotfound 事件（页面不存在）。

```javascript
webpanda ({
	
    onpage : function(project, env) {
        console.log (project);// 当前的工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.setting);// 路由设置信息
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);

        // 如已经设置了，直接执行：可能来自 工程 page 方法的执行
        if (typeof this.setting != 'undefined') {
            this.page (this.setting);
        } 
        // 其他自定义、自动化页面路由
        else if (typeof this.url.path[1] != 'undefined' && this.url.path[1] == 'login') {
            this.page ({
                name : "login",// 工程名称
                src : "/test/home/login.js",// 工程源文件
                callback : function (e) {
                    // 只有在未加载时才执行，否则不执行
                    // 这个回调暂时是保留功能
                    console.log (e);
                }
            });
        } else {
            this.page ();// 如果当前页面链接在框架设置中 `webpanda({router:{page:[...]}})` 不存在（未定义），那么会触发 onpagenotfound 事件（页面不存在）。
        }
    },

});
```



### onpaged(project, env) 页面最后执行时

```javascript
webpanda ({
	
    onpaged : function(project, env) {
        console.log (project);// 当前的页面工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onpagechange(project, env) 页面改变跳转时

```javascript
webpanda ({
	
    onpagechange : function (project, env) {
        console.log (project);// 当前的页面工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);

        if (confirm ("你确定要跳转页面么?")) {
            this.accept ();// 跳转 
        } else {
            this.ignore ();// 禁止跳转 
        }
        
    },

});
```





### onpagenotfound(project, env) 页面不存在时触发

```javascript
webpanda ({
	
    onpagenotfound : function(project, env) {
        console.log (project);// 当前的页面工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onpageprogress(project, env) 页面生命周期进度

```javascript
webpanda ({
	
    onpageprogress : function(project, env) {
        console.log (project);// 当前的页面工程对象，在该事件中有可能为 undefined。工程对象中途才被设置
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.total);// 总进度
        console.log (this.loaded);// 已加载进度
        console.log (this.percent);// 已加载进度百分比
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onpagedestroy(project, env) 页面离开销毁时

```javascript
webpanda ({
    
    onpagedestroy : function(project, env) {
        console.log (project);// 当前的页面工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.setting);// 路由设置信息, 来自 工程 page 方法的执行时，该值不为 undefined
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### oninclude(project, env) 包含文件开始时

```javascript
webpanda ({
	
    oninclude : function(project, env) {
        console.log (project);// 工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.include);// 包含对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onincluded(project, env) 包含文件完成时

```javascript
webpanda ({
	
    onincluded : function(project, env) {
        console.log (project);// 工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.include);// 包含对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



如何判断是否包含成功呢？

```javascript
webpanda ({
	
    onincluded : function(project, env) {
        // 存在错误，说明包含失败
        if (this.include.isError ()) {
            console.log (this.include.location + ' 文件包含失败');
        } else {
            console.log (this.include.location + ' 文件包含成功');
        }
    },

});
```







### onproject(project, env) 工程开始加载时

```javascript
webpanda ({
	
    onproject : function(project, env) {
        console.log (project);// 工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.projectName);// 工程名称
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onprojected(project, env) 工程完成加载时

```javascript
webpanda ({
	
    onprojected : function(project, env) {
        console.log (project);// 工程对象，在该事件中始终为 undefined
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.projectName);// 工程名称
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onready(project, env) 工程开始准备时

```javascript
webpanda ({
	
    onready : function(project, env) {
        console.log (project);// 准备的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onreadied(project, env) 工程完成准备时

```javascript
webpanda ({
	
    onreadied : function(project, env) {
        console.log (project);// 准备的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### on* 其他事件处理函数

框架设置的事件处理函数是有全局效果的，不仅支持上面所示事件处理函数，同时还支持工程定义的同名事件处理函数。比如：`onexecute`、`onrender` 等。


> 注意：事件名称都是小写。





## webpanda() 对象

### execute 执行框架

框架配置信息设置好之后，就可以执行框架了。

只要执行了该方法，框架将生效并且初始化。如果该方法多次执行，（非第一次执行）将会刷新页面工程。

```javascript
// 框架设置
var wp = webpanda ({

    // ......
    
})
// 执行框架
wp.execute ();
```





### pageRuntime() 获取当前页面的执行时间

```javascript
webpanda().pageRuntime();
```



### pageFirstStatus() 页面是否第一次加载的状态

```javascript
webpanda().pageFirstStatus();
```



### pageProject() 当前页面的工程对象

```javascript
webpanda().pageProject();
```





### pageUrl() 当前页面的URL对象

```javascript
webpanda().pageUrl();
```





### projectAll() 获取所有工程

```javascript
webpanda().projectAll();
```





### includeAll() 获取所有引入(包含)资源

```javascript
webpanda().includeAll();
```








## 框架与工程的事件执行优先级

框架定义的事件处理函数为全局，而工程定义的事件处理函数是页面局部的，并且还有标记（激活）的非页面工程的事件。

当事件触发时，优先执行框架定义的事件处理函数，接着执行页面工程定义的事件处理函数，最后执行标记（激活）的非页面工程定义的事件处理函数。



# webpanda\.project() 工程

建议一个页面工程定义，单独放在一个文件中。



## 工程定义



### name 工程名称

每个工程都有一个标识，并且这个标识必须是全局唯一的，这样就可以使用 `webpanda.project(name)` 来访问工程了。

```javascript
webpanda.project ({
    name : "test",
});
```

注意，如果工程定义时未设置名称，将会自动生成一个全局唯一名称。



### selector 筛选器

工程渲染时会将节点渲染到该筛选器节点上。如果不设置，那么就是会渲染到编译器的默认节点上。

```javascript
webpanda.project ({
    selector : "body", // 将工程渲染到 <body></body> 节点容器中
});
```

> 定义值是包含一个或多个要匹配的选择器的 DOM 字符串 DOMString。 该字符串必须是有效的CSS选择器字符串；更多参考 [document\.querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) 方法。



### template 模板

模板定义支持字符串、`webpanda.url`对象、函数，其中函数的返回值必须是字符串或者 `webpanda.url`对象。

> 注意，在继承模板时，URL的方式具有优先级。这是因为字符串模板会先执行赋值，而URL包含是最后执行，会覆盖前面的模板数据。

以字符串的方式定义：

```javascript
webpanda.project ({
    template : '<canvas webpanda-after="getCanvasNode (#node)" webpanda-if="s"></canvas>',
});
```



以 `webpanda.url`对象的方式定义：

```javascript
webpanda.project ({
    template : {
        src : 'index.html',// 也支持 webpanda.url 对象，如：webpanda.url ('index.html')
    },
});
```



以函数的方式定义：

```javascript
webpanda.project ({
    template : function (project, env) {
        // 可以返回对象，也可以返回字符串
        return {
            src : webpanda.url (env.domain () + '/index.html')
        };
    },
});
```





### include 包含资源文件

引入工程文件、模板文件等。并且，相同的资源只会包含一次（包含会被缓存）。在包含参数中可以设置回调函数 callback ，需要注意，`css` 、`js` 与 `json` 、`text` 回调函数的 `this.handle` 对象是不相同的：

> `css` 、`js`  类型的文件，回调函数 `this.handle` 是 `webpanda.require` 对象；   
>  `json` 、`text` 类型的文件，回调函数 `this.handle` 是 `webpanda.ajax` 对象。

通过以下选项值（option）设置包含文件的类型：

```shell
webpanda.project.option.async	异步包含, 主要用于包含不是需要实时的文件
webpanda.project.option.css		指定为css文件类型, 会根据框架includeSelector配置引入文件
webpanda.project.option.js		指定为js文件类型, 会根据框架includeSelector配置引入文件
webpanda.project.option.json	指定为json文件类型, 返回值会自动解析成对象, 如果不是json格式则为“{}”空对象
webpanda.project.option.text	指定为text文件类型, 也是找不到类型时的默认值。一般用于模板等
```



以数组的方式定义：

```javascript
webpanda.project ({

    // 定义数组的方式
    include : [
        "index.js",// 支持URL字符串
        webpanda.url ("index.css"),// 支持webpanda.url对象
        {
            // 也可以在include中引入模板
            src : "index.html",
            option : webpanda.project.option.text,
            callback : function (project, env) {
                // 无论包含成功还是失败都会执行
                // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
                // env 环境变量。来自框架设置中自定义的环境变量
                // this 就是引入对象
                // this.result 就是 Ajax 对象的返回值
                // this.result.data 就是模板内容
                
                // 判断是否包含成功
                if (this.isError ()) {
                    project.template (this.result.data);
                }
                
            },
            onsuccess : function (project, env) {
                // 引入成功后执行
            },
            onerror : function (project, env) {
                // 引入失败后执行
            },
        },
        {
            src : "index.json",// 也可以忽略其他 option 、callback 参数
        },
        {
            // src参数支持回调函数，必须返回字符串。好处就是可以使用环境变量
            src : function (project, env) {
                return env.domain () + '/components.css';
            }
        }
    ],
    
});
```



以函数的方式定义：

```javascript
webpanda.project ({
    
    // 定义函数的方式
    include : function (project, env) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // env 环境变量。来自框架设置中自定义的环境变量
        
   		// 返回一个数组
  		return [
            // 函数定义的好处就是可以使用环境变量
            env.domain () + '/components.css',
            webpanda.url ("index.css"),
            {
                src : "index2.js",
                option : 0,
            },
        ];
    },
    
});
```



支持单个包含引入：

```javascript
webpanda.project ({
    
    // 单个操作的方式
    include : "index.js",
    
});
```





#### 异步包含

有些插件并不需要立即使用，可以使用异步载入，提高页面加载速度。比如插件。而有些资源文件需要立即使用，建议同步，比如模板文件。

```javascript
include : [
    {
        src :"/test/sleep.json",
        // 使用 webpanda.project.option.async 选项，表示异步包含
        option : webpanda.project.option.json|webpanda.project.option.async,
        callback : function (project, env) {
            // project 当前的工程对象。注意，这个时候的工程对象有可能未准备好，也有可能准备好了。因为这里是异步操作，可能会等待延迟等情况
        	// env 环境变量。来自框架设置中自定义的环境变量
            console.log (this, project.name, this.result.data);
        },
    },
],
```



#### 分布式与跨域包含

资源文件支持跨域包含，可以实现分布式部署。但在 IE9 下，不支持带的`HTTP://` 路径，也就是不支持跨域，只能给相对路径（非跨域），否则会报拒绝访问的错误。

```javascript
webpanda.project ({

    include:[
        {
            src : "/default/config.json", 
            callback : function(project, env) {
                console.log (this.result.data);
            }
        },
        {
            // 获取远程模板内容
            src : "http://example.com/default/template.tpl", 
            callback : function(project, env) {
                // this.result.data 就是获取的模板内容
                project.template (this.result.data);
            }
        },
    ],

});
```





### extend 继承

一个工程支持继承多个工程、继承多次某个工程，代码复用，提高维护性。

继承遵守如下规则：

> (1) 越远父级的 include、on*事件 等优先执行;   
> (2) 越近父级的 property、data、selector、template 定义，会覆盖越远父级的 property、data、selector、template 定义;  
> (3) selector、template 在派生工程未定义的情况下才继承父级的 selector、template 定义;  
> (4) 只是继承父级的定义，不是继承父级最新动态属性值。



通过以下选项值（option）设置继承特殊性：

```javascript
webpanda.project.option.overrideEvent		覆盖式继承事件, 派生工程的事件未定义的情况下才被继承
webpanda.project.option.disableSelector     禁止继承父级 selector
webpanda.project.option.disableTemplate     禁止继承父级 template
webpanda.project.option.disableEvent        禁止继承父级事件函数 on*  
webpanda.project.option.disableProperty     禁止继承父级 property
webpanda.project.option.disableData         禁止继承父级 data
webpanda.project.option.disableInclude      禁止继承父级 include
webpanda.project.option.disableFriend       禁止继承父级 friend
```



以数组的方式定义：

```javascript
webpanda.project ({

    // 继承
    extend : [
        // 支持只写要继承的工程名称
        "components-test",

        // 支持对象
        {
            name : "components",
            // src 支持字符串、webpanda.url对象、函数，其中函数必须返回字符串或者url对象
            src : function (project, env) {
                return env.domain () + '/components.js';
            },
        },

        // 支持别名称、选项值
        {
            name: "components-button",
            src: "components/button.js",// 这个可以写到 include 包含，写在这里只能同步、类型指定是js，继承的源文件不能异步
            use: 'components',// 命名空间、间隔、别名称。继承的父 property 、data 属性, 会添加到指定命名中 （添加到 property.components 、 data.components 对象中）
            option: webpanda.project.option.disableEvent,// 禁止事件继承
        },

        // 支持多次继承
        "components-button",
    ],

});
```



以函数的方式定义：

```javascript
webpanda.project ({

    // 继承
    extend : function (project, env) {
        
        // 函数定义的好处就是可以使用环境变量
        return [
            "components-test",
            {
                name : "components",
                src : env.domain () + '/components.js',
            },
        ];
    }

});
```



支持单个继承：

```javascript
webpanda.project ({
    
    // 单个操作的方式
    extend : "components-test",
    
});
```









#### 继承冲突问题

工程之间不要相互继承，这样会造成工程初始化缺陷。在执行派生工程时，会先准备被继承的工程文件，然后要等待被继承的工程准备完毕才执行派生工程。如果派生工程与被继承工程相互继承，这就出现了工程未初始化完成（还在准备状态中），框架不会终止工程的继承操作，但会在控制台面板中输出错误信息。

> 注意，如果是IE浏览器，那么很有可能误报，尝试刷新即可。为什么会误报呢？我他妈的也不清楚，刷新一下他就正常了，这种误报时有时无，很难捕捉和调试。这垃圾浏览器快点消失吧。

如下示例：

```javascript
webpanda.project ({
    name : "home",
    // 该工程与 public 工程相互继承
    extend : ["public"]
});

webpanda.project ({
    name : "public",
    // 该工程与 home 工程相互继承
    extend : ["home"]
});

// 工程在准备时出现死循环，这个时候就会出现只执行一半
webpanda.project ("home", function () {
    // ......
});
```

控制台提示错误：

```shell
Webpanda ProjectError:

┍---------------------------------------------┑

[ready] 工程初始化出错, “public” 工程 与 “home” 工程之间存在互相继承关系, 以致工程准备存在缺陷!

┕---------------------------------------------┙
```





#### 直属与非直属多次继承

所谓直属与非直属多次继承，也就是当前派生类继承了多个父级，而某个父级也继承了与当前派生类同一个父级。如下，`home` 工程 与 `public` 工程，都继承了 `tools` 工程：

> public 工程是 home 工程的直属继承，而 public 工程继承的 tools 工程属于 home 工程的非直属继承。而 home 工程继承的 tools 工程是 home 的直属继承。这里的 tools 被 home 继承了两次，一个是非直属继承，另一个是直属继承。  
> 就算父级工程多次被派生工程继承，而所定义的事件函数始终（去重）只被继承一次。而越近父级的 property、data 定义，会覆盖越远父级的 property、data 定义。

```javascript
webpanda.project ({
    name : "home",
    //这种方式是不受影响的
    extend : ["public", "tools"],
});

webpanda.project ({
    name : "public",
    extend : ["tools"],
    data : function () {
        this.info = "这是 public info",
        this.title = "这是 public title",
        this.message = function() {
            return "这是 public message";
        }
    },
    ondblclick : function (project, env) {
        // this 是事件对象
        console.log (this, project.name, env);
    },
    onclick : function (project, env) {
        // this 是事件对象
        console.log (this, project.name, env);
    },
});

webpanda.project ({
    name : "tools",
    data : function () {
        this.title = "这是 tools title";
        this.message = function() {
            return "这是 tools message";
        };
        this.helper = function() {
            return "这是 tools helper";
        };
    },
    ondblclick : function (project, env) {
        // this 是事件对象
        console.log (this, project.name, env);
    },
});

webpanda.project ("home", function () {
    // 执行页面工程
    console.log ("(1)", this.data.info);
    console.log ("(2)", this.data.title);
    console.log ("(3)", this.data.message ());
    console.log ("(4)", this.data.helper ());
    // tools 工程被继承了多次（直属与非直属），但事件函数始终（去重）只被继承一次，所以长度是2
    console.log ("(5)", Object.keys (this.extend.ondblclick).length);
    console.log ("(6)", Object.keys (this.extend.onclick).length);
});
```

控制台输出：

```shell
(1) 这是 public info
(2) 这是 tools title
(3) 这是 tools message
(4) 这是 tools helper
(5) 2
(6) 1
```





### friend 友元工程

当该工程为页面工程加载渲染时，或者在渲染设置 `webpanda.project.option.alone` 选项时，被设为友元的工程所渲染的节点不会被清理掉，也就是说该工程与友元工程的渲染节点（筛选容器）如果相同，则渲染节点（筛选容器）共享。

> 友元工程的设置，对页面工程有很大的帮助。

以数组的方式定义：

```javascript
webpanda.project ({

    // 定义数组的方式
    friend : ["home", "index"],
    
});
```



以函数的方式定义：

```javascript
webpanda.project ({
    
    // 定义函数的方式
    friend : function (project, env) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // env 环境变量。来自框架设置中自定义的环境变量
        
   		// 返回一个数组
        var ret = new Array ();
        // 合并环境变量中的友元设置: 函数定义的好处就是可以使用环境变量
        ret = ret.concat (env.friends);
        // 当前自定义的设置
        ret.push ("index");
        return ret;
        
    },
    
});
```



支持单个友元：

```javascript
webpanda.project ({
    
    // 单个操作的方式
    friend : "components-test",
    
});
```







### property 自定义成员属性

自定义工程的成员属性，不会被渲染监听，用于非模板非渲染的操作。

定义 Object 的方式：

```javascript
webpanda.project ({

    // Object 定义的方式
    property : {
        test : "这是测试",
        message : "你好，webpanda.js!",
    },

});
```



定义 Function 的方式：

```javascript
webpanda.project ({

    // Function 定义的方式
    property : function (project, env) {
        // 函数定义的好处就是可以使用当前工程对象、环境变量
        // project 当前的工程对象
        // env 环境变量。来自框架设置中自定义的环境变量
        
        var $data = project.data;

        this.test = "这是测试";
        this.message = "你好，webpanda.js!";
        // 可以获取当前渲染数据所属工程对象
        this.getProject = function() {
          return project;
        };
    },

});
```





### data 工程渲染数据

定义工程的模板渲染数据，变量会被渲染监听，用于模板渲染的操作。

定义 Object 的方式：

```javascript
webpanda.project ({

    // Object 定义的方式
    data : {
        test : "这是测试",
        message : "你好，webpanda.js!",
    },

});
```



定义 Function 的方式：

```javascript
webpanda.project ({

    // Function 定义的方式
    data : function (project, env) {
        // 函数定义的好处就是可以使用当前工程对象、环境变量
        // project 当前的工程对象
        // env 环境变量。来自框架设置中自定义的环境变量
        
        var $property = project.property;

        this.test = "这是测试";
        this.message = "你好，webpanda.js!";
        // 可以获取当前渲染数据所属工程对象
        this.getProject = function() {
          return project;
        };
    },

});
```





### onreadied(project, env) 工程完成准备时

```javascript
webpanda.project ({
    
    onreadied : function (project, env) {
        console.log (project);// 当前工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onpaged(project, env) 页面最后执行时

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。











### onpagechange(project, env) 页面改变跳转时

通过该事件可以阻止页面跳转。

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。

捕获该事件时必须执行下面两个函数中的一个，不然页面将会终止：

> `this.accept()` 表示接受跳转；  
> `this.ignore()` 表示忽略跳转（禁止跳转） 。

```javascript
webpanda.project ({

    onpagechange : function (project, env) {
        console.log (project);// 当前的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);

        if (confirm ("你确定要跳转页面么?")) {
            this.accept ();// 跳转 
        } else {
            this.ignore ();// 禁止跳转 
        }
        
    },

});
```



### onpagedestroy(project, env) 页面离开销毁时

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。

```javascript
webpanda.project ({
    
    onpagedestroy : function(project, env) {
        console.log (project);// 当前的页面工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.setting);// 路由设置信息, 来自 工程 page 方法的执行时，该值不为 undefined
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onurlchange(project, env) 页面URL改变时

当URL发送改变时，触发该事件。注意，`onpagechange()` 事件触发时（也就是页面跳转时），该事件不会被触发。

```javascript
webpanda.project ({
    
    onurlchange : function (project, env) {
        console.log (project);// 当前的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.url);// webpanda.url 对象
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```









### onexecute(project, env) 工程开始执行时

执行 `page()`、`execute()` 工程对象方法或者作为页面工程时，会触发该事件。

可以使用 `pause()` 、`start()`、`stop()` 三个工程对象方法，对工程的执行状态进行操作。

```javascript
webpanda.project ({

    onexecute : function (project, env) {
        // 暂停执行
        // project.pause ();

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this);
    },

});
```





### onexecuted(project, env) 工程结束执行时

执行 `page()`、`execute()` 工程对象方法或者作为页面工程时，会触发该事件。特别注意：在工程执行时，当 `stop()` 工程对象方法使用后，该事件不会被执行。

```javascript
webpanda.project ({

    onexecuted : function (project, env) {
        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onexecutestart(project, env) 工程启动执行时

在工程执行时，使用`start()` 工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutestart : function (project, env) {
        // 暂停执行
        // project.pause ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### onexecutepause(project, env) 工程暂停执行时

在工程执行时，使用`pause()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutepause : function (project, env) {

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onexecutestop(project, env) 工程停止执行时

在工程执行时，使用`stop()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutestop : function (project, env) {
        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrender(project, env) 工程渲染开始时

执行 `page()`、`execute()` 、`render()` 工程对象方法或者作为页面工程时，会触发该事件。

可以使用 `pause()` 、`start()`、`stop()` 三个工程对象方法，对工程的执行状态进行操作。

```javascript
webpanda.project ({

    onrender : function (project, env) {
        // 暂停执行
        // project.pause ();

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrendered(project, env) 工程渲染结束时

执行 `page()`、`execute()` 、`render()` 工程对象方法或者作为页面工程时，会触发该事件。特别注意：在工程渲染时，当 `stop()` 工程对象方法使用后，该事件不会被执行。

```javascript
webpanda.project ({

    onrendered : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrenderstart(project, env) 工程启动渲染时

在工程渲染时，使用`start()` 工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderstart : function (project, env) {
        // 暂停执行
        // project.pause ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrenderpause(project, env) 工程渲染暂停时

在工程渲染时，使用`pause()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderpause : function (project, env) {

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrenderstop(project, env) 工程渲染停止

在工程渲染时，使用`stop()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderstop : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onrenderlistener(project, env) 工程渲染监听触发时

 用于编译对象渲染时所设置的 `onlistener` 方法，渲染数据更新时就会触发该事件。

```javascript
webpanda.project ({

    onrenderlistener : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.abstractNodeTree);// 节点树对象
        console.log (this.event.commands);// 指定渲染的模板命令。可能存在多个，所以是一个索引数组
        console.log (this.event.code);// 所更新的数据键名称
        console.log (this.event.message);// 更新消息
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onshow(project, env) 进入显示该页面时

```javascript
webpanda.project ({

    onshow : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.visibilityState);// document.visibilityState 值
        console.log (this.event);// js原生的事件对象参数
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### onhide(project, env) 离开隐藏该页面时

```javascript
webpanda.project ({

    onhide : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.visibilityState);// document.visibilityState 值
        console.log (this.event);// js原生的事件对象参数
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### oncompatibleresize(project, env) 窗口或框架被重新调整大小时

> 该处理事件函数进行了防抖和节流的兼容优化。

```javascript
webpanda.project ({

    oncompatibleresize : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.width);// 宽
        console.log (this.height);// 高
        console.log (this.event);// js原生的事件对象参数
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```





### oncompatiblescroll(project, env) 窗口滚动时

该事件与 onscroll 处理函数一样，窗口滚动时触发。不过 oncompatiblescroll 做了防抖和节流优化。

> 该处理事件函数进行了防抖和节流的兼容优化。

```javascript
webpanda.project ({

    oncompatiblescroll : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.scrollTop);
        console.log (this.scrollLeft);
        console.log (this.scrollWidth);
        console.log (this.scrollHeight);
        console.log (this.event);// js原生的事件对象参数
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```



### on*(project, env) 其他 Document 原生事件

支持添加原生的 document 事件，比如给 document 添加双击的事件处理函数，操作如下：

```javascript
webpanda.project ({
	
    // 在 document 中，JS 原生的双击事件是 ondblclick
    // 在这里就是 "ondblclick" 命名规则, 注意大小写
    ondblclick : function (project, env) {
        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.event);// js原生的事件对象参数
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },

});
```


> 注意：事件名称都是小写。



## 工程对象



### name 工程名称

该属性不可修改和删除。通过名称，是可以直接找到工程对象。

名称具有唯一性，不允许重复创建，但可以删除工程，然后再创建相同名称的工程，如下示例：

```javascript
// 删除已经存在的工程
webpanda.project ('index').remove ();
// 重新定义该名称的工程
webpanda.project ({
    name : 'index',
    // ......
});
```



### index 工程索引

该属性不可修改和删除。从0开始自增，具备全局唯一，每个工程的索引都不同，即使相同的工程名称删除后再创建，其索引也不一样。



### parent 父工程

每个工程都可以继承多个父工程，所以该属性是一个集合。

> 注意，该属性是以父工程的索引为键，所以多次继承同一个父工程，这里只存在一次。



### children 子工程

每个父工程都可以被多个派生工程所继承，所以该属性是一个集合。

> 注意，该属性是以派生工程的索引为键，所以多次被同一个子工程继承，这里只存在一次。



### extend 继承属性

主要是登记派生工程自身与继承所共存的事件处理函数。

> 以事件处理函数名称为主键，而父工程的索引为次键，所以多次继承同一个父工程的事件，其所定义的事件处理函数这里也只存在一次。



### property 成员属性

工程的自定义成员属性是非渲染数据，不会被渲染监听，相对于模板渲染来说，该属性是私有的，也就是说在模板中无法使用该属性值，只能通过 data 中代理处理。

示例如下：

```javascript
webpanda.project ({

    name : 'test',
    // 非渲染数据的定义
    property : function () {

        this.demonstrator = function (node) {
            // ......
        };

    },
    // 渲染数据
    data : function (project) {
        
        // 在模板中访问 toDemonstrator (#node), 代理执行了 project.property.demonstrator
        this.toDemonstrator = function (node) {
            project.property.demonstrator (node);
        };

    },

});
```





### data 渲染数据

渲染页面的数据，会添加渲染监听，相对于模板渲染来说，该数据是公开的，也就是说在模板中可以直接访问该数据的属性值。

关于模板相关，详见 `webpanda.compiler` 的模板语法。



### ready(callback, setting) 准备工程或准备完成执行

返回准备的状态值：

```javascript
-1 表示不存在这个名称的工程，或者这个工程还没有载入进来
0  表示工程未准备
1  表示工程准备完成
2  表示工程准备中
3  表示工程初始化中
```

工程定义后会返回还没有准备的工程对象，那么可以使用 `ready()` 方法进行准备。当然，如果工程是与页面工程一同进入使用，那么在渲染页面的时候，工程已经发起准备的操作了。

```javascript
// 临时定义
var test = webpanda.project ({
    name : "test",
});

// 去准备
var readyState = test.ready ();
```

在明确工程已经载入定义，但不清楚其是否准备好的情况下，使用 `ready(callback)` 方法是最保险的做法

在工程准备时，可能有些同步包含的文件加载时间长，为了更好的控制，是可以设置等待超时。注意，这里的超时只是当前等待回调执行的超时，不是让工程准备操作的超时，也就是说这里的超时设置不影响工程准备。

```javascript
// 去准备
var readyState = test.ready (function () {
    // 当工程载入并且准备完毕后，会执行这个回调函数
    // this 就是这个准备好的工程对象
    console.log (this);
}, {
    global : true,// 是否全局有效，默认false非全局(页面刷新会被取消)
    timeout : 3000,// 3秒后超时
    callback : function () {
        console.log ('这是超时回调函数');
    }
});
```



### include() 包含源文件

如果传入的参数不合法，则返回 false ，否则返回 true 。

> 主要用于一些插件、组件等源文件，在使用时才加载。

包含单个源文件示例：

```javascript
// 获取工程对象
var project = webpanda.project ();
// 包含源文件
project.include ({
    src : "components/components.js",
    option : webpanda.project.option.js,
    callback : function (project, env) {
        // 无论包含成功还是失败都会执行
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // env 环境变量。来自框架设置中自定义的环境变量
        // this 就是引入对象
        // this.result 就是 Ajax 对象的返回值
        // this.result.data 就是模板内容
        
        // 判断是否包含成功
        if (this.isError ()) {
            project.template (this.result.data);
        }
    },
    onsuccess : function (project, env) {
        // 包含成功后执行
    },
    onerror : function (project, env) {
        // 包含失败后执行
    }
});
```

包含多个源文件示例：

```javascript
// 获取工程对象
var project = webpanda.project ();
// 包含源文件
project.include ([
    // 引入模板
    'components/components.html',
    // 引入插件中的插件，使用异步
    {
        src : "components/components-plugin.js",
        option : webpanda.project.option.js,
        onsuccess : function (project, env) {
            // 包含成功后执行去准备
            webpanda.project ('components-plugin').ready ();
        },
    },
    // 引入临时使用的工程
    {
        src : "components/components.js",
        option : webpanda.project.option.js,
        onsuccess : function (project, env) {
            // 包含成功后执行去准备工程，工程准备好后就执行
            webpanda.project ('components').ready (function () {
                this.execute ();
            });
        },
    }
]);
```







### friend() 友元属性

获取该工程的友元工程名称集合，返回一个索引数组。

```javascript
// 获取友元工程名称集合
var friends = webpanda.project ().friend ();
// 添加友元工程名称
webpanda.project ().friend ().push ("test");
```





### clone(name) 克隆工程

克隆工程与继承工程不同。克隆是将被克隆对象的当前属性都拷贝一份，创建新的工程。而继承只是继承父级的定义结构，并不会获取父级的最新动态属性值。

克隆一个随机名称的新工程：

```javascript
// 不设置 name 会自动生成一个唯一的工程名称
var project = webpanda.project ("test").clone ();
```

克隆一个指定名称的新工程，因为有可能名称重复，所以有可能创建失败：

```javascript
var project = webpanda.project ("test").clone ("test1");
if (project) {
    console.log ("工程创建成功：", project.name);
}
```

特别注意，克隆工程会先以源工程的结构体走一遍创建，然后最后会拷贝源工程最新的属性键值。



### page() 加载页面

返回当前工程对象。

以该工程对象作为页面工程配置，来加载页面。并且会执行渲染方法 `render({option:webpanda.project.option.refresh|webpanda.project.option.alone})` ，会强制刷新渲染数据。

> 注意，其会被 `onpage` 事件捕获，最终以捕获的处理事件函数操作为准。





### execute(args) 执行工程

返回当前工程对象。

执行该方法的工程会触发运行事件 `onexecute` 、`onexecuted`、`onrender`、`onrendered` 等事件，并且会执行渲染方法`render({option:0})` ，会强制刷新渲染数据。

在使用时，可以给事件传递参数，并且支持临时事件，如下：

```javascript
// 获取工程对象
var project = webpanda.project('index');
// 执行工程
project.execute ({
    parameter1 : 'parameter1',
    parameter2 : 'parameter2',
    // 选项值, 缺省默认为 0：
    // webpanda.project.option.reload 重载筛选容器
    // webpanda.project.option.refresh 强制刷新渲染
    // webpanda.project.option.alone 未载入时独享筛选容器
    // option : webpanda.project.option.reload|webpanda.project.option.refresh;
    // 支持临时事件
    onexecuted : function (project, env) {
        console.log ('这是临时事件');
        console.log (project);// 当前执行的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 执行的版本号
        console.log (this.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    }
});
```



### render(args) 渲染工程

返回当前工程对象。

执行该方法的工程会触发运行事件 `onrender`、`onrendered` 等事件。

在使用时，可以给事件传递参数，并且支持临时事件，如下：

```javascript
// 获取工程对象
var project = webpanda.project('index');
// 渲染工程
project.render ({
    parameter1 : 'parameter1',
    parameter2 : 'parameter2',
    // 选项值, 缺省默认为 0：
    // webpanda.project.option.reload 重载筛选容器
    // webpanda.project.option.refresh 强制刷新渲染
    // webpanda.project.option.alone 未载入时独享筛选容器
    // option : webpanda.project.option.reload|webpanda.project.option.refresh;
    // 支持临时事件
    onrender : function (project, env) {
        console.log ('这是临时事件 onrender');
        // 暂停执行
        project.pause ();

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },
    onrenderpause : function (project, env) {
        console.log ('这是临时事件 onrenderpause');
        // 启动执行
        project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },
});

```





### start() 启动执行或渲染

返回该工程对象。

> 注意，如果在该方法之前已经执行了 `stop()` 那么将无法启动。启动只对暂停时有效。





### pause() 暂停执行或渲染

返回该工程对象。

> 注意，只有正在执行或者正在渲染才能有效，如果已经停止了，无法暂停。





### stop() 停止执行或渲染

返回该工程对象。

> 注意，如果已经停止了，使用无效。



### event(config) 启用或关闭事件

返回该工程对象。

有时候在页面工程中调用其他工程，并且其他工程在当前工程也能监控一些事件，可以使用该方法。

下面是不支持操作的事件：

```javascript
oninclude,onincluded,onproject,onprojected,onpage,onpagenotfound,onpageprogress,onready,onreadied,onexecute,onexecuted,onexecutestart,onexecutepause,onexecutestop,onrender,onrendered,onrenderstart,onrenderpause,onrenderstop,onrenderlistener
```

参数是布尔值，表示操作所有事件：

```javascript
// 开启所有的事件
webpanda.project("test").event (true);
// 关闭所有的事件
webpanda.project("test").event (false);
```

参数是对象，可以使用该方法进行关闭或开启某几个事件：

```javascript
webpanda.project("test").event ({
    // 关闭双击事件
    ondblclick : false,
    // 开启显示事件
    onshow : true,
});
```



注意事项：

> 1) 页面工程的事件本身是自动全部开启的。  
> 2) 所设置的事件操作，只对当前页面有效。当页面跳转或页面操作更新，那么之前的事件设置将会清理。





### template(content) 设置或获取模板内容

如果参数不为空，表示设置该工程的模板内容，返回该工程对象。

如果参数为空，则表示只获取，返回该工程的模板内容。



### compiler(compilerObject) 设置或获取编译器

如果参数不为空，表示设置该工程的编译器对象，返回该工程对象。

如果参数为空，则表示只获取，返回该工程的编译器对象，如果编译器对象不存在，会根据该工程的模板内容创建，也就是说在获取时，始终会返回一个工程编译器。



### selector(ele) 设置或获取筛选器

如果参数不为空，表示设置设置的筛选器（支持DOM节点、抽象节点树对象），返回该工程对象。

如果参数为空，则表示只获取，返回该工程已经设置的筛选器。

> 注意，获取操作时，如果工程未定义筛选器，则返回编译器的默认筛选器（渲染节点），如果未初始化编译器，返回 `undefined` 。



### html() 获取渲染后的节点字符串

获取筛选器元素的html内容，如果筛选器未设置，则从编译器的默认渲染节点中获取。



### text() 获取渲染后的文本字符串

获取筛选器元素的文本内容，如果筛选器未设置，则从编译器的默认渲染节点中获取。





## 选项 webpanda\.project\.option

使用示例：

```javascript
webpanda.project.option.readyState
```



| 名称            | 相关方法            | 描述                                                 |
| --------------- | ------------------- | ---------------------------------------------------- |
| readyState      | webpanda\.project() | 工程的准备状态                                       |
| async           | include             | 异步                                                 |
| css             | include             | css 文件类型                                         |
| js              | include             | js 文件类型                                          |
| json            | include             | json 文件类型                                        |
| text            | include             | text 文件类型                                        |
| refresh         | render、execute     | 强制刷新渲染                                         |
| reload          | render、execute     | 重载筛选容器                                         |
| alone           | render、execute     | 未载入时独享筛选容器（会将筛选容器的其他节点清理掉） |
| override        | extend              | 覆盖式继承事件                                       |
| disableSelector | extend              | 禁止继承父级 selector                                |
| disableTemplate | extend              | 禁止继承父级 template                                |
| disableEvent    | extend              | 禁止继承父级事件函数 on\*                            |
| disableProperty | extend              | 禁止继承父级 property                                |
| disableData     | extend              | 禁止继承父级 data                                    |
| disableInclude  | extend              | 禁止继承父级 include                                 |
| disableFriend   | extend              | 禁止继承父级 friend                                  |





## 检测 webpanda\.project\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.project 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.project.isInstanceOf (obj)) {
    // 是 webpanda.project 对象
}
```

> 注意，如果工程对象已经被删除过，那么也会返回 false 。





## 获取工程对象

根据工程名称获取工程对象：

```javascript
// 如果工程对象不存在，则返回 `undefined` 
var project =  webpanda.project ("test");
```

不清楚对象是否已经载入，只知道工程名称，可以使用回调方式，并且返回一个工程准备状态值：

```javascript
var readyState = webpanda.project ("test", function () {
    // 当工程载入并且准备完毕后，会执行这个回调函数
    // this 就是这个工程对象
    console.log (this);
});
```

注意，如果回调函数还没有满足条件而未执行（工程没有载入），当页面跳转（切换页面）时，该回调函数默认将会被清理（非全局设置下）。指定的工程如果始终都没有载入，那么该回调函数会一直（定时器中）循环判断。

如果这个工程名称在当前页面下一直不存在，那么这个操作会一直循环判断，（不切换页面时）无法将其中断，这样就会存在占用资源的情况，所以可以通过超时设置解决这个问题，可以更好的控制。示例如下：

```javascript
var readyState = webpanda.project ("test", function () {
    // 当工程载入并且准备完毕后，会执行这个回调函数
    // this 就是这个准备好的工程对象
    console.log (this);
}, {
    global : true,// 是否全局有效，默认false非全局(页面刷新会被取消)
    timeout : 3000,// 3秒后超时
    callback : function () {
        console.log ('这是超时回调函数');
    }
});
```





## 获取工程准备状态值

第二个参数传入选项值，返回状态数值：

```javascript
var readyState = webpanda.project ("test", webpanda.project.option.readyState);
```

返回的状态数值：

```javascript
-1 表示不存在这个名称的工程，或者这个工程还没有载入进来
0  表示工程未准备
1  表示工程准备完成
2  表示工程准备中
3  表示工程初始化中
```



## 获取当前页面工程

参数为空，则是代码获取当前页面的工程对象。

```javascript
// 如果工程对象不存在，则返回 `undefined`
var pageProject = webpanda.project ();
```







# webpanda\.include 包含资源文件

与工程对象的 include 操作一样，不过函数传入工程参数始终返回当前页面的工程对象。

```javascript
webpanda.include ({
    src : 'https://repository.webpandajs.com/docs/zh_CN/README.md',
    onsuccess : function (project, env) {
        console.log (project);// 始终返回当前页面工程对象，可能为 undefined
        console.log (this.result);// 返回值
    },
});
```

常使用的方式：

```javascript
// 包含工程
webpanda.include ('https://repository.webpandajs.com/src/components/element.js');
// 操作工程
webpanda.project ('webpanda-element', function () {
    // 工程包含成功并且准备完成之后执行
    console.log (this);
});
```





# webpanda\.compiler(template,config) 编译模板

传入模板字符串及配置信息进行模板编译，返回一个编译对象。

```javascript
// 获取模板节点
var app = document.getElementById ("app");
// 获取编译对象
var compiler = webpanda.compiler (app.innerHTML, {
    // 调试信息
    debug : '字符串或者数字，渲染出错时定位所属操作',
    // 传入父级编译对象
    parent : null, 
    // 传入父级节点树
    parentAbstractNodeTree : null, 
    // 选项
    option : 0
    // 不解析命令、不监听
    // option : webpanda.compiler.option.disableCommand|webpanda.compiler.option.disableListener
});

// 给对象设置选项
compiler.option |= webpanda.compiler.option.disableCommand;
// 取消某个选项。
compiler.option &= ~ webpanda.compiler.option.disableCommand;
```



## 选项 webpanda.compiler.option

使用示例：

```javascript
webpanda.compiler.option.disableCommand
```



| 名称            | 相关方法                         | 描述                                           |
| --------------- | -------------------------------- | ---------------------------------------------- |
| disableCommand  | webpanda\.compiler()             | 禁用（不解析）模板语法命令                     |
| disableRender   | webpanda\.compiler()             | 禁用（不允许）渲染                             |
| disableListener | webpanda\.compiler()、\.render() | 禁用（不允许）绑定、触发数据的监听             |
| resetListener   | \.render()                       | 强制重置渲染数据的监听（注意，是重载数据监听） |
| refresh         | \.render()                       | 强制渲染刷新                                   |



> 注意，当前编译对象 或者 父级编译对象的选项设置了 `disableListener`，那么将不允许绑定、触发数据监听。 同理，当前编译对象 或者 父级编译对象的选项设置了 `disableRender` ，那么将不允许渲染。





## 检测 webpanda\.compiler\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.compiler 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.compiler.isInstanceOf (obj)) {
    // 是 webpanda.compiler 对象
}
```







## 属性

| 名称                   | 类型        | 描述                                                         |
| :--------------------- | :---------- | :----------------------------------------------------------- |
| index                  | Int         | 唯一索引                                                     |
| node                   | HTMLElement | 默认渲染节点                                                 |
| option                 | Int         | 选项值                                                       |
| template               | String      | 模板内容                                                     |
| abstractNodeTree       | Object      | 抽象节点树对象                                               |
| parent                 | Object      | 父级编译对象                                                 |
| parentAbstractNodeTree | Object      | 父级抽象节点树对象                                           |
| status                 | Boolean     | 状态，为true表示存在渲染节点，为false表示未渲染或者已清理、重新解析模板 |
| debug                  | String/Int  | 调试标记                                                     |





## 方法



### render(data, config) 渲染

特别注意，`data` 对象及其子属性对象，必须是 `constructor == Object || constructor == Array` 这样才会有资格添加数据监听。

```javascript
// 获取模板节点
var app = document.getElementById ("app");
// 获取编译对象
var compiler = webpanda.compiler (app.innerHTML);

// 选项列表
var options = webpanda.compiler.option;
// 定义渲染数据
var test = {
    name:"这是测试",
    n:1992,
    obj:{a:"aa",b:"bb"},
    arr:["aaa","bbb",123,"ccc"]
};
// 下面是将渲染的内容放置<view>节点之下
compiler.render (test, {
    // 筛选器：支持数组、筛选字符串、抽象节点树对象
    selector : "view",
    // 选项
    option : options.disableListener|options.resetListener|options.refresh,
    // 调试信息
    debug : '字符串或者数字，渲染出错时定位所属操作',
    // 自定义数据更新触发事件。如果数据禁掉了观察者，那么onlistener方法将无效。
    onlistener : function (e) {
        console.log (this);// 节点树对象
        console.log (e.commands);// 指定渲染的模板命令。可能存在多个，所以是一个索引数组
        console.log (e.code);// 所更新的数据键名称
        console.log (e.message);// 更新消息
    }
});
```



### reparse() 重新解析模板

会重新解析节点树，之前的节点树会被摒弃。

```javascript
// 获取编译对象
var compiler = webpanda.compiler (document.getElementById ("app").innerHTML);
// 重新解析模板
compiler.reparse ();
```



### clear() 清理渲染节点

从容器中将渲染的节点。

```javascript
// 获取编译对象
var compiler = webpanda.compiler (document.getElementById ("app").innerHTML);

// ......

// 清理
compiler.clear ();
```



## 模板语法

模板语法特性：使用了基于 HTML 标签属性的模版语法，通过实时解析的方式编译成虚拟节点树将数据渲染进 DOM 的系统。并且监听渲染的数据，在数据更新时，能够智能地计算出重新渲染组件的最小代价并应用到 DOM 操作上。





### 文本输出  webpanda\-html、双小括号

允许采用文本特殊符号的模板语法来输出 HTML 内容的变量。也就是说不会自动执行了 `webpanda.encodeHTML` 方法。

其中，`webpanda-html` 命令不能在同一个标签中存在多个。如果其节点包含子内容，那么其子内容跳过编译过程，会被当做源字符串打印输出，也就是说不会识别模板语法命令。

> 注意， \(\(\)\) 是 webpanda\-html 等价写法。

```html
<div webpanda-html="name"></div>
<!--支持单标签-->
<div webpanda-html="name"/>

<!--字符串的写法-->
<div>(( message ))</div>
<!--使用 JavaScript 表达式-->
<div>(( message + '测试' ))</div>
```







### 文本打印 webpanda\-text、双大括号

允许采用文本特殊符号的模板语法来输出文本内容的变量。该命令的使用会将html实体编码（自动执行了 `webpanda.encodeHTML` 方法）。

其中，`webpanda-text` 命令不能在同一个标签中存在多个。如果其节点包含子内容，那么其子内容跳过编译过程，会被当做源字符串打印输出，也就是说不会识别模板语法命令。

> 注意， \{\{\}\} 是 webpanda\-text 等价写法。

```html
<div webpanda-text="message"></div>
<!--支持单标签-->
<div webpanda-text="message"/>

<!--字符串的写法-->
<div>{{ message }}</div>
<!--使用 JavaScript 表达式-->
<div>{{ message + '测试' }}</div>
```






### 模板 webpanda\-template

该命令用于插入模板字符串。该命令不能在同一个标签中同时存在多个。 该命令会根据模板字符串创建子节点树。

```html
<div webpanda-template="example"></div>
```

渲染数据如下：

```javascript
// 获取编译对象
var compiler = webpanda.compiler($('#app').html());
// 渲染数据
var test = {
    example : "<div>{{message}}</div>",
};
// 渲染
compiler.render (test, {
    selector : "view"
});
```

模板也可以里面包裹其他子标签，输出的时候会先输出 `webpanda-text="message"` 的数据，然后再解析输出 `templateTest` 中的模板数据：

```html
<div webpanda-template="templateTest">
    <av-void webpanda-text="message"/>
</div>
```

当然也可以直接当作空标签使用，作用就是`webpanda-if="isPrint"` 为真的时候，包裹的其他子标签才会被编译和渲染。如下：

```html
<div webpanda-template webpanda-if="isPrint">
    <av-void webpanda-text="message"/>
</div>
```



#### 模板递归嵌入会造成死循环

因为模板标签是可以解析模板语法的，所以模板标签里面请勿嵌套自身(递归)的模板标签。

如下示例：

```javascript
// 获取编译对象
var compiler = webpanda.compiler($('#app').html());
// 渲染数据，注意这是错误的示例：example 递归自己
var test = {
    example:'<div webpanda-template="example"></div>',
};
// 渲染
compiler.render(test, {
    selector : "view"
});
```

就会出现如下错误信息（超过最大调用堆栈大小），如下：

```
Uncaught RangeError: Maximum call stack size exceeded
```





### 遍历 webpanda\-for

该命令用于根据对象、数组来遍历性地渲染一块内容。该命令不能在同一个标签中同时存在多个。 在下面的命令中`webpanda-for="(v, k, i)items"`，第一个参数`v`是循环单位value的别名；第二个参数`k`是循环单位key的别名并且可以省略；第三个参数`i`是单元个数的别名并且可以省略。多个参数以英文逗号隔开。

```html
<ul id="example">
  <li webpanda-for="(item, k, index) items">
    {{ item.message }}
  </li>
</ul>
```

被遍历变量也可以是一个函数，可以传入函数参数。但这个函数的返回值必须是Array类型或者Object类型的数据：

```html
<ul id="example" webpanda-for="(item , k) itemsFunction()">
  <li webpanda-for="(sonItem) item.son(type,'123')">
    {{ sonItem.message }}
  </li>
</ul>
```

如果只想使用单位值与单位索引，示例：

```html
<ul id="example" webpanda-for="(item , , index) itemsFunction()">
</ul>
```

注意，遍历单位键、值的别名称不能是渲染数据的属性，不然节点会报错，并且不会被渲染。 如下 `k` 别名错误示例：

```javascript
// 获取编译对象
var compiler = webpanda.compiler($('#app').html());
// 渲染数据
var test = {
    type:"这是测试",
    itemsFunction: function() {
      return [{son:function(args1, args2) {
          return {message:args1};
      }}];
    },
    // 注意这是错误的示例
    k:'索引',// 这里与av-for="(item , k) itemsFunction()"中的k冲突
};
// 渲染
compiler.render(test, {
    selector : "view"
});
```

> 注意，只要报错就会失去自动渲染的能力。



### 包裹  webpanda\-void 、&lt;webpanda&gt;

该命令是将节点当做包裹节点，最终的渲染结果将不包含其节点，但会渲染其子节点。

如果同一个标签存在其他的命令，下列命令才有效果：

> 这些命令具有优先级，会先执行，所以会有效果。

```shell
webpanda-before,webpanda-template,webpanda-for,webpanda-if,webpanda-else-if,webpanda-else,webpanda-is,webpanda-text,webpanda-html
```

如果非上列命令，让其他命令与其搭配的话将无其他命令效果，因为无效节点是具有优先级的。该命令有四种写法，一种是属性的方式，一种是标签的方式，其他是注释的方式。


> /\*\*\[\[webpanda\]\]\*\*/、\<\!\-\-\-[[webpanda]]\-\-\-\> 是注释的方式写法，与 webpanda\-void 、 \<webpanda\>  的写法是等价的。


```html
<ul id="example">
    <!-- 属性的方式 -->
    <div webpanda-void webpanda-for="(item, index) items">
    <li>
        {{ item.message }}
    </li>
    </div>
</ul>
<ul id="example">
    <!-- 标签的方式 -->
    <webpanda webpanda-for="(item, index) items">
    <li>
        {{ item.message }}
    </li>
    </webpanda>
</ul>
<ul id="example">
    <!-- css注释的方式, 注意，前后标签都是两个“*”符号 -->
	/** [[webpanda]] webpanda-for="(item, index) items" **/
    <li>
        {{ item.message }}
    </li>
	/** [[/webpanda]] **/
</ul>
<ul id="example">
    <!-- html注释的方式, 注意，前后标签都是三个“-”符号 -->
    <!--- [[webpanda]] webpanda-for="(item, index) items" --->
	<li>
        {{ item.message }}
    </li>
	<!--- [[/webpanda]] --->
</ul>
```

用无效命令单标签的方式，配合打印命令实现插值`{{}}`功能：

```html
<webpanda webpanda-text="message"/>

<!-- css注释的方式, 注意，前标签的前后都是一个“*”符号 -->
/* [[webpanda]] webpanda-text="message" */

<!-- html注释的方式, 注意，前标签的前后都是两个“-”符号 -->
<!-- [[webpanda]] webpanda-text="message" -->
```

上例等同于下例写法：

```html
{{message}}
```





### 分支 webpanda\-if、webpanda\-else\-if、webpanda\-elseif、webpanda\-else

该组命令用于条件性地渲染一块内容。这块内容只会在命令的表达式返回 `truthy` 值的时候被渲染。该组命令不能在同一个标签中同时存在或存在多个。

`webpanda-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。`webpanda-else` 延伸了 `webpanda-if` 语句，可以在 `webpanda-if` 语句中的表达式的值为 `falsy` 时执行语句。`webpanda-else-if`，和此名称暗示的一样，是 `webpanda-if` 和 `webpanda-else` 的组合。和 `webpanda-else` 一样，它延伸了 `webpanda-if` 语句，可以在原来的 `webpanda-if` 表达式值为 `falsy` 时执行不同语句。

但是和 `webpanda-else` 不一样的是，它仅在 `webpanda-else-if` 的条件表达式值为 `truthy` 时执行语句。注意，`webpanda-elseif` 只是 `webpanda-else-if` 的简写，两者是效果一样的。

```html
<div webpanda-if="typeof testArray == 'object'">testArray 是一个对象</div>
<!--条件中间是可以写文本和注释的-->
<!--webpanda-elseif 和 webpanda-else-if 是效果一样的-->
<div webpanda-elseif="testArray">
    testArray 不是数组，但是一个真值
</div>
<div webpanda-else>
    testArray 为假
</div>
```

注意，`truthy` 不是 `true`，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 的解释。`falsy` 也不是 `false`，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的解释。



### 条件 webpanda\-is

该命令与`webpanda-if`一样，用于条件性地渲染一块内容。这块内容只会在命令的表达式返回 `truthy` 值的时候被渲染。

该命令不能在同一个标签中存在多个。 如果同时使用了`webpanda-if`、`webpanda-is` 这两个命令时，需要两个命令值都为真时才会去渲染数据。而其中`webpanda-if`会先进行执行判断，然后再执行判断`webpanda-is`。 

注意，同一个节点中`webpanda-for`命令相对于`webpanda-is`具有优先级，所以在同一个节点上 `webpanda-is`可以判断`webpanda-for`遍历出来的参数值。

如下所示， `webpanda-is` 不能判断`items`，但能判断其遍历后的 `item` 数据：

```html
<ul id="example">
  <li webpanda-for="(item,index)items" webpanda-is="item.id == '1'">
    {{ item.message }}
  </li>
</ul>
```

而`webpanda-if`相对于`webpanda-for`命令具有优先级，所以是无法在同一个节点上判断其遍历参数。只能判断`items`同级渲染数据。

```html
<ul id="example">
  <li webpanda-for="(item,index)items" webpanda-if="typeof items == 'object'">
    {{ item.message }}
  </li>
</ul>
```



### 属性 webpanda\-attribute、webpanda\-attr

该命令的表达式结果返回字符串作为属性值。

该命令在同一个标签中可以存在多个。 

`webpanda-attr` 是`webpanda-attribute`的别名，语法为`webpanda-attr="对象表达式"`，示例如下：

```html
<div webpanda-attr="{name:'attrTestName', id:'attrTestId', var:attrTest}">属性添加别名称</div>
<div webpanda-attribute="{as:attrTestAs}">属性添加全名称</div>
<div webpanda-attr="{as:attrTestAs}" webpanda-attr="arrObjsTest">可以存在多个属性设置</div>
```

input、option 值的设置：

```html
<input type="Text" webpanda-attr="{value:setValue}"/>
<input type="Radio" webpanda-attr="{checked:setBool}"/>
<select>
    <option webpanda-attr="{selected:'selected',value:'hk'}">Hong Kong</option>
</select>
```

textarea 值的设置有两种方式：

```html
<textarea webpanda-attr="{value:setValue}"></textarea>
```

等价于：

```html
<textarea>{{setValue}}</textarea>
```

> 注意，在 textarea 标签中，webpanda\-attr="\{value:setValue\}" 的用法是具有优先级的。



#### 单个属性操作 webpanda\-attribute\-\*

如果是单个属性操作，可以使用 `webpanda-attribute-[属性名称]="值"` 方式设置，如下所示：

```html
<input type="Text" webpanda-attr-value="setValue"/>
<textarea webpanda-attr-value="setValue"></textarea>
```





### 类 webpanda\-class

该命令的表达式结果的类型必须是对象。该命令在同一个标签中可以存在多个。

语法为`webpanda-class="对象表达式"`，与 `webpanda-attr` 语法一样。

对象的键名称渲染出来即是类名称，这个类名称是否存在将取决于对应值的返回值是否为真。下面的语法表示 `active` 这个 class 存在与否将取决于渲染数据 `isActive` 是否为真：

```html
<div webpanda-class="{ active: isActive }"></div>
```

在对象中传入更多属性来动态切换多个 class。此外，`webpanda-class` 指令也可以与普通的 class 属性共存。下面的语法表示`isStatic`为假，那么会删除`static`类。同理，当`isActive`、`hasError`为假，那么`active`与`text-danger`会被删除，反之则添加。

```html
<div class="static" webpanda-class="{ active: isActive, 'text-danger': hasError, static: isStatic }"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```html
<div webpanda-class="{active:(isActive == 'test'?true:false)}"></div>
```



#### 单个类名称操作 webpanda\-class\-\*

如果是单个类名称操作，可以使用 `webpanda-class-[类名称]="布尔值"` 方式设置，如下所示：

```html
<div webpanda-class-active="{(isActive == 'test'?true:false)}"></div>
```





### 样式 webpanda\-style

该命令的表达式结果的类型必须是对象。该命令在同一个标签中可以存在多个。

语法为`webpanda-style="对象表达式"`，与 `webpanda-attr` 语法一样。

CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名：

```html
<div webpanda-style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

可以为 `webpanda-style` 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div webpanda-style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 `flexbox`，那么就只会渲染： `display: flex`

有时候还可以根据渲染数据的真假值来删除样式，如下，当`v`为假则设为空字符串 ，便会取消掉该样式：

```html
<div style="color:green;" webpanda-style="{'color': (v?'red':'') }"></div>
```



#### 单个样式操作 webpanda\-style\-\*

如果是单个样式操作，可以使用 `webpanda-style-[样式名称]="样式值"` 方式设置，如下所示：

```html
<!-- 注意，webpanda-style-fontSize 则无效, 因为会被转换为小写 fontsize, 所以单个需要使用 “-” 符号 -->
<div webpanda-style-font-size="fontSize + 'px'"></div>
```



### 事件 webpanda\-event

该命令的表达式中可以多个事件，该命令在同一个标签中可以存在多个。

表达式中，多个事件调用同一个方法则以空格隔开。语法格式：`webpanda-on[事件名称]="JavaScript 代码"` 。

直接执行表达式：

```html
<div webpanda-onclick="n++">这是一个点击事件</div>
```

传入自定义参数：

```html
<div webpanda-onclick="n++;eClickFnTest(123,'abc',$val)">这是一个点击事件</div>
```

指定方法函数接收预编译参数，需要加上`#`符号前缀，表示赋值给所在位置参数：

```html
<div webpanda-onclick="eClickFnTest(#node,#event)">这是一个点击事件</div>
```

指定方法函数接收预编译参数并且传入自定义参数：

```html
<div webpanda-onclick="eClickFnTest($val,#event,#node)">这是一个点击事件</div>
```

在同一个标签中可以存在多个，并且一个标签支持多个事件名称 `webpanda-on*-*-*-N` ：

```html
<input value="" webpanda-oninput-propertychange="eChangeFnTest(#node,#value)" webpanda-onclick="eClickFnTest()" />
```



#### 返回值为false，阻止系统默认（行为）

在HTML标签中，写法如下：

```html
<a href="https://www.baidu.com/" webpanda-onclick="return false"></a>
```

或者让函数执行并返回结果：

```html
<a href="https://www.baidu.com/" webpanda-onclick="return eClickFnTest(#event)"></a>
```

当然，在事件处理函数中，可自行操作：

```javascript
this.eClickFnTest = function (e) {
    // 自行取消事件的默认行为
    e.preventDefault ();
    // 也可以直接返回 false，前提在标签中也用了 return
    return false;
};
```



### 前置 webpanda\-before

该命令中可以运行 javaScript 表达式，该命令在同一个标签中可以存在多个。

节点最先执行的命令，并且优先级在 `webpanda-if` 之前 ，所以始终能获取节点的信息。

```html
<div webpanda-before="methodFnTest"></div>
```

在渲染过程中，该模板语法是最后才进行渲染的，所以可以在这一步进行节点取值，指定方法函数接收预编译参数，需要加上`#`符号前缀，或传入自定义参数，实现其他处理场景：

```html
<div webpanda-before="methodFnTest(123,'abc',#node);count++"></div>
```

在同一个标签中可以存在多个：

```html
<input value="" webpanda-before="methodFnTest()" webpanda-before="methodFnTest2(#node,#value)"/>
```

一般场景用得最多的，就是循环节点了：

```html
<div webpanda-for="(value, index)arr">
    <div webpanda-before="getValue(#template, value)"></div>
</div>
```

注意，配合循环节点 `webpanda-for` 的使用的时候，`webpanda-before` 会被多执行一次，这是因为`webpanda-before` 具有优先级，会在遍历命令未处理之前会执行一次。如下：

```html
<div webpanda-before="getValue(#template)" webpanda-for="(value, index)arr" ></div>
```

还有一种情况会被多次执行，那就是获取节点的时候，会绑定，节点创建后更新渲染：

```html
<div webpanda-before="getValue(#node)" webpanda-for="(value, index)arr" ></div>
```

当然还有其他情况造成多次执行，比如在命令表达式中使用其他渲染数据而触发绑定也会重复执行。



### 后置 webpanda\-after

该命令中可以运行 javaScript 表达式，该命令在同一个标签中可以存在多个。

节点最后执行的命令是在节点添加到父级节点上之后执行，用法同 `webpanda-before` 命令。

```html
<div webpanda-after="methodFnTest(#node)"></div>
```

注意，该命令是在 `webpanda-if` 、`webpanda-is` 命令之后执行的。所以如果前面判断为假，那么该后置命令是不会被执行的。





## 模板预编译参数

预编译参数，即在参数前面加上`#`符号作为预处理前缀，不区分大小写，如下示例：

```html
<div webpanda-after="testFunction(#node,#value,#EVENT,#template)"></div> 
<div webpanda-style="{'color':getColor(#node,#abstractNodeTree)}"></div>
```

| 参数标签 | 值类型 | 描述                                                         |
| :------- | :----- | :----------------------------------------------------------- |
| object   | Object | 获取当前抽象节点树                                           |
| event    | Object | 获取当前事件对象                                             |
| node     | Object | 获取标签的节点对象。这个注意，节点的渲染出错等等，该参数在实际情况有可能为null |
| value    | Mixed  | 获取节点的值，一般用于input、textarea、select等表单节点      |
| template | String | 获取节点编译时的模板数据                                     |
| html     | String | 获取节点的html内容                                           |
| text     | String | 获取节点包含的文本内容组合起来的文本                         |



### 模板预编译参数会不会与字符串的 “\#” 井号冲突呢？不会

如下写法：

```html
<h1 --test="'#node-'+title" -after="console.log (#node)">{{title}}</h1>
```

上面的代码中，`'#node-'+title` 的 `#node` 会不会被解析成模板预编译参数呢？明确告诉你，不会！因为编译器会自动识别是否在字符串内（是否在单引号或双引号内），如果是字符串则不会被解析的。而后面 `-after="console.log (#node)"`  的 `#node` 则会被解析成模板预编译参数。





### 表单取值代码示例

```html
<!-- Radio 单元示例 -->
<input type="Radio" name="RadioName" value="1" -onchange="inputvalue = (#node).checked? '选中':'未选中';radioValue = #value;" --checked="radioValue == #value"> 单选1 
<input type="Radio" name="RadioName" value="2" -onchange="inputvalue = (#node).checked? '选中':'未选中';radioValue = #value;" --checked="radioValue == #value"> 单选2
<input type="Radio" name="RadioName" value="3" -onchange="inputvalue = (#node).checked? '选中':'未选中';radioValue = #value;" --checked="radioValue == #value"> 单选3
<!-- Checkbox 多选示例 -->
<input type="Checkbox" -onchange="inputvalue = (#node).checked? '选中':'未选中';checkedState = (#node).checked;" value="多选测试" --checked="checkedState"> 多选 
```

> 表单是select，也可以使用 \#value 预编译参数，如果多选，将返回一个数组，其包含所选的值；如果是单选，则直接返回选择的值；如果没有初始值，则返回空字符串。

```html
<select multiple="multiple" -onchange="console.log (#value)"> 
    <optgroup label="喜欢">
        <option value="hk">Hong Kong</option> 
        <option value="tw">Taiwan</option> 
        <option value="cn">China</option> 
    </optgroup>
    <optgroup label="不喜欢">
        <option value="us">United States</option> 
        <option value="ca">Canada</option> 
    </optgroup>
</select> 
```







## 模板语法简写



### 命令前缀  “webpanda\-” 简写为 “\-”

可以将 `webpanda-` 属性前缀，简写为 `-` 。

如下：

```html
<div webpanda-html="message" />
```

简写为：

```html
<div -html="message" />
```

又如：

```html
<div webpanda-if="typeof testArray == 'object'">testArray 是一个对象</div>
```

简写为：

```html
<div -if="typeof testArray == 'object'">testArray 是一个对象</div>
```



### 命令前缀  “webpanda\-attribute-” 简写为 “\-\-”

如下：

```html
<a webpanda-attr-href="'#'+count"></a>
<a webpanda-attribute-href="'#'+count"></a>
<a webpanda-attribute="{href:'#'+count}"></a>
```

简写为：

```html
<a -attr-href="'#'+count"></a>
<a webpanda--href="'#'+count"></a>
<a --href="'#'+count"></a>
```







## 知识点



### webpanda\-template、webpanda\-html 打印模板字符串比较

webpanda\-html 内部文本会及时编译并且始终显示在节点前面。webpanda\-template 是不会被强制渲染刷新，除非模板字符发生变更，而 webpanda\-html 是可以强制渲染刷新的。

> webpanda\-template与webpanda\-html最大区别：webpanda\-template会将模板中存在的模板语法递归解析出来，而webpanda\-html返回的模板语法是不会被解析的。



### webpanda\-template、webpanda\-for 模板与遍历的编译性质

webpanda\-template具有优先级，也就是较先进行渲染，并且webpanda\-template与webpanda\-for一样，在编译的时候不会编译内部内容。

webpanda\-for 会根据遍历个数进行对内部文本进行编译和渲染，而webpanda\-template不仅认表达式所返回的模板字符串，其内部文本会排在前面与模板字符串拼接再编译和渲染。

> 注意，这两个语法命令是可以同时使用，也就是说不仅是模板，还会被遍历。



### webpanda\-void、\<webpanda\>、webpanda\-for 无效与遍历渲染性质

无效节点树与遍历节点树都有一个共同的特殊性质。那就是他们都是无效的，不会生成 `HTMLDOMElement` 对象。在显示 `DOM` 对象时，节点树会查询两次查找自己显示位置。如果无效节点树与遍历节点树存在，查找的次数就会增加，而增加的查询次数即两者存在的个数。算法如：`查找次数 = (无效节点树个数) + (遍历节点树个数) + 2`

所以，无效节点树与遍历节点树越多，查找位置的次数也就越多。这是特别需要注意的地方。





## 常见错误



### 为什么渲染数据的变量更新了，然而视图并没有自动刷新渲染？

（1）第一种情况，可能因为这个渲染数据的变量名称冲突，比如与循环中的变量重名了。

如下示例，`index` 与循环中的键值名称重复，所以更新 `index` 这个变量值，视图是不会自动刷新渲染的 ：

```html
<div>{{index}}</div>
<div webpanda-if="arr" webpanda-for="(v,index)arr">
    <div>{{v.name}}</div>
</div>
```

注意，最新版已经强制报错了。渲染数据的属性，不能定义为遍历单元键、值的别名称。也就是出现这个错误用法，节点将报错而不会被渲染。

详见： **模板语法** 遍历 `webpanda-for`

（2）第二种情况，就是渲染数据的属性是一个对象，而这个属性从对象直接定义成字符串或数字等情况。如下：

```javascript
// data为渲染数据
var data.obj = {a:"aa",c:"cc"};
// 其中 假设 data.obj.a 有一处渲染值
// 直接将 data.obj 设为字符串。这个时候会更新渲染
data.obj = "";
// 然后有当作对象来赋值，这个时候视图就不会刷新渲染了。
data.obj.a = "aa2";

//--解决方法：----------------------------------
data.obj = {};
// 这个时候就会自动刷新渲染
data.obj.a = "aa2";
```

（3）第三种情况，可能是渲染数据的 constructor 属性不合法。

特别注意，渲染数据的对象及其子属性对象，必须是 `constructor == Object || constructor == Array` 这样才会有资格添加数据监听。目的是防止程序员错误设计，被递归监听。

详见：**编译对象 webpanda.compiler(template,config)** 的 render(data,config) 渲染

那怎么解决呢？比如下面的文件信息列表的伪代码：

```javascript
var file, file2;// 假设 file 、file2 的 constructor 属性等于 FileData
// 可以将 file 放进一个 Object 中
var fileObject = {
    fileValue:file, 
};
// ...
// 这样就捕获到更新了
fileObject.fileValue = file2;
```



### 避免渲染数据中函数体未变动以为变动，然后视图并没有自动刷新渲染的错误

有时候让程序更自动化，使用了创建临时工程，如下：

```javascript
// 当前工程渲染菜单
this.catalogsRender = function (ele) {
    _this = this;
    webpanda.project ("book.catalogs", function() {
        // 创建一个临时工程。因为每个书籍的目录变动不大，所以缓存编译的方式渲染
        var catalogsName = "book.catalogs:" + _this.book.name;
        var catalogs = webpanda.project (catalogsName);
        if (!catalogs) {
            catalogs = this.clone (catalogsName);
        }

        catalogs.data.book = _this.book;
        catalogs.selector(ele);
        catalogs.render();
        // 渲染了才显示
        _this.catalogsDisplay = true;

        /**
         * 注意这里，也就是说每个书籍目录都会使用这个 setCatalogsScrollTop 函数
         * 然后说触发的函数里面的 catalogs.data.setScrollTop() 应该根据不同的临时工程而不同
         */
        _this.setCatalogsScrollTop = function() {
            catalogs.data.setScrollTop();
        };
    });
};
```

问题就出现在这儿了，始终是执行的是第一个临时工程的 `catalogs.data.setScrollTop` 。为什么呢？其实是程序员自己以为 `_this.setCatalogsScrollTop` 函数体变动了，实质并没有。因为渲染数据的变更是根据函数体的字符串形式来判断的，所以并不考虑函数体中 `catalogs` 这个变量的值是不是变更了。解决方案如下：

```javascript
_this.setCatalogsScrollTop = null;// 先重置，再设置。这样才会更新
_this.setCatalogsScrollTop = function() {
    catalogs.data.setScrollTop();
};
```

也就是每次都要将其重置一下，让渲染引擎知道其发生了改变，再设置，就会捕获到更新了。



### 模板渲染出现”Maximum call stack size exceeded“错误

这是因为死循环造成的。检查模板命令，是否存在模板标签里面嵌套递归自身的模板标签。

详见：**模板语法** 模板 `webpanda-template`



# webpanda\.timer (callback, timeout, limit, global) 页面计时器

返回一个计时器对象, 如果参数不合法则返回 undefined 。参数介绍如下：

> callback 回调函数；   
> timeout 超时时间；   
> limit 执行次数限制，如果小于1，则表示无限循环。  
> global 是否为全局有效，如果为true表示全局，页面更新不会被清理，否则页面更新就会被清理。

不是全局的计时器被认作为页面计时器，就是在当前页面有效，只要页面更新就会自动取消。在单页应用模式下，我怀疑定时器、超时器的ID池存在不够用、爆库的风险。所以建议使用计时器统一管理。


超时器：

```javascript
webpanda.timer (function () {
    console.log ("3秒的超时器");
}, 3000, 1).start ();
```



定时器：

```javascript
webpanda.timer (function () {
    console.log ("3秒的定时器");
}, 3000).start ();// 第三个参数默认为 0 
```



全局的模式：

```javascript
webpanda.timer (function () {
    console.log ("3秒的定时器");
}, 3000, 0, true).start ();
```





## 属性


| 名称     | 类型     | 描述                                                    |
| -------- | -------- | ------------------------------------------------------- |
| callback | Function | 回调函数                                                |
| limit    | Number   | 可执行的总次数、限制执行次数。如果为0表示不限制         |
| executed | Number   | 已经执行次数                                            |
| index    | Number   | 索引，随着页面更新索引有可能会自动改变                  |
| origin   | Number   | 开端的毫秒时间戳                                        |
| runtime  | Number   | 当前页面的运行时间(页面版本号)                          |
| timeout  | Number   | 超时时间、间隔时间                                      |
| global   | Boolean  | 是否全局有效，true表示全局，false表示属于当前页面计时器 |





## 方法



### start() 启动计时器

返回计时器对象。

```javascript
var timer = webpanda.timer (function () {
    console.log ("3秒的定时器");
}, 3000).start ();// 第三个参数默认为 0 
```





### stop() 停止计时器

返回计时器对象。

```javascript
var timer = webpanda.timer (function () {
    console.log ("3秒的定时器");
}, 3000).start ();// 第三个参数默认为 0 

// 停止
timer.stop ();
```



### status() 状态

查询是否存在执行队列中。如果该计时器已经被停止，则返回 false 。



# webpanda\.history 浏览记录

> 注意，当页面不存在时（触发 onpagenotfound 事件），是不会储存（错误页面）浏览记录的。



## 属性



### backLength 上一页的数量

返回一个整数，该整数表示当前页面的相对位置前面的页数。



### forwardLength 下一页的数量

返回一个整数，该整数表示当前页面的相对位置后面的页数。



### lastLength 上一步的数量

返回一个整数，该整数表示当前页面的相对位置前面的步数。



### nextLength 下一步的数量

返回一个整数，该整数表示当前页面的相对位置后面的步数。





## 方法



### back() 上一页

在浏览器历史记录里前往上一页，用户可点击浏览器左上角的返回 (←) 按钮模拟此方法。等价于 `go(-1)` 。

> 当浏览器会话历史记录处于第一页时调用此方法没有效果，而且也不会报错。

```javascript
webpanda.history.back ();
```





### forward() 下一页

在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进 (→) 按钮模拟此方法。等价于 `go(1)` 。

> 当浏览器历史栈处于最顶端时 (当前页面处于最后一页时) 调用此方法没有效果也不报错。

```javascript
webpanda.history.forward ();
```





### go(number) 跳转到某一页

通过当前页面的相对位置从浏览器历史记录 (会话记录) 加载页面。

比如：参数为 `-1` 的时候为上一页，参数为 `1` 的时候为下一页。当整数参数超出界限时，例如: 如果当前页为第一页，前面已经没有页面了，我传参的值为 `-1`，那么这个方法没有任何效果也不会报错。调用没有参数的 `go()` 方法或者参数值为0 时，也没有任何效果也不会报错。

```javascript
webpanda.history.go (-1);// 等价 webpanda.history.back ()
webpanda.history.go (1);// 等价 webpanda.history.forward ()
webpanda.history.go (2);// 到下2页
```



### last() 上一步

在浏览器历史记录里前往当前页面的上一步。等价于 `step(-1)` 。

```javascript
webpanda.history.last ();// 等价于 webpanda.history.step (-1);
```





### next() 下一步

在浏览器历史记录里前往当前页面的下一步。等价于 `step(1)` 。

```javascript
webpanda.history.next ();// 等价于 webpanda.history.step (1);
```





### step(number) 跳转到某一步

通过当前页面的相对位置从浏览器历史记录 (会话记录) 加载页面的某一步。

```javascript
webpanda.history.step (-1);// 等价 webpanda.history.last ()
webpanda.history.step (1);// 等价 webpanda.history.next ()
webpanda.history.step (2);// 到下2步
```





### log() 获取页面的浏览记录列表

获取浏览记录的列表：上一页集合 `back`、当前页 `current`、下一页集合 `forward`。

```javascript
var logs = webpanda.history.log ();
```



#  webpanda\.url(location) 地址解析

传入一个网络协议地址进行解析。

```javascript
// http 协议地址
var url = webpanda.url("https://example.com:8080/?a=index&t=article&bbbb=default");
var url2 = webpanda.url("http://username:password@hostname/path?arg=value#hash");
// file 协议地址
var url3 = webpanda.url("file:///C:/Users/example/AppData/Local/Temp/wangdan.jpg?a=index");
```





##  选项 webpanda\.url\.option

| 名称      | 值示例                                                       | 描述                                    |
| --------- | ------------------------------------------------------------ | --------------------------------------- |
| protocol  | "http://"、"file://"                                         | 构造 URL 时，获取协议                   |
| account   | "username:password@"                                         | 构造 URL 时，获取账户信息               |
| domain    | "example\.com"                                               | 构造 URL 时，获取域名端口               |
| port      | 8080                                                         | 构造 URL 时，获取端口                   |
| path      | "/index\.html"                                               | 构造 URL 时，获取路径                   |
| query     | "?a=index\&t=article"                                        | 构造 URL 时，获取 query（键值对）       |
| hashPath  | "\#test/index"                                               | 构造 URL 时，获取锚点中路径             |
| hashQuery | "\#?a=index&b=test"                                          | 构造 URL 时，获取锚点中 query（键值对） |
| hash      | "\#test/index?a=index&b=test"                                | 构造 URL 时，获取完整锚点               |
| host      | "http://username:password@example\.com:8080"                 | 完整的主机信息                          |
| all       | "http://example.com:8080/index\.html?a=index&t=article\#test/index?a=index\&b=test" | 构造 URL 时，获取完整路由。默认值       |



## 检测 webpanda\.url\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.url 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.url.isInstanceOf (obj)) {
    // 是 webpanda.url 对象
}
```





## 属性

| 名称           | 值示例                                | 描述                                                         |
| -------------- | ------------------------------------- | ------------------------------------------------------------ |
| protocol       | "http"                                | 协议前缀                                                     |
| user           | "user"                                | 账户名                                                       |
| password       | "password"                            | 账户密码                                                     |
| domain         | "example\.com"                        | 域名名称                                                     |
| port           | 8080                                  | 端口号                                                       |
| path           | Array ( [0] => index.html)            | 路径                                                         |
| query          | Object ([a] => index [t] => article ) | 键值对                                                       |
| hashPath       | Array ( [0] => index)                 | 锚点路径                                                     |
| hashQuery      | Object ([a] => index [t] => article ) | 锚点键值对                                                   |
| hashStatus     | false                                 | 锚点状态，默认 false。  <br />如果锚点存在， "\#/" 或者是 "\#" 那么 hashStatus 为 true，绑定时则保留为\#，为 false 则清理 \# |
| fileStatus     | false                                 | 文件模式状态，默认 false 。  <br />如果是 true 文件模式，也就是说 path 最后不加 "/" 斜杠，否则要加上。只有在 path 存在参数时有效 |
| absoluteStatus | false                                 | 是否是绝对路径，默认 false。  <br />如果是 true 也就是说 path 前面有 '/'斜杠，需要加上。只有在 protocol、account、domain、port 选项所绑定数据为空时有效 |



## 方法



### merge() 合并URL地址或者url对象

支持 `webpanda.url` 对象、路由地址字符串。

```javascript
var url = webpanda.url("https://example.com:8080?a=index");
url.merge("/path/Test/");
url.toString();// "https://example.com:8080/path/Test/?a=index"
```





### toString(options) 把 url 对象换为 URL 字符串(构造 URL)

构造地址字符串，options 选项值来自于 `webpanda.url.option` 静态属性 。

```javascript
var url = webpanda.url("https://example.com:8080/path/Test/?a=index&t=article&bbbb=default");
// 选项为空默认 webpanda.url.option.all, 也就是获取完整路由
url.toString ();// "https://example.com:8080/path/Test/?a=index&t=article&bbbb=default"
var opt =  webpanda.url.option;
// 只获取域名、协议
url.toString (opt.domain | opt.protocol);// "https://example.com"
// 除了路径，都要获取
url.toString (opt.all & ~ opt.path);// "https://example.com:8080/?a=index&t=article&bbbb=default"
// 除了Query，都要获取。
url.toString (opt.all & ~ opt.query);// "https://example.com:8080/path/Test/"
```





# webpanda\.require(config) 引入资源文件

引入资源文件。

```javascript
var require = webpanda.require({
    url:"test/index.css?v=1.1.2",// 资源地址，
    // url: webpanda.url ("test/index.css?v=1.1.2"), 等价于 url:"test/index.css?v=1.1.2"
    charset:"UTF-8",// 编码, 默认 UTF-8
    // 选项，通过 webpanda.require.option 设置值
    // 1) 引入类型 css
    // 2) 重复加载, 如果已经存在了，也要加载
    option:webpanda.require.option.css | webpanda.require.option.repeat,
    selector:"head",// 节点筛选，引入到所在的节点位置。默认是<head></head>标签
    onerror: function (e) {
      	// 出错时
       	console.log (e);
    },
    onsuccess: function (e) {
      	// 成功时
        console.log (e);
    },
});
// 开始引入
require.append();
```



## 选项 webpanda.require.option

使用示例：

```javascript
webpanda.require.option.repeat
```



| 名称   | 描述                               |
| ------ | ---------------------------------- |
| repeat | 重复加载，如果已经存在了，也要加载 |
| js     | 引入类型为 js                      |
| css    | 引入类型为 css                     |

引入类型同时设置的话，请求优先级为 `js>css`；引入类型，如果为空，会根据文件地址自动获取。目前只支持 css 和 js 。



## 检测 webpanda\.require\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.require 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.require.isInstanceOf (obj)) {
    // 是 webpanda.require 对象
}
```







## 属性

| 名称     | 值示例                             | 描述                                                         |
| :------- | :--------------------------------- | :----------------------------------------------------------- |
| url      | url Object                         | 资源文件地址对象                                             |
| charset  | "UTF-8"                            | 编码                                                         |
| selector | "head"、HTMLElement                | 选择器，引入到所在的节点位置。默认是 \<head\>\</head\> 标签  |
| option   | Int                                | 选项，通过 webpanda.ajax.option 设置值。可以设置引入类型、是否重复加载 |
| node     | HTMLLinkElement、HTMLScriptElement | 根据资源文件地址创建的（css、js）节点                        |



## 方法



### onerror(e) 错误事件

错误事件，出错时触发。



### onsuccess(e) 成功事件

成功事件，成功时触发。



### append() 向选择器的元素内部追加资源

开始加载资源，并且向 selector 选择器的节点内部末尾追加该资源节点。

> 这个操作是对指定的选择器元素执行 appendChild 方法。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
require.append();
```



### prepend() 向选择器的元素内部前置资源

开始加载资源，并且向 selector 选择器的节点内部开头添加该资源节点。

> 这个操作是对指定的选择器元素执行 insertBefore 方法。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
require.prepend();
```



### isExists() 判断资源文件是否已经存在

直接在DOM中查找进行判断，返回一个 `bool` 值。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
// 判断资源文件是否已经存在
if (require.isExists()) {
    console.log('已经存在');
} else {
    console.log('不存在');
}
```



### isLoad() 判断资源文件是否已经加载

根据 `this.node` 属性，判断父节点是否存在，返回一个 `bool` 值。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
// 判断资源文件是否已经加载
if (require.isLoad()) {
    console.log('已经加载');
} else {
    console.log('未加载');
}
```



### unload() 卸载已加载的资源文件

根据 `this.node` 属性，根据父节点进行删除该节点。成功返回 true，失败返回 false 。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
// 一些其他操作
// ......

// 卸载
require.unload();
```



### remove() 删除已加载的全部资源文件

直接在 DOM 中查找进行全部删除，返回一个 `bool` 值。成功返回 true，失败返回 false 。

```javascript
var require = webpanda.require({
    file:"test/index.css",
    query:"v0.0.1"
});
// 一些其他操作
// ......

// 在 DOM 中查找，删除 "test/index.css" 资源路径的全部资源文件
require.remove();
```



# webpanda.ajax(config) 网络请求

如下示例，创建一个请求对象，并发起 POST 请求。

```javascript
var ajax = webpanda.ajax ({
    url : 'http://example.com/?api=example.test',
    // url: webpanda.url ("http://example.com/?api=example.test"), 等价于 url:"http://example.com/?api=example.test"
    data : {a:'aa', b:'bb'},
    // 设置异步请求、响应数据类型为JSON
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJson,
    // 设置超时时间，毫秒
    timeout : 3000,
    // 当 readyState 改变时事件
    onready : function (readyState) {
        console.log("readyState", readyState);
    },
    // 发送请求前执行事件
    onrequest : function (XMLHttpRequest) {
        console.log("XMLHttpRequest", XMLHttpRequest);
    },
    // 完成事件
    onresponse : function (result) {
        console.log("请求完成", result.data, result.status, result.message);
    },
    // 出错事件
    onerror : function (result) {
        console.log("出错啦", result.type, result.status, result.message); 
    },
    // 成功事件
    onsuccess : function (result) {
        console.log("成功啦", result.data, result.status, result.message); 
    },
});
// 去到异步
ajax.option = (ajax.option & ~ webpanda.ajax.option.async);
// 发起POST请求
ajax.post ();
```



使用 FormData 的方式示例：

```javascript
var formData = new FormData ();
var obj = {
	"b":{"api":"user.oauth.github.AccessToken","args":{"primaryKey":""}},
	"a":{"api":"testApi1","args":{"name":"王阿和","info":"这是测试"}}
};
// 将关联数组和对象生成 FormData 键值对结构
var forms = webpanda.form (obj);
for (var i in forms) {
    formData.append (forms[i].key, forms[i].value);
    // console.log (forms[i].key, forms[i].value);
}

var ajax = webpanda.ajax ({
    url : 'http://example.com/?api=example.test',
    data : formData,
    // 设置异步请求、响应数据类型为JSON
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJson,
    // 完成事件
    onresponse : function (result) {
        console.log("请求完成", result.data, result.status, result.message);
    },
    // 出错事件
    onerror : function (result) {
        console.log("出错啦", result.type, result.status, result.message); 
    },
    // 成功事件
    onsuccess : function (result) {
        console.log("成功啦", result.data, result.status, result.message); 
    },
});
// 发起POST请求
ajax.post ();
```





## 选项 webpanda.ajax.option

使用示例：

```javascript
webpanda.ajax.option.post
```



| 名称         | 描述                            |
| ------------ | ------------------------------- |
| get          | 设置请求方法为 GET              |
| post         | 设置请求方法为 POST             |
| async        | 设置为异步请求 (不设置则为同步) |
| responseText | 设置响应的数据类型为 text       |
| responseXML  | 设置响应的数据类型为 xml        |
| responseJson | 设置响应的数据类型为 json       |

请求方法同时设置的话，请求优先级为 `get>post`；响应数据同时设置的话，其优先级为 `responseText>responseXML>responseJson` 。



## 检测 webpanda\.ajax\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.ajax 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.ajax.isInstanceOf (obj)) {
    // 是 ajax.require 对象
}
```





## 属性

| 名称   | 值示例                 | 描述                                                         |
| :----- | :--------------------- | :----------------------------------------------------------- |
| url    | url Object             | 资源文件地址对象                                             |
| data   | Object/FormData/String | 请求的参数                                                   |
| header | Object                 | 请求头                                                       |
| option | int                    | 选项，通过 webpanda\.ajax\.option 设置值。可以设置请求方法(只支持 POST、GET)、设置同步(默认异步)、响应数据类型 |

注意，`header` 默认值：`{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}` 。当 `data` 参数类型是 `FormData` 那么 `Content-Type` 会被阻止使用（使用无效），因为`FormData` 类型的请求参数会将 form 数据放置 `Content-Type` 中。

请求的参数`data` 如果是字符串，格式如：`&a=bar1&b=bar2` 。



## 方法



### onready(readyState) 当 readyState 改变时执行事件

每当 readyState 改变时，就会触发。返回 XMLHttpRequest 的状态，从 0 到 4 发生变化。

```javascript
webpanda.ajax ({
    // ...
    // 当 readyState 改变时事件
    onready : function (readyState) {
        console.log (readyState);// 返回 XMLHttpRequest 的状态，从 0 到 4 发生变化
    },
});
```



### onrequest(XMLHttpRequest) 发送请求前执行事件

发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。

> 注意，如果返回false可以取消本次ajax请求。

```javascript
var ajax = webpanda.ajax ({
    url : 'http://example.com/',
    // 设置异步请求、响应数据类型为JSON
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJson,
    onrequest : function (XMLHttpRequest) {
        // this 是当前请求对象。
        XMLHttpRequest.setRequestHeader ('X-Requested-With', 'test:X-Requested-With');
        console.log ("onrequest", XMLHttpRequest, this); 
        //这里取消请求
        return false;
    },
});
ajax.post ();
```





### onresponse(result) 请求完成后执行事件

请求完成后回调函数，请求成功或失败之后均调用。

```javascript
webpanda.ajax ({
    // ...
    // 完成事件
    onresponse : function (result) {
        console.log (result.data);// 返回输出结果
        console.log (result.status);// 返回响应状态码
        console.log (result.message);// 返回响应信息
    },
});
```



### onerror(result) 响应错误事件

请求出错后触发。

```javascript
webpanda.ajax ({
    // ...
    // 出错事件
    onerror : function (result) {
        console.log (result.type);// 错误类型
        console.log (result.status);// 返回响应状态码
        console.log (result.message);// 返回响应信息
    },
});
```





### onsuccess(result) 响应成功事件

请求成功后触发。

```javascript
webpanda.ajax ({
    // ...
    // 成功事件
    onsuccess : function (result) {
        console.log (result.data);// 返回输出结果
        console.log (result.status);// 返回响应状态码
        console.log (result.message);// 返回响应信息
    },
});
```





### request() 发起请求

通过远程 HTTP GET/POST 方式请求载入信息。如果 options 属性中未指定 webpanda\.ajax\.option\.get、webpanda\.ajax\.option\.post 默认 GET 请求方法。

```javascript
var ajax = webpanda.ajax ({
    url: "http://example.com/",
    // 提前指定请求方法 POST，并设置异步请求、响应数据类型为JSON
    option: webpanda.ajax.option.post | webpanda.ajax.option.async | webpanda.ajax.option.responseJson,
});
ajax.request ();
```



### post() 发起POST请求

通过远程 HTTP POST 请求载入信息。

```javascript
var ajax = webpanda.ajax ({
    url: "http://example.com/",
    // 设置异步请求、响应数据类型为JSON
    option: webpanda.ajax.option.async | webpanda.ajax.option.responseJson,
});
ajax.post ();
```



### get() 发起GET请求

通过远程 HTTP GET 请求载入信息。



### abort() 中断请求任务

注意，是中断已经发起的请求任务。





# webpanda.trim(string) 去除字符串两端的空白字符

```javascript
var str = "         lots of spaces before and after         ";
console.log( "Original String: '" + str + "'" );
console.log( "webpanda.trim()'ed: '" + webpanda.trim(str) + "'" );

// 输出：
// Original String: '         lots of spaces before and after         '
// webpanda.trim()'ed: 'lots of spaces before and after'
```





# webpanda\.encodeURL(var) 编码 URL

支持数组、对象、字符串。

```javascript
var test = "abc@#$%&*^xyz";
var code = webpanda.encodeURL (test);
console.log(code);// abc%40%23%24%25%26*%5Exyz

var test = ["abc@#xyz","123$%456"];
var code = webpanda.encodeURL (test);
console.log(code);// ["abc%40%23xyz", "123%24%25456"]

var test = {a:"abc@#xyz",b:"123$%456"};
var code = webpanda.encodeURL (test);
console.log(code);// {a: "abc%40%23xyz", b: "123%24%25456"}
```



# webpanda\.decodeURL(var) 解码 URL

支持数组、对象、字符串。

```javascript
var test = "abc%40%23%24%25%26*%5Exyz";
var code = webpanda.decodeURL (test);
console.log(code);// abc@#$%&*^xyz

var test = ["abc%40%23xyz", "123%24%25456"];
var code = webpanda.decodeURL (test);
console.log(code);// ["abc@#xyz", "123$%456"]

var test = {a: "abc%40%23xyz", b: "123%24%25456"};
var code = webpanda.decodeURL (test);
console.log(code);// {a: "abc@#xyz", b: "123$%456"}
```





# webpanda\.parseQuery(string) 将URL字符串的query部分, 解析成一个对象

```javascript
var queryObject = webpanda.parseQuery ("a=a1&b=b1&c=c1");
console.log (queryObject);// {a: "a1", b: "b1", c: "c1"}

var queryObject2 = webpanda.parseQuery ("a[1]=a1&a[0]=b1&a[c]=c1");
console.log (queryObject2);// {a: {0: "b1", 1: "a1", c: "c1"}}
```



# webpanda\.buildQuery(object) 将关联数组和对象生成 URL Query 字符串

```javascript
var test1 = {a: "a1", b: "b1", c: "c1"};
var queryString = webpanda.buildQuery (test1);
console.log (queryString);// a=a1&b=b1&c=c1

var test2 = {a: {0: "b1", 1: "a1", c: "c1"}};
var queryString2 = webpanda.buildQuery (test2);
console.log (queryString2);// a[0]=b1&a[1]=a1&a[c]=c1
```





# webpanda\.formData(object) 将关联数组和对象生成 FormData 键值对结构\[!\<=IE9\]

> 注意，FormData接口在IE9及IE9以下版不支持。更多参考：[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)

```javascript
var obj = {
	"b":{"api":"user.oauth.github.AccessToken","args":{"primaryKey":""}},
	"a":{"api":"testApi1","args":{"name":"王阿和","info":"这是测试"}}
};
var forms = webpanda.formData (obj);
console.log (JSON.stringify (forms));
```

打印输出：

```shell
[{
	"key":"b[api]",
	"value":"user.oauth.github.AccessToken"
},
{
	"key":"b[args][primaryKey]",
	"value":""
},
{
	"key":"a[api]",
	"value":"testApi1"
},
{
	"key":"a[args][name]",
	"value":"王阿和"
},
{
	"key":"a[args][info]",
	"value":"这是测试"
}]
```



# webpanda\.encodeHTML(string) 编码HTML标签

```javascript
var test = "<span>这是测试</span>";
var code = webpanda.encodeHTML (test);
console.log (code);// &lt;span&gt;这是测试&lt;/span&gt;
```





# webpanda\.decodeHTML(string) 解码HTML实体

```javascript
var test = "&lt;span&gt;这是测试&lt;/span&gt;";
var code = webpanda.decodeHTML (test);
console.log (code);// <span>这是测试</span>
```









