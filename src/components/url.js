webpanda.project ({

    // URL 链接相关
    name : 'webpanda-url',

    /**
     * 工程成员属性
     * @var {Object}
     */
    property : {


        
        /**
         * 刷新当前页面地址  
         * ---------------------
         * clear 可选参数， 默认为 false，从客户端缓存里取当前页。
         * clear 如果为 true, 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5("刷新")
         * 
         * // 参数为空，从客户端缓存里取当前页。
         * reload ();
         * // 参数为 true, 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5("刷新")
         * reload (true);
         * @param {Boolean} clear 
         */
        reload : function (clear) {
            if (clear) {
                window.location.reload (true);
            } else {
                window.location.reload ();
            }
        },

        
        /**
         * 请求并跳转地址
         * --------------
         * `href` 是地址字符串或者 `webpanda.url` 对象。
         * clear 的页面每次都在服务端重新生成。为真的话，浏览历史就被清空了
         * 
         * // 创建一个url对象
         * var url = webpanda.url("https://www.baidu.com/");
         * // 跳转
         * request (url);
         * // 跳转, 第二个参数为 true 表示清空历史记录（也就是无法返回了）
         * request ("https://www.baidu.com/", true);
         * @param   {Strng|url} href    链接字符串或者 url 对象
         * @param   {Boolean}   clear   是否清空历史记录
         */
        request : function (href, clear) {
            // 如果是 url 对象则转换为链接字符串
            if (typeof href == 'object' && href.constructor == url) {
                href = href.toString ();
            }
            // 不是字符串则不再往下执行
            if (typeof href != 'string') {
                return;
            }

            if (clear) {
                window.location.replace (href);// 清空历史记录
            } else {
                window.location.assign (href);// href 与 assign 方法会产生历史记录
                // window.location.href = href;
            }
        },


        

        /**
         * 改变网址而不刷新页面 [!<=IE9]
         * ---------------
         * 仅改变网址，网页不会真的跳转，也不会获取到新的内容，本质上网页还停留在原页面。注意，存在跨域限制。
         * 注意，该方法在IE9及IE9以下版本不支持。更多参考：[History.pushState()](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)
         * 
         * // 创建一个url对象
         * var url = webpanda.url ("/home/?id=123");
         * // 不能跨域
         * target (url, {
                state : null,// 状态对象：传给目标路由的信息,可为空
                title : '',// 页面标题：目前所有浏览器都不支持,填空字符串即可
                replaceState : false,// 是否为 replaceState 方式执行。直接替换掉当前url,不会在history中留下记录
            });
         * 
         * window.history.pushState(state, title, targetURL);
         * 注意: 仅改变网址,网页不会真的跳转,也不会获取到新的内容,本质上网页还停留在原页面!
         * window.history.replaceState(state, title, targetURL);
         * 类似于pushState,但是会直接替换掉当前url,而不会在history中留下记录
         * @param {String|webpanda.url} href    目标地址（目标url，不会检查url是否存在，且不能跨域。如不传该项,即给当前url添加data）
         * @param {Object} config.state         状态对象：传给目标路由的信息,可为空
         * @param {String} config.title         页面标题：目前所有浏览器都不支持,填空字符串即可
         * @param {Boolean} config.replaceState 是否为 replaceState 方式执行
         */
        target : function (href, config) {
            // 如果是 url 对象则转换为链接字符串
            if (webpanda.url.isInstanceOf (href)) {
                href = href.toString ();
            }
            // 不是字符串则不再往下执行
            if (typeof href != 'string') {
                return;
            }

            if (!isConstructorObject (config)) {
                config = {
                    state : null,
                    title : '',
                    replaceState : false
                }
            }

            if (config.replaceState) {
                window.history.replaceState (config.state, config.title, href);
            } else {
                window.history.pushState (config.state, config.title, href);
            }
            
        },

        
        /**
         * 弹出并打开地址
         * --------------
         * `href` 是地址字符串或者 `webpanda.url` 对象
         * `width` 窗口宽度
         * `height` 窗口高度
         * `config` 配置信息，如下：
         * 
            | 名称       | 描述                                                         |
            | :--------- | :----------------------------------------------------------- |
            | left       | 窗口距离屏幕左侧的象素值；默认值 (window\.screen\.width \- width) / 2 |
            | top        | 窗口距离屏幕上方的象素值；默认值 (window\.screen\.height \- height) / 2 |
            | target     | 弹出窗口的名字（不是文件名），非必须，可用空''代替； \_blank \-\- 在新窗口中打开链接（默认） \_parent \-\- 在父窗体中打开链接 \_self \-\- 在当前窗体打开链接,此为默认值 \_top \-\- 在当前窗体打开链接，并替换当前的整个窗体(框架页) |
            | toolbar    | 是否显示工具栏，默认no，yes为显示；                          |
            | scrollbars | 是否显示滚动栏，默认no，yes为显示；                          |
            | menubar    | 是否显示菜单栏，默认no，yes为显示；                          |
            | location   | 是否显示地址栏，默认no，yes为允许；                          |
            | resizable  | 是否允许改变窗口大小，默认no，yes为允许；                    |
            | status     | 是否显示状态栏内的信息（通常是文件已经打开），默认no，yes为允许； |

         * // 创建一个url对象
         * var url = webpanda.url ("https://www.baidu.com/");
         * // 默认宽高、配置
         * open (url);
         * // 设置宽高
         * open ("https://www.baidu.com/", 500, 300);
         * 
         * 
         * @param   {Strng|webpanda.url} href    链接字符串或者 url 对象
         * @param   {Number}    w		宽 
         * @param   {Number}    h		高 
         * @param   {Object}    c		配置 
         */
        open : function (href, w, h, c) {
            // 如果是 url 对象则转换为链接字符串
            if (webpanda.url.isInstanceOf (href)) {
                href = href.toString ();
            }
            // 不是字符串则不再往下执行
            if (typeof href != 'string') {
                return;
            }

            var o = {};

            /**
             * window.open 弹出新窗口的命令；
             'page.html' 弹出窗口的文件名；
             'newwindow' 弹出窗口的名字（不是文件名），非必须，可用空''代替；
                    _blank -- 在新窗口中打开链接（默认）
                    _parent -- 在父窗体中打开链接
                    _self -- 在当前窗体打开链接,此为默认值
                    _top -- 在当前窗体打开链接，并替换当前的整个窗体(框架页) 
             height=100 窗口高度；
             width=400 窗口宽度；
             top=0 窗口距离屏幕上方的象素值；
             left=0 窗口距离屏幕左侧的象素值；
             toolbar=no 是否显示工具栏，yes为显示；
             menubar，scrollbars 表示菜单栏和滚动栏。
             resizable=no 是否允许改变窗口大小，yes为允许；
             location=no 是否显示地址栏，yes为允许；
             status=no 是否显示状态栏内的信息（通常是文件已经打开），yes为允许；
             * 
             */

            o.width = w && typeof w == 'number' ? w : 100;
            o.height = h && typeof h == 'number' ? h : 100;

            //如果没有传入左与高，那么是居中
            o.left = c && typeof c.left == 'number' ? c.left : (window.screen.width - o.width) / 2;
            o.top = c && typeof c.top == 'number' ? c.top : (window.screen.height - o.height) / 2;

            o.target = c && (typeof c.target == 'string' || typeof c.target == 'number') ? c.target : '_blank';
            o.toolbar = c && typeof c.toolbar == 'string' ? c.toolbar : 'no';
            o.scrollbars = c && typeof c.scrollbars == 'string' ? c.scrollbars : 'no';
            o.menubar = c && typeof c.menubar == 'string' ? c.menubar : 'no';
            o.location = c && typeof c.location == 'string' ? c.location : 'no';
            o.resizable = c && typeof c.resizable == 'string' ? c.resizable : 'no';
            o.status = c && typeof c.status == 'string' ? c.status : 'no';

            window.open (href, o.target, 'height=' + o.height + ', width=' + o.width + ', top=' + o.top + ', left=' + o.left + ', toolbar=' + o.toolbar + ', menubar=' + o.menubar + ', scrollbars=' + o.scrollbars + ', resizable=' + o.resizable + ',location=' + o.location + ', status=' + o.status);

        }











    }




});