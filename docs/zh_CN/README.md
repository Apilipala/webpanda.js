# webpanda\.js 开发文档


官方网站：[http://webpandajs.com](http://webpandajs.com)  

源码站点：[http://repository.webpandajs.com](http://repository.webpandajs.com)  


> webpanda.js 是用于在 web 上构建项目的 JavaScript 框架。  
> webpanda.js is JavaScript framework for building project on the web.



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







## 代码示例

```javascript
webpanda.config ({
    // 版本号
    version : '1.0.0',

    // 包含文件配置
    include : {
        // 是否禁止浏览器缓存
        option : webpanda.option.disableCache,
        // 包含筛选器
        selector : 'head',
        // 包含筛选器的添加方法
        method : 'append',
    },
    // 浏览记录设置
    history : {
        // 浏览记录的页面条数限制
        pageMaximum : 50,
        // 浏览记录的页面步数限制
        stepMaximum : 50,
    },
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
    env : {
        // 域名设置
        domain : function () {
            return 'http://example.com/';

        }
    },

    // 页面开始执行时
    onpage : function (e) {
        console.log (this);// 框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.setting);// 路由设置信息
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数

        // 如已经设置了，直接执行：可能来自 工程 page 方法的执行
        if (typeof e.setting != 'undefined') {
            e.page (e.setting);
        } 
        else if (typeof e.url.path[1] != 'undefined' && e.url.path[1] == 'login') {
            e.page ({
                name : "login",// 工程名称
                src : "/test/home/login.js",// 工程源文件
                oncallback : function (e) {
                    // 只有在未加载时才执行，否则不执行
                    // 这个回调暂时是保留功能
                    console.log (e);
                }
            });
        } 
        else {
            e.page ();// 如果当前页面链接在框架设置中 `webpanda.config({router:{page:[...]}})` 不存在（未定义），那么会触发 onPageNotFound 事件（页面不存在）。
        }
    },

    // 包含文件开始时
    onincluded : function (e) {
        if (e.include.isError ()) {
            console.log (e.include.location + ' 引入失败', e);
        } else {
            console.log (e.include.location + ' 引入成功');
        }
    },


});


// 重写配置
webpanda.config ({
    version : '1.0.2',
    include : {
        // 启用缓存
        option : 0,
    },
});

// 执行框架
webpanda.execute ();
```





## webpanda\.option 选项

使用示例：

```javascript
webpanda.option.caseInsensitive
```



| 名称            | 描述                         |
| --------------- | ---------------------------- |
| hash            | 路由 hash 模式               |
| history         | 路由 history 模式            |
| caseInsensitive | 设置路径检索时，大小写不敏感  |
| disablePage     | 禁止页面监听                 |
| disableCache    | 禁用资源缓存                 |



## webpanda\.config(object) 配置



### version 版本号

是一个字符串，一般用于包含文件时的query参数。

```javascript
webpanda.config ({
    // 版本号
    version : '1.0.0',
    // ...
});
```



### include 包含文件设置

是否缓存、包含方式等配置信息：

```javascript
webpanda.config ({
    
    // 包含文件配置
    include : {

        /**
         * 选项
         * webpanda.option.disableCache 禁用缓存, 在包含文件时，query 参数中会添加时间参数，添加实时的时间参数，在包含(引入)文件时，可以避免浏览器的缓存。
         * @var {Number}
         */
        option : webpanda.option.disableCache,

        /**
         * 筛选器
         * 针对 js、css 文件，在包含时父级的节点筛选(选择)器。
         * @var {String}
         */
        selector : 'head',

        /**
         * 筛选器的添加方法
         * 针对 js、css 文件，在包含时父级的节点筛选(选择)器指定添加方式。
         * 参考 `webpanda.require` 对象方法的使用，可选值：prepend | append 。
         * @var {String}
         */
        method : 'append',

        /**
         * 包含文件之前执行回调，可自定义操作请求地址信息
         * 可以给包含文件地址自定义添加query参数等操作。
         * @var {Function}
         */
        oncallback : function (e) {
            // this 框架对象
            // e.handle === require || ajax
            // webpanda.env 环境变量
            
            var dates = new Date ();
            var times = [
                dates.getFullYear (),// 年
                dates.getMonth () + 1,// 月
                dates.getDate (),// 日
                dates.getHours (),// 时
                // dates.getMinutes (),// 分
                // dates.getSeconds (), //秒
                // dates.getMilliseconds () //毫秒
            ];

            // 缓存一小时
            e.handle.url.query._cache = times.join ('');
            // 最后包含文件地址最终执行如下：
            // http://temp.blog.com/src/pages/home.js?__v=1.0.1&_cache=20217716
            // 其中 `_cache=20217715` 参数相当于让浏览器缓存一个小时。
        }

    },
    
});
```





### history 浏览记录设置

```javascript
webpanda.config ({

    // 浏览记录设置
    history : {

        /**
         * 浏览记录中的页面上限(记录最大值)
         * 页面变更记录的条数最大值，默认 10 。
         * 注意，这个是上一页与下一页分别的数量限制。
         * @var {Number}
         */
        pageMaximum : 10,

        /**
         * 浏览记录中的步数上限(记录最大值)
         * 在当前页面中，URL变更记录的条数（步数）最大值，默认 10 。
         * 注意，与 pageMaximum 不同，这个是上一步与下一步共同的数量限制，不是分别限制。
         * @var {Number}
         */
        stepMaximum : 10,

    },

});
```





### router 路由设置



```javascript
webpanda.config ({
	
    // 路由设置
    router : {
        // 模式: webpanda.option.hash 、 webpanda.option.history
        // 大小写不敏感设置: webpanda.option.caseInsensitive
        // 禁止页面监听(一般用于传统页面插件非单页应用)：webpanda.option.disablePage
        option : webpanda.option.hash | webpanda.option.caseInsensitive,
        // 页面路径配置
        page : [
            {
                // path 支持函数
                path : function () {
                    return webpanda.env.prefix + '/index/';
                },
                // 工程名称
                name : "index",
                // 选项，设置局部的大小写不敏感
                option : webpanda.option.caseInsensitive,
                // 工程文件地址，支持函数、URL字符串、webpanda.url对象
                src : function () {
                    return webpanda.env.prefix + "/index.js";
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



### env 环境变量

是一个对象，设置环境变量，在其他地方会带上该参数，主要是设置一些公用属性、方法。

```javascript
webpanda.config ({
	
    // 环境变量
    env : {
        // 域名设置
        domain : function () {
            return 'http://example.com/';
        },
    },
    // ......
});

// 使用环境变量演示：
webpanda.onpage = function (e) {
    console.log (this);
    console.log (webpanda.env);// 来自框架设置中自定义的环境变量 env
};
```



## webpanda.on\* 全局事件

> 除了框架独有的全局事件，还有与工程同名称的事件处理函数。  
> 注意：事件名称都是小写。

框架设置的事件处理函数是有全局效果的，不仅支持上面所示事件处理函数，同时还支持工程定义的同名事件处理函数。比如：`onexecute`、`onrender` 等。

事件在初始化时是可以直接定义的，如下：

```javascript
webpanda.onpage = function (e) {
    // ......
};
```

但是，上面的方式只适用于框架执行之前或者页面加载之前，如果要求在页面已经加载完成后临时增加事件处理函数并且及时生效，需要使用下面的方式定义：

```javascript
webpanda.config ({
    // 在配置里面定义事件处理函数
    onpage : function (e) {
        // ......
    },
});
```

> 这种方式会检测是否更改了事件处理函数，如果存在更改会自动触发事件部署。



### onpage(e) 页面开始执行时

该事件必须通过使用 `e.page()` 回调函数指定页面工程信息，如果不执行页面将停止加载。

> 注意，如果当前页面链接在框架设置中 `webpanda.config({router:{page:[...]}})` 不存在（未定义），那么会触发 onpagenotfound 事件（页面不存在）。

```javascript
webpanda.config ({

    onpage : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.setting);// 路由设置信息
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    
        // 如已经设置了，直接执行：可能来自 工程 page 方法的执行
        if (typeof this.setting != 'undefined') {
            e.page (e.setting);
        } 
        // 其他自定义、自动化页面路由
        else if (typeof e.url.path[1] != 'undefined' && e.url.path[1] == 'login') {
            e.page ({
                name : "login",// 工程名称
                src : "/test/home/login.js",// 工程源文件
            });
        } else {
            e.page ();// 如果当前页面链接在框架设置中 `webpanda.config({router:{page:[...]}})` 不存在（未定义），那么会触发 onpagenotfound 事件（页面不存在）。
        }
    },

});
```



### onpaged(e) 页面最后执行时

```javascript
webpanda.config ({

    onpaged : function (e) {
        console.log (this);// 当前框架对象
        console.log (e.project);// 当前的页面工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onpagechange(e) 页面改变跳转时

```javascript
webpanda.config ({

    onpagechange : function (e) {
        console.log (e.project);// 当前的页面工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    
        if (confirm ("你确定要跳转页面么?")) {
            e.accept ();// 跳转 
        } else {
            e.ignore ();// 禁止跳转 
        }
        
    },

});
```





### onpagenotfound(e) 页面不存在时触发

```javascript
webpanda.config ({

    onpagenotfound : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onpageprogress(e) 页面生命周期进度

```javascript
webpanda.config ({

    onpageprogress : function (e) {
        console.log (this);// 当前框架对象
        console.log (e.project);// 当前的页面工程对象，在该事件中有可能为 undefined。工程对象中途才被设置
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.total);// 总进度
        console.log (e.loaded);// 已加载进度
        console.log (e.percent);// 已加载进度百分比
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onpagedestroy(e) 页面离开销毁时

```javascript
webpanda.config ({

    onpagedestroy : function (e) {
        console.log (this);// 当前框架对象
        console.log (e.project);// 当前的页面工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.setting);// 路由设置信息, 来自 工程 page 方法的执行时，该值不为 undefined
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### oninclude(e) 包含文件开始时

```javascript
webpanda.config ({

    oninclude : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.include);// 包含对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onincluded(e) 包含文件完成时

```javascript
webpanda.config ({

    onincluded : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.include);// 包含对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



如何判断是否包含成功呢？

```javascript
webpanda.config ({

    onincluded : function (e) {
        // 存在错误，说明包含失败
        if (e.include.isError ()) {
            console.log (e.include.location + ' 文件包含失败');
        } else {
            console.log (e.include.location + ' 文件包含成功');
        }
    },

});
```



### onproject(e) 工程开始加载时

```javascript
webpanda.config ({

    onproject : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.projectName);// 工程名称
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onprojected(e) 工程完成加载时

```javascript
webpanda.config ({

    onprojected : function (e) {
        console.log (this);// 当前框架对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.projectName);// 工程名称
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onready(e) 工程开始准备时

```javascript
webpanda.config ({

    onready : function (e) {
        console.log (this);// 当前框架对象
        console.log (e.project);// 准备的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onreadied(e) 工程完成准备时

```javascript
webpanda.config ({

    onreadied : function (e) {
        console.log (this);// 当前框架对象
        console.log (e.project);// 准备的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```







## webpanda\.env 环境变量

设置环境变量：

```javascript
// 以框架配置的方式
webpanda.config ({

    // 环境变量设置
    env : {
        // 域名设置
        domain : function () {
            return 'http://example.com/';
        },
        // ...
    }

});

// 直接设置的方式
webpanda.env.domain = function () {
    return 'http://example.com/';
};
```



使用环境变量：

```javascript
// 来自自定义的环境变量 domain 方法
webpanda.env.domain ();
```





## webpanda\.getPageRuntime() 获取当前页面的执行时间

```javascript
webpanda.getPageRuntime();
```



## webpanda\.getPageFirstStatus() 页面是否第一次加载的状态

```javascript
webpanda.getPageFirstStatus();
```



## webpanda\.getPageProject() 当前页面的工程对象

```javascript
webpanda.getPageProject();
```





## webpanda\.getPageUrl() 当前页面的URL对象

```javascript
webpanda.getPageUrl();
```





## webpanda\.getProjectAll() 获取所有工程

```javascript
webpanda.getProjectAll();
```





## webpanda\.getIncludeAll() 获取所有引入(包含)资源

```javascript
webpanda.getIncludeAll();
```





## webpanda\.execute 执行框架

框架配置信息设置好之后，就可以执行框架了。

只要执行了该方法，框架将生效并且初始化。如果该方法多次执行，（非第一次执行）将会刷新页面工程。

```javascript
// 执行框架
webpanda.execute ();
```








## webpanda\.ready(callback, setting) 等待框架启动(执行)之后再执行


```javascript
webpanda.ready (function () {

    // 等待框架 webpanda.execute () 执行后执行
    // ......

});
```

通过超时设置：

```javascript
webpanda.ready (function () {

    // 等待框架 webpanda.execute () 执行后执行
    // ......

}, {
    global : true,// 是否全局有效，默认false非全局(页面更新会被取消)
    timeout : 3000,// 3秒后超时
    oncallback : function () {
        console.log ('这是超时回调函数');
    }
});
```



## webpanda\.include() 包含资源文件

如果传入的参数不合法，则返回 false ，否则返回 true 。

> 主要用于一些插件、组件等源文件，在使用时才加载。

包含单个源文件示例：

```javascript
webpanda.include ({
    src : "components/components.js",
    option : webpanda.project.option.js,
    oncallback : function (e) {
        // 无论包含成功还是失败都会执行
        // this 框架对象
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        // e 就是引入对象
        // e.result 就是 Ajax 对象的返回值
        // e.result.data 就是模板内容
        
        // 判断是否包含成功
        if (e.isError ()) {
            // 包含成功后执行去准备
            webpanda.project ('components').ready (function () {
                // 准备完成后设置模板
                this.template (e.result.data);
            });
        }
    },
    onsuccess : function (e) {
        // 包含成功后执行
    },
    onerror : function (e) {
        // 包含失败后执行
    }
});
```

包含多个源文件示例：

```javascript
webpanda.include ([
    // 引入模板
    'components/components.html',
    // 引入插件中的插件，使用异步
    {
        src : "components/components-plugin.js",
        option : webpanda.project.option.js,
        onsuccess : function (e) {
            // 包含成功后执行去准备
            webpanda.project ('components-plugin').ready ();
        },
    },
    // 引入临时使用的工程
    {
        src : "components/components.js",
        option : webpanda.project.option.js,
        onsuccess : function (e) {
            // 包含成功后执行去准备工程，工程准备好后就执行
            webpanda.project ('components').ready (function () {
                this.execute ();
            });
        },
    }
]);
```

其他示例：

```javascript
webpanda.include ({
    src : 'https://repository.webpandajs.com/docs/zh_CN/README.md',
    onsuccess : function (e) {
        console.log (this);// 框架对象
        console.log (webpanda.env);// 环境变量
        console.log (e.result);// 返回值
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







## 框架与工程的事件执行优先级


框架定义的事件处理函数为全局，而工程定义的事件处理函数是页面局部的，并且还有标记（激活）的非页面工程的事件。

当事件触发时，优先执行框架定义的事件处理函数，接着执行页面工程定义的事件处理函数，最后执行标记（激活）的非页面工程定义的事件处理函数。




## 传统页面以插件的模式(嵌入)使用框架


主要是不使用框架的路由，那么需要禁用路由：


```javascript
// 初始化配置
setTimeout (function isWebpandaLoad () {
	
    // 为了兼容性，比如百度APP的浏览器如果不这么写就会报错（原因不太清楚，无法调试）
    // 先判断webpanda.js被正常加载进来了才进行配置操作
    if (!webpanda) {
        setTimeout (isWebpandaLoad, 0);
        return;
    }

    webpanda.config ({

        version : '1.0.0',
        // 包含文件配置
        include : {
            // 禁用缓存
            option : webpanda.option.disableCache,
            selector : 'head',
            method : 'append',
            // 包含文件执行时的回调
            oncallback : function (e) {
                // e.handle === require || ajax
        
                var dates = new Date ();
                var times = [
                    dates.getFullYear (),// 年
                    dates.getMonth () + 1,// 月
                    dates.getDate (),// 日
                    dates.getHours (),// 时
                    // dates.getMinutes (),// 分
                    // dates.getSeconds (), //秒
                    // dates.getMilliseconds () //毫秒
                ];
        
                // 缓存一小时
                e.handle.url.query._cache = times.join ('');
            },
        },
        // 路由设置
        router : {
            // 禁用页面监听: 也就是不使用框架的路由模式
            option : webpanda.option.disablePage
        },
        // 环境变量
        env : {
            
            // ...
        },
    
    });
    webpanda.execute ();    

}, 0);
```







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

    template : function (project) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // this 是一个数组
        // 环境变量 webpanda.env

        // 可以设置模板路径
        this.push ({
            src : webpanda.url (webpanda.env.domain () + '/index.html')
        });

        // src 可以是函数
        this.push ({
            src : function (project) {
                // project 是当前工程
                return webpanda.url (webpanda.env.domain () + '/index.html')
            }
        });

        // 也可以设置字符串
        this.push ('<div></div>');
        
        // 注意，模板设置多个只支持pop最后一个!
    },

});
```





### include 包含资源文件

引入工程文件、模板文件等。并且，相同的资源只会包含一次（包含会被缓存）。在包含参数中可以设置回调函数 `oncallback` 、`onsuccess`、`onerror` ，需要注意，`css` 、`js` 与 `json` 、`text` 回调函数的 `this.handle` 对象是不相同的：

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
            oncallback : function (e) {
                // 无论包含成功还是失败都会执行
                // this 当前的工程对象。注意，这个时候的工程对象都是未准备好的
                // webpanda.env 环境变量。来自框架设置中自定义的环境变量
                // e 就是引入对象
                // e.result 就是 Ajax 对象的返回值
                // e.result.data 就是模板内容
                
                // 判断是否包含成功
                if (e.isError ()) {
                    this.template (e.result.data);
                }
                
            },
            onsuccess : function (e) {
                // 引入成功后执行
            },
            onerror : function (e) {
                // 引入失败后执行
            },
        },
        {
            src : "index.json",// 也可以忽略其他 option 、oncallback 、onsuccess、onerror 参数
        },
        {
            // src参数支持回调函数，必须返回字符串。好处就是可以使用环境变量或者其他程序过程
            src : function (project) {
                // project 是当前工程
                return webpanda.env.domain () + '/components.css';
            }
        }
    ],
    
});
```



以函数的方式定义：

```javascript
webpanda.project ({

    // 定义函数的方式
    include : function (project) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        // this 是一个数组

        // 函数定义的好处就是可以使用环境变量
        this.push (webpanda.env.domain () + '/components.css');
        this.push (webpanda.url ("index.css"));
        this.push ({
            src : "index2.js",
            option : 0,
        });
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
        oncallback : function (e) {
            // e 是引入对象
            // this 当前的工程对象。注意，这个时候的工程对象有可能未准备好，也有可能准备好了。因为这里是异步操作，可能会等待延迟等情况
        	// webpanda.env 环境变量。来自框架设置中自定义的环境变量
            console.log (e, this.name, e.result.data);
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
            oncallback : function(e) {
                console.log (e.result.data);
            }
        },
        {
            // 获取远程模板内容
            src : "http://example.com/default/template.tpl", 
            oncallback : function(e) {
                // e.result.data 就是获取的模板内容
                project.template (e.result.data);
            }
        },
    ],

});
```





### extend 继承

一个工程支持继承多个工程、继承多次某个工程，代码复用，提高维护性。

继承遵守如下规则：

> (1) 越远父级的 include、on*事件 等优先执行;   
> (2) 越近父级的 prototype 、data 、selector 、template 定义，会覆盖越远父级的 prototype 、data 、selector 、template 定义;  
> (3) selector、template 在派生工程未定义的情况下才继承父级的 selector、template 定义;  
> (4) 只是继承父级的定义，不是继承父级最新动态属性值。



通过以下选项值（option）设置继承特殊性：

```javascript
webpanda.project.option.overrideEvent		覆盖式继承事件, 派生工程的事件未定义的情况下才被继承
webpanda.project.option.disableSelector     禁止继承父级 selector
webpanda.project.option.disableTemplate     禁止继承父级 template
webpanda.project.option.disableEvent        禁止继承父级事件函数 on*  
webpanda.project.option.disablePrototype    禁止继承父级 prototype
webpanda.project.option.disableData         禁止继承父级 data
webpanda.project.option.disableInclude      禁止继承父级 include
webpanda.project.option.disableFriend       禁止继承父级 friend
webpanda.project.option.onlySelector		只继承父级 selector
webpanda.project.option.onlyTemplate        只继承父级 template
webpanda.project.option.onlyEvent           只继承父级事件函数 on*  
webpanda.project.option.onlyPrototype       只继承父级 prototype
webpanda.project.option.onlyData            只继承父级 data
webpanda.project.option.onlyInclude         只继承父级 include
webpanda.project.option.onlyFriend          只继承父级 friend
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
            src : function (project) {
                // project 是当前工程
                return webpanda.env.domain () + '/components.js';
            },
        },

        // 支持别名称、选项值
        {
            name: "components-button",
            src: "components/button.js",// 这个可以写到 include 包含，写在这里只能同步、类型指定是js，继承的源文件不能异步
            use: 'components',// 命名空间、间隔、别名称。继承的父 prototype 、data 属性, 会添加到指定命名中 （添加到 prototype.components 、 data.components 对象中）
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
    extend : function (project) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        // this 是一个数组

        // 函数定义的好处就是可以使用环境变量或者其他的程序过程
        this.push ("components-test");
        this.push ({
            name : "components",
            src : webpanda.env.domain () + '/components.js',
        });
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
> 就算父级工程多次被派生工程继承，而所定义的事件函数始终（去重）只被继承一次。而越近父级的 prototype 、data 定义，会覆盖越远父级的 prototype 、data 定义。

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
    ondblclick : function (e) {
        // e 是事件对象
        // this 是当前工程
        console.log (e, this.name, webpanda.env);
    },
    onclick : function (e) {
        // e 是事件对象
        // this 是当前工程
        console.log (e, this.name, webpanda.env);
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
    ondblclick : function (e) {
        // e 是事件对象
        // this 是当前工程
        console.log (e, this.name, webpanda.env);
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
    friend : function (project) {
        // project 当前的工程对象。注意，这个时候的工程对象都是未准备好的
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        // this 是一个数组
        
        // 合并环境变量中的友元设置: 函数定义的好处就是可以使用环境变量或者其他程序过程
        for (var i in webpanda.env.friends) {
            this.push (webpanda.env.friends[i]);
        }
        
        // 当前自定义的设置
        this.push ("index");   
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







### prototype 原型属性

自定义工程的成员属性，不会被渲染监听，用于非模板非渲染的操作。

定义 Object 的方式：

```javascript
webpanda.project ({

    // Object 定义的方式
    prototype : {
        test : "这是测试",
        message : "你好，webpanda.js!",
    },

});
```



定义 Function 的方式：

```javascript
webpanda.project ({

    // Function 定义的方式
    prototype : function (project) {
        // 函数定义的好处就是可以使用当前工程对象、环境变量
        // project 当前的工程对象
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        
        var $data = project.data;

        this.test = "这是测试";
        this.message = "你好，webpanda.js!";
        // 可以获取当前渲染数据所属工程对象
        this.getProject = function() {
          return project;
        };
        
        // 特别注意，因为是原型，所以工程可以直接访问
        // 所以 this 有可能是工程，所以在使用this时注意作用域
        var _this = this;
        this.getThis = function () {
            return _this;
        };
        
    },

});
```





### data 工程渲染数据


定义工程的模板渲染数据，变量会被渲染监听，用于模板渲染的操作。


> 特别注意，在定义工程渲染数据时请勿父子级嵌套，这样会造成死循环错误。

如下代码：

```javascript
// obj1定义为obj2的父级，obj2是obj1子级，彼此相互嵌套
var obj1 = {};
var obj2 = {
    parent : obj1
};
obj1.child = obj2;

// ......
webpanda.project ({

    // Object 定义的方式
    data : {
        test : obj1,
    },

});

// 这个时候拷贝或者监听数据会出现死循环错误: RangeError: Maximum call stack size exceeded
```



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
    data : function (project) {
        // 函数定义的好处就是可以使用当前工程对象、环境变量
        // project 当前的工程对象
        // webpanda.env 环境变量。来自框架设置中自定义的环境变量
        
        var $prototype = project.prototype;

        this.test = "这是测试";
        this.message = "你好，webpanda.js!";
        // 可以获取当前渲染数据所属工程对象
        this.getProject = function() {
          return project;
        };
    },

});
```





### onreadied(e) 工程完成准备时

```javascript
webpanda.project ({
    
    onreadied : function (e) {
        console.log (this);// 当前工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onpaged(e) 页面最后执行时

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。

```javascript
webpanda.project ({
    
    onpaged : function (e) {
        console.log (this);// 当前工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```







### onpagechange(e) 页面改变跳转时

通过该事件可以阻止页面跳转。

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。

捕获该事件时必须执行下面两个函数中的一个，不然页面将会终止：

> `e.accept()` 表示接受跳转；  
> `e.ignore()` 表示忽略跳转（禁止跳转） 。

```javascript
webpanda.project ({

    onpagechange : function (e) {
        console.log (this);// 当前的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数

        if (confirm ("你确定要跳转页面么?")) {
            e.accept ();// 跳转 
        } else {
            e.ignore ();// 禁止跳转 
        }
        
    },

});
```



### onpagedestroy(e) 页面离开销毁时

> 注意，如果在工程中定义，那么该事件在非页面工程中时无效。

```javascript
webpanda.project ({
    
    onpagedestroy : function(e) {
        console.log (this);// 当前的工程对象
        console.log (e.project);// 当前的页面工程对象(注意，是页面工程对象)
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.setting);// 路由设置信息, 来自 工程 page 方法的执行时，该值不为 undefined
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onurlchange(e) 页面URL改变时

当URL发送改变时，触发该事件。注意，`onpagechange()` 事件触发时（也就是页面跳转时），该事件不会被触发。

```javascript
webpanda.project ({
    
    onurlchange : function (e) {
        console.log (this);// 当前的工程对象
        console.log (e.project);// 当前的页面工程对象(注意，是页面工程对象)
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.url);// webpanda.url 对象
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```









### onexecute(e) 工程开始执行时

执行 `page()`、`execute()` 工程对象方法或者作为页面工程时，会触发该事件。

可以使用 `pause()` 、`start()`、`stop()` 三个工程对象方法，对工程的执行状态进行操作。

```javascript
webpanda.project ({

    onexecute : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停执行
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动执行
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止执行
        // e.stop ();

        console.log (this);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 执行的版本号
        console.log (e.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e);// 事件参数
    },

});
```





### onexecuted(e) 工程结束执行时

执行 `page()`、`execute()` 工程对象方法或者作为页面工程时，会触发该事件。特别注意：在工程执行时，当 `stop()` 工程对象方法使用后，该事件不会被执行。

```javascript
webpanda.project ({

    onexecuted : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停执行
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动执行
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止执行
        // e.stop ();
        
        console.log (this);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 执行的版本号
        console.log (e.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onexecutestart(e) 工程启动执行时

在工程执行时，使用`start()` 工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutestart : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停执行
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动执行
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止执行
        // e.stop ();

        console.log (this);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 执行的版本号
        console.log (e.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```



### onexecutepause(e) 工程暂停执行时

在工程执行时，使用`pause()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutepause : function (e) {

        // 全局暂停执行
        // this.pause ();
        // 只暂停执行
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动执行
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止执行
        // e.stop ();

        console.log (this);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 执行的版本号
        console.log (e.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onexecutestop(e) 工程停止执行时

在工程执行时，使用`stop()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onexecutestop : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停执行
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动执行
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止执行
        // e.stop ();
        
        console.log (this);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程执行状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 执行的版本号
        console.log (e.args);// 工程执行的自定义参数，如：project.execute ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrender(e) 工程渲染开始时

执行 `page()`、`execute()` 、`render()` 工程对象方法或者作为页面工程时，会触发该事件。

可以使用 `pause()` 、`start()`、`stop()` 三个工程对象方法，对工程的执行状态进行操作。

```javascript
webpanda.project ({

    onrender : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();

        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrendered(e) 工程渲染结束时

执行 `page()`、`execute()` 、`render()` 工程对象方法或者作为页面工程时，会触发该事件。特别注意：在工程渲染时，当 `stop()` 工程对象方法使用后，该事件不会被执行。

```javascript
webpanda.project ({

    onrendered : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();
        
        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrenderstart(e) 工程启动渲染时

在工程渲染时，使用`start()` 工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderstart : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();

        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrenderpause(e) 工程渲染暂停时

在工程渲染时，使用`pause()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderpause : function (e) {

        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();

        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrenderstop(e) 工程渲染停止

在工程渲染时，使用`stop()`工程对象方法会触发该事件。

```javascript
webpanda.project ({

    onrenderstop : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();
        
        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### onrenderlistener(e) 工程渲染监听触发时

 用于编译对象渲染时所设置的 `onlistener` 方法，渲染数据更新时就会触发该事件。

```javascript
webpanda.project ({

    onrenderlistener : function (e) {
        // 全局暂停执行
        // this.pause ();
        // 只暂停渲染
        // e.pause ();

        // 全局启动执行
        // this.start ();
        // 只启动渲染
        // e.start ();

        // 全局停止执行
        // this.stop ();
        // 只停止渲染
        // e.stop ();
        
        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e.abstractNodeTree);// 节点树对象
        console.log (e.event.commands);// 指定渲染的模板命令。可能存在多个，所以是一个索引数组
        console.log (e.event.code);// 所更新的数据键名称
        console.log (e.event.message);// 更新消息
        console.log (e.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (e.version);// 渲染的版本号
        console.log (e.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 e.args 
        console.log (e.name);// 事件名称
        console.log (e.runtime);// 当前页面执行时间
        console.log (e);// 事件参数
    },

});
```





### on* 原生的 window、document 事件

支持添加原生的 window、document 事件，会根据如下规则：

> 1.window 与 document 都支持的事件，则绑定到 window ；  
> 2.只有 window 支持的事件，则绑定到 window，只有 document 支持的事件，则绑定到 document；  
> 3.事件名称都是小写。



比如添加双击的事件处理函数，操作如下：

```javascript
webpanda.project ({
	
    /**
     * 在 window、document 中，JS 原生的双击事件是 ondblclick
     * 在这里就是 "ondblclick" 命名规则, 注意大小写
     * window 与 document 都支持的事件，则绑定到 window
     * 所以这里等价于 window.ondblclick 
     */
    ondblclick : function (e) {
        console.log (this);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (e);// js原生的事件对象参数
    },

});
```







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



### prototype 原型属性

工程的自定义成员属性是非渲染数据，不会被渲染监听，相对于模板渲染来说，该属性是私有的，也就是说在模板中无法使用该属性值，只能通过 data 中代理处理。

示例如下：

```javascript
webpanda.project ({

    name : 'test',
    // 非渲染数据的定义
    prototype : function () {

        this.demonstrator = function (node) {
            // ......
        };

    },
    // 渲染数据
    data : function (project) {
        
        // 在模板中访问 toDemonstrator (#node), 代理执行了 project.prototype.demonstrator
        this.toDemonstrator = function (node) {
            project.prototype.demonstrator (node);
            // 因为是原型，所以也可以直接访问
            project.demonstrator (node);
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
    oncallback : function () {
        console.log ('这是超时回调函数');
    }
});
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


### clone.data(obj,key) 克隆渲染数据

工程之间的渲染数据肯定存在相互借用或者拷贝，但彼此的渲染数据监听是隔离的，所以需要通过克隆渲染数据来拷贝成新数据。

```javascript
var obj = {a:123, b:456};
webpanda.project ("test").clone.data (obj);
webpanda.project ("test2").clone.data (obj);

// 指定key键名称, 如下相当于: webpanda.project ("test2").data.t = obj
webpanda.project ("test2").clone.data (obj, 't');
```

> 特别注意，在克隆数据时请勿父子级嵌套，这样会造成死循环错误。

如下代码：

```javascript
// obj1定义为obj2的父级，obj2是obj1子级，彼此相互嵌套
var obj1 = {};
var obj2 = {
    parent : obj1
};
obj1.child = obj2;
// 这个时候拷贝或者监听数据会出现死循环错误: RangeError: Maximum call stack size exceeded
```


### clone.prototype(obj,key) 克隆成员属性

使用方式参考 `clone.data(obj,key)` 。



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
    onexecuted : function (project) {
        console.log ('这是临时事件');
        console.log (project);// 当前执行的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
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
    onrender : function (project) {
        console.log ('这是临时事件 onrender');
        // 暂停执行
        project.pause ();

        // 启动执行
        // project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
        console.log (this.state);// 工程渲染状态，0 关闭(停止运行)，1正常(运行中)，2等待
        console.log (this.version);// 渲染的版本号
        console.log (this.args);// 工程渲染的自定义参数，如：project.render ({id:1,n:2}); 这里的 {id:1,n:2} 就是 this.args 
        console.log (this.name);// 事件名称
        console.log (this.runtime);// 当前页面执行时间
        console.log (this);
    },
    onrenderpause : function (project) {
        console.log ('这是临时事件 onrenderpause');
        // 启动执行
        project.start ();

        // 停止执行
        // project.stop ();

        console.log (project);// 当前渲染的工程对象
        console.log (webpanda.env);// 来自框架设置中自定义的环境变量
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

在执行事件中时，表示开始执行；在渲染事件中时，表示开始渲染。如果在执行事件中执行渲染事件，则表示开始执行并且开始渲染。



### pause() 暂停执行或渲染

返回该工程对象。

> 注意，只有正在执行或者正在渲染才能有效，如果已经停止了，无法暂停。

在执行事件中时，表示暂停执行；在渲染事件中时，表示暂停渲染。如果在执行事件中执行渲染事件，则表示暂停执行并且暂停渲染。



### stop() 停止执行或渲染

返回该工程对象。

> 注意，如果已经停止了，使用无效。

在执行事件中时，表示停止执行；在渲染事件中时，表示停止渲染。如果在执行事件中执行渲染事件，则表示停止执行并且停止渲染。



### use(config) 使用工程

返回该工程对象。

有时候在页面工程中调用其他工程，并且其他工程在当前工程也能监控一些事件，可以使用该方法。通过该方法，可以启用或关闭事件。

下面是不支持操作的事件：

```javascript
oninclude,onincluded,onproject,onprojected,onpage,onpagenotfound,onpageprogress,onready,onreadied,onexecute,onexecuted,onexecutestart,onexecutepause,onexecutestop,onrender,onrendered,onrenderstart,onrenderpause,onrenderstop,onrenderlistener
```

参数是布尔值，表示操作所有事件：

```javascript
// 开启所有的已定义事件
webpanda.project("test").use (true);
webpanda.project("test").use ();// 默认是开启所有的已定义事件
// 关闭所有的事件
webpanda.project("test").use (false);
```

参数是对象，可以使用该方法进行关闭或开启某几个事件：

```javascript
webpanda.project("test").use ({
    // 关闭双击事件
    ondblclick : false,
    // 开启显示事件
    onshow : true,
});
```



注意事项：

> 1) 页面工程的事件本身是自动全部开启的。  
> 2) 所设置的事件操作，只对当前页面有效。当页面跳转或页面操作更新，那么之前的事件设置将会被清理。





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



| 名称             | 相关方法            | 描述                                                 |
| ---------------- | ------------------- | ---------------------------------------------------- |
| readyState       | webpanda\.project() | 工程的准备状态                                       |
| async            | include             | 异步                                                 |
| css              | include             | css 文件类型                                         |
| js               | include             | js 文件类型                                          |
| json             | include             | json 文件类型                                        |
| text             | include             | text 文件类型                                        |
| refresh          | render、execute     | 强制刷新渲染                                         |
| reload           | render、execute     | 重载筛选容器                                         |
| alone            | render、execute     | 未载入时独享筛选容器（会将筛选容器的其他节点清理掉） |
| overrideEvent    | extend              | 覆盖式继承事件                                       |
| disableSelector  | extend              | 禁止继承父级 selector                                |
| disableTemplate  | extend              | 禁止继承父级 template                                |
| disableEvent     | extend              | 禁止继承父级事件函数 on\*                            |
| disablePrototype | extend              | 禁止继承父级 prototype                               |
| disableData      | extend              | 禁止继承父级 data                                    |
| disableInclude   | extend              | 禁止继承父级 include                                 |
| disableFriend    | extend              | 禁止继承父级 friend                                  |
| onlySelector     | extend              | 只继承父级 selector                                  |
| disableTemplate  | extend              | 只继承父级 template                                  |
| disableEvent     | extend              | 只继承父级事件函数 on\*                              |
| disablePrototype | extend              | 只继承父级 prototype                                 |
| disableData      | extend              | 只继承父级 data                                      |
| disableInclude   | extend              | 只继承父级 include                                   |
| disableFriend    | extend              | 只继承父级 friend                                    |





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
    oncallback : function () {
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







# webpanda\.compiler(config) 编译模板

传入模板字符串及配置信息进行模板编译，返回一个编译对象。

```javascript
// 获取模板节点
var app = document.getElementById ("app");
// 获取编译对象
var compiler = webpanda.compiler ({
    // 模板内容
    template : app.innerHTML,
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



### render(config) 渲染

特别注意，`config.data` 对象及其子属性对象（渲染数据），必须是 `constructor == Object || constructor == Array` 这样才会有资格添加数据监听。

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
compiler.render ({
    // 渲染数据
    data : test,
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





### 文本输出  webpanda\-html、$\{\}

允许采用文本特殊符号的模板语法来输出 HTML 内容的变量。也就是说不会自动执行了 `webpanda.encodeHTML` 方法。

其中，`webpanda-html` 命令不能在同一个标签中存在多个。如果其节点包含子内容，那么其子内容跳过编译过程，会被当做源字符串打印输出，也就是说不会识别模板语法命令。

> 注意， $\{\} 是 webpanda\-html 等价写法。

```html
<div webpanda-html="name"></div>
<!--支持单标签-->
<div webpanda-html="name"/>

<!--字符串的写法-->
<div>${ message }</div>
<!--使用 JavaScript 表达式-->
<div>${ message + '测试' }</div>
```







### 文本打印 webpanda\-text、\{\{\}\}

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



### webpanda-data 输出变量


这种用法主要是用于css代码中。


```css
html {
    line-height: webpanda-data(--line-height);
    -webkit-text-size-adjust: 100% 
}
```

在标签中使用：

```html
<div webpanda-data="--line-height" ></div>
```

> 注意，该命令不能写表达式，只是作为输出渲染变量的操作，并且允许两边有空格。


解析后相当于：

```javascript
project.data['--line-height']
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



### 片段 webpanda\-fragment


该命令是将当前节点的子节点包裹，最终解析、渲染结果将不包含其子节点，只会解析并渲染当前节点。


```html
<div webpanda-fragment>
    <span>这里的节点将不会被渲染，也不会被解析</span>
</div>
```

主要用于模板碎片化，利于多个工程之间模板内容相互传递。


### 指令 &lt;webpanda&gt; 、指令注释

该命令是将节点当做指令节点，最终的渲染结果将不包含其节点，但会渲染其子节点。

如果同一个标签存在其他的命令，下列命令才有效果：

> 这些命令具有优先级，会先执行，所以会有效果。

```shell
webpanda-before,webpanda-template,webpanda-for,webpanda-if,webpanda-else-if,webpanda-else,webpanda-is,webpanda-text,webpanda-html,webpanda-fragment
```

如果非上列命令，让其他命令与其搭配的话将无其他命令效果，因为无效节点是具有优先级的。该命令有四种写法，一种是属性的方式，一种是标签的方式，其他是注释的方式。


> /\*\*\[\[webpanda\]\]\*\*/、\<\!\-\-\-[[webpanda]]\-\-\-\> 是注释的方式写法，与 webpanda\-void 、 \<webpanda\>  的写法是等价的。


```html
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

用指令单标签的方式，配合打印命令实现插值`{{}}`功能：

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





### 分支 webpanda\-if、webpanda\-else\-if、webpanda\-else

该组命令用于条件性地渲染一块内容。这块内容只会在命令的表达式返回 `truthy` 值的时候被渲染。该组命令不能在同一个标签中同时存在或存在多个。

`webpanda-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。`webpanda-else` 延伸了 `webpanda-if` 语句，可以在 `webpanda-if` 语句中的表达式的值为 `falsy` 时执行语句。`webpanda-else-if`，和此名称暗示的一样，是 `webpanda-if` 和 `webpanda-else` 的组合。和 `webpanda-else` 一样，它延伸了 `webpanda-if` 语句，可以在原来的 `webpanda-if` 表达式值为 `falsy` 时执行不同语句。

但是和 `webpanda-else` 不一样的是，它仅在 `webpanda-else-if` 的条件表达式值为 `truthy` 时执行语句。

```html
<div webpanda-if="typeof testArray == 'object'">testArray 是一个对象</div>
<!--条件中间是可以写文本和注释的-->
<div webpanda-else-if="testArray">
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



### 属性 webpanda\-attribute

该命令的表达式结果返回字符串作为属性值。

该命令在同一个标签中可以存在多个。语法为`webpanda-attribute="对象表达式"`，示例如下：

```html
<div webpanda-attribute="{name:'attrTestName', id:'attrTestId', var:attrTest}">添加属性</div>
<div webpanda-attribute="{as:attrTestAs}">属性添加全名称</div>
<div webpanda-attribute="{as:attrTestAs}" webpanda-attribute="arrObjsTest">可以存在多个属性设置</div>
```

input、option 值的设置：

```html
<input type="Text" webpanda-attribute="{value:setValue}"/>
<input type="Radio" webpanda-attribute="{checked:setBool}"/>
<select>
    <option webpanda-attribute="{selected:'selected',value:'hk'}">Hong Kong</option>
</select>
```

textarea 值的设置有两种方式：

```html
<textarea webpanda-attribute="{value:setValue}"></textarea>
```

等价于：

```html
<textarea>{{setValue}}</textarea>
```

> 注意，在 textarea 标签中，webpanda\-attr="\{value:setValue\}" 的用法是具有优先级的。



#### 单个属性操作 webpanda\-attribute\-\*

如果是单个属性操作，可以使用 `webpanda-attribute-[属性名称]="值"` 方式设置，如下所示：

```html
<input type="Text" webpanda-attribute-value="setValue"/>
<textarea webpanda-attribute-value="setValue"></textarea>
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



#### 删除样式操作 

有时候还可以根据渲染数据的真假值来删除样式，如下，当`v`为假则设为空字符串 ，便会取消掉该样式：

```html
<div style="color:green;" webpanda-style="{'color': (v?'red':'') }"></div>
```

> 特别注意，与 `webpanda-class` 命令不同，删除样式必须是空字符串，如果是 false 则存在不会生效。  
那么为什么框架不将 `false` 自动转为空字符串呢？ 为了以后扩展吧。




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



#### 返回值为false，阻止事件默认行为

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
    // 取消事件的默认行为
    e.preventDefault ();
    // 也可以直接返回 false，前提在标签中也用了 return
    return false;
};
```



#### 模板预编译参数 \#preventDefault，阻止事件默认行为

```html
<a href="https://www.baidu.com/" webpanda-onclick="#preventDefault"></a>
```





#### 模板预编译参数 \#stopPropagation，阻止事件冒泡

方式一，通过模板预编译参数实现：

```html
<div>
	<a webpanda-onclick="#stoppropagation;eClickFnTest (#event)"></a>
</div>
```

方式二，在事件处理函数中，可以自行操作：

```javascript
/* <div>
	<a webpanda-onclick="eClickFnTest (#event)"></a>
</div> */
this.eClickFnTest = function (e) {
    // 阻止冒泡
    e.stopPropagation ();
    // ......
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

| 参数标签        | 值类型 | 描述                                                         |
| :-------------- | :----- | :----------------------------------------------------------- |
| this            | Object | 获取当前抽象节点树                                           |
| event           | Object | 获取当前事件对象                                             |
| stopPropagation | Void   | 阻止事件冒泡                                                 |
| preventDefault  | Void   | 取消事件的默认行为                                           |
| node            | Object | 获取标签的节点对象。这个注意，节点的渲染出错等等，该参数在实际情况有可能为null |
| value           | Mixed  | 获取节点的值，一般用于input、textarea、select等表单节点      |
| template        | String | 获取节点编译时的模板数据                                     |
| html            | String | 获取节点的html内容                                           |
| text            | String | 获取节点包含的文本内容组合起来的文本                         |
| window          | Object | 获取 window 对象，用于在模板中使用全局变量                   |



### 模板预编译参数会不会与字符串的 “\#” 井号冲突呢？不会

如下写法：

```html
<h1 --test="'#node-'+title" -after="#window.console.log (#node)">{{title}}</h1>
```

上面的代码中，`'#node-'+title` 的 `#node` 会不会被解析成模板预编译参数呢？明确告诉你，不会！因为编译器会自动识别是否在字符串内（是否在单引号或双引号内），如果是字符串则不会被解析的。而后面 `-after="#window.console.log (#node)"`  的 `#node` 则会被解析成模板预编译参数。



### 在模板中使用全局变量

使用 `#window` 预编译参数：

```html
<!-- 使用 console.log -->
<select multiple="multiple" -onchange="#window.console.log (#value)"> </select> 

<!-- 打印当前URL -->
<div>{{#window.webpanda.url().toString ()}}</div>

<!-- 循环临时数组 -->
<div -for="(v,k) new #window.Array(13)">
    {{k}}
</div>
<div -for="(v, k) [11, 22, '这是第三个元素', 44]">
    {{k}} : {{v}}
</div>
```





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
<select multiple="multiple" -onchange="#window.console.log (#value)"> 
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

单个选项的示例，获取选中的值与文本内容：

```html
<select -onchange="#window.console.log (#value, #node.options[#node.options.selectedIndex].text);"> 
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
<a webpanda-attribute-href="'#'+count"></a>
<a webpanda-attribute="{href:'#'+count}"></a>
```

简写为：

```html
<a -attribute-href="'#'+count"></a>
<a webpanda--href="'#'+count"></a>
<a --href="'#'+count"></a>
```







## 模板中使用js关键字

在模板中也可以使用js关键字，但只支持下面几个关键字：

```shell
new return typeof instanceof debugger false true null undefined
```

示例：

```html
<!-- 取消事件的默认行为 -->
<a --href="getUrl()" -onclick="return false"></a>

<!-- 循环临时数组 -->
<div -for="(v,k) new #window.Array(13)">
    {{k}}
</div>
```

> 注意，在模板命令中不支持 `if else function` 关键字。





## 知识点



### 模板表达式中的 this 与 \#this 区别

`this` 是表示渲染数据，如下所示，三种写法是等价的：

```html
<div -style-color="this['colorRed']"></div>
<div -style-color="this.colorRed"></div>
<div -style-color="colorRed"></div>
```

`#this` 是获取当前虚拟节点树对象，如下所示：

```html
<h1 -after="#window.console.log (#this)">{{title}}</h1>
```







### 节点的属性、类、样式、事件等渲染优先级

```shell
子节点渲染 children > 属性 attribute > 类 class > 样式 style > 事件 event
```

根据上面所示，在最开始渲染的时候，如果在属性 (`webpanda-attribute`) 中去取动态渲染的类名称或者动态渲染的样式是取不到的。



### webpanda\-template、webpanda\-html 打印模板字符串比较

webpanda\-html 内部文本会及时编译并且始终显示在节点前面。webpanda\-template 是不会被强制渲染刷新，除非模板字符发生变更，而 webpanda\-html 是可以强制渲染刷新的。

> webpanda\-template与webpanda\-html最大区别：webpanda\-template会将模板中存在的模板语法递归解析出来，而webpanda\-html返回的模板语法是不会被解析的。



### webpanda\-template、webpanda\-for 模板与遍历的编译性质

webpanda\-template具有优先级，也就是较先进行渲染，并且webpanda\-template与webpanda\-for一样，在编译的时候不会编译内部内容。

webpanda\-for 会根据遍历个数进行对内部文本进行编译和渲染，而webpanda\-template不仅认表达式所返回的模板字符串，其内部文本会排在前面与模板字符串拼接再编译和渲染。

> 注意，这两个语法命令是可以同时使用，也就是说不仅是模板，还会被遍历。



### webpanda\-void、&lt;webpanda&gt;、webpanda\-for 无效与遍历渲染性质

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

返回一个计时器对象。参数介绍如下：

> callback 回调函数；   
> timeout 超时时间。默认为 0；  
> limit 执行次数限制，如果小于1，则表示无限循环。默认为 0；   
> global 是否为全局有效，如果为true表示全局，页面更新不会被清理，否则页面更新就会被清理。默认为 false。

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





## 检测 webpanda\.timer\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.timer 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.timer.isInstanceOf (obj)) {
    // 是 webpanda.timer 对象
}
```





## 属性


| 名称      | 类型     | 描述                                                         |
| --------- | -------- | ------------------------------------------------------------ |
| callback  | Function | 回调函数                                                     |
| limit     | Number   | 可执行的总次数、限制执行次数。如果为0表示不限制              |
| executed  | Number   | 已经执行次数                                                 |
| index     | Number   | 索引，随着页面更新索引有可能会自动改变                       |
| origin    | Number   | 开端的毫秒时间戳                                             |
| runtime   | Number   | 当前页面的运行时间(页面版本号)                               |
| timeout   | Number   | 超时时间、间隔时间                                           |
| global    | Boolean  | 是否全局有效，true表示全局，false表示属于当前页面计时器      |
| executing | Boolean  | 执行状态，true表示执行中，定时器必须是前面存在执行完毕之后才会执行下一次 |





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



### backList 上一页的日志列表

是一个数组，该数组是上一页的日志列表。

获取上一页的数量：

```javascript
var backLength = webpanda.history.backList.length;
```





### forwardList 下一页的日志列表

是一个数组，该数组是下一页的日志列表。

获取下一页的数量：

```javascript
var forwardLength = webpanda.history.forwardList.length;
```







### current 当前页面的日志数据

是一个日志对象，该对象是当前页面的日志。

获取当前页面的上一步的数量：

```javascript
var lastLength = webpanda.history.current && webpanda.history.current.getLastLength () || 0;
```

获取当前页面的下一步的数量：

```javascript
var nextLength = webpanda.history.current && webpanda.history.current.getNextLength () || 0;
```







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
    // 发起POST请求
    method : 'POST',
    body : {a:'aa', b:'bb'},
    // 设置异步请求、响应数据类型为JSON
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJSON,
    // 设置超时时间，毫秒
    timeout : 3000,
    // 当 readyState 改变时事件
    onready : function (readyState) {
        console.log("readyState", readyState);
    },
    // 发送请求前执行事件
    onrequest : function (XMLHttpRequest) {
        // 参考文档：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials
        // 如果在发送来自其他域的XMLHttpRequest请求之前，未设置 withCredentials 为true，那么就不能为它自己的域设置cookie值。
        // 而通过设置 withCredentials 为true获得的第三方cookies，将会依旧享受同源策略，因此不能被通过document.cookie或者从头部相应请求的脚本等访问。
        XMLHttpRequest.withCredentials = true;
        
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
// 去掉异步设置
ajax.option = (ajax.option & ~ webpanda.ajax.option.async);
// 发起请求
ajax.request ();
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
    // 发起POST请求
    method : 'POST',
    body : formData,
    // 设置异步请求、响应数据类型为JSON
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJSON,
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

ajax.request ();
```





## 选项 webpanda.ajax.option

使用示例：

```javascript
webpanda.ajax.option.async
```



| 名称         | 描述                            |
| ------------ | ------------------------------- |
| async        | 设置为异步请求 (不设置则为同步) |
| responseText | 设置响应的数据类型为 text       |
| responseXML  | 设置响应的数据类型为 xml        |
| responseJSON | 设置响应的数据类型为 json       |

响应数据同时设置的话，其优先级为 `responseText>responseXML>responseJSON` 。



## 检测 webpanda\.ajax\.isInstanceOf (obj)

判断变量的对象类型是否为 webpanda\.ajax 实例对象。如果是返回 true，否则返回 false 。

```javascript
if (webpanda.ajax.isInstanceOf (obj)) {
    // 是 ajax.require 对象
}
```





## 属性

| 名称     | 值类型                 | 描述                                                         |
| :------- | :--------------------- | :----------------------------------------------------------- |
| url      | url Object             | 资源文件地址对象                                             |
| method   | GET                    | 请求方法                                                     |
| body     | Object/FormData/String | 请求中要发送的数据体                                         |
| header   | Object                 | 请求头                                                       |
| option   | int                    | 选项，通过 webpanda\.ajax\.option 设置值。可以设置请求方法(只支持 POST、GET)、设置同步(默认异步)、响应数据类型 |
| user     | String/NULL            | 可用于身份验证的可选用户名；默认情况下，值为null             |
| password | String/NULL            | 可用于身份验证的可选密码；默认情况下，值为null               |

注意，`header` 默认值：`{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}` 。当 `body` 参数类型是 `FormData` 那么 `Content-Type` 会被阻止使用（使用无效），因为`FormData` 类型的请求参数会将 form 数据放置 `Content-Type` 中。

请求的参数`body` 如果是字符串，格式如：`&a=bar1&b=bar2` 。



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
    option : webpanda.ajax.option.async | webpanda.ajax.option.responseJSON,
    onrequest : function (XMLHttpRequest) {
        // this 是当前请求对象。
        XMLHttpRequest.setRequestHeader ('X-Requested-With', 'test:X-Requested-With');
        console.log ("onrequest", XMLHttpRequest, this); 
        //这里取消请求
        return false;
    },
});
ajax.request ();
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

通过远程 HTTP `GET/POST/PUT/DELETE/...` 方式请求载入信息。如果 method 属性中未设置则默认 GET 请求方法。

```javascript
var ajax = webpanda.ajax ({
    url: "http://example.com/",
    // 指定请求方法 POST
    method: 'POST',
    // 设置异步请求、响应数据类型为JSON
    option: webpanda.ajax.option.async | webpanda.ajax.option.responseJSON,
});
ajax.request ();
```





### abort() 中断请求任务

注意，是中断已经发起的请求任务。





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





# webpanda\.encodeQuery(object) 将关联数组和对象生成 URL Query 字符串

```javascript
var test1 = {a: "a1", b: "b1", c: "c1"};
var queryString = webpanda.encodeQuery (test1);
console.log (queryString);// a=a1&b=b1&c=c1

var test2 = {a: {0: "b1", 1: "a1", c: "c1"}};
var queryString2 = webpanda.encodeQuery (test2);
console.log (queryString2);// a[0]=b1&a[1]=a1&a[c]=c1
```



# webpanda\.decodeQuery(string) 将URL字符串的query部分, 解析成一个对象

```javascript
var queryObject = webpanda.decodeQuery ("a=a1&b=b1&c=c1");
console.log (queryObject);// {a: "a1", b: "b1", c: "c1"}

var queryObject2 = webpanda.decodeQuery ("a[1]=a1&a[0]=b1&a[c]=c1");
console.log (queryObject2);// {a: {0: "b1", 1: "a1", c: "c1"}}
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









