webpanda.project ({

    // BOM、DOM 元素操作
    name : 'webpanda-element',

    /**
     * 工程成员属性
     * @var {Object}
     */
    property : {


        /**
         * 向一个节点(目标)触发点击事件
         * ------------------------------
         * 一般用于选择文件，如：
         * triggerEventClick($('[type="file"]').get(0));
         * 比如选择文件功能，重写文件input按钮的场景
         * triggerEventClick (node);
         * @param {Object} ele
         */
        triggerEventClick : function (ele) {
            // 先判断是否是IE
            var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
            if (ie) {
                ele.click ();
            } else {
                var mouseEvents = document.createEvent ("MouseEvents");// FF的处理
                mouseEvents.initEvent ("click", true, true);
                ele.dispatchEvent (mouseEvents);
            }
        },


        /**
         * 创建文件表单资源的 URL 信息，用于在页面上显示
         * ---------------------
         * createFileURL($('[type="file"]')[0].files[0]);
         * 比如文件input选择了一张图片，我要获取其URL信息，用于在页面上显示
         * createFileURL (node.files[0]);
         * @param {Object} file
         */
        createFileURL : function  (file) {
            var url = '';
            try {

                if (window.createObjectURL != undefined) {
                    url = window.createObjectURL (file);// basic
                } 
                else if (window.URL != undefined) {
                    url = window.URL.createObjectURL (file);// mozilla(firefox)
                } 
                else if (window.webkitURL != undefined) {
                    url = window.webkitURL.createObjectURL (file);// webkit or chrome
                }

            } catch (e) {
                url = '';
            }

            return url;
        },



        
    
        /**
         * 获取或动态修改浏览器中的title
         * ----------------------
         * src 参数是为了兼容change事件：由于有些浏览器只在页面首次加载时初始化了标题title，之后就没有再监听 window.title 的change事件：
         * 所以这里修改了title后，立即创建一个请求，加载一个空的iframe，由于加载后立即就移除，也不会对页面造成影响，但这样浏览器上的title便刷新了。 
         * 如果src为空，那么上面的方式将视为不采用(不会加载iframe)。
         * 
         * // 修改页面标题，返回一个布尔值
         * var is = title ("这是测试修改标题");
         * // 采用兼容模式
         * title ("这是测试", "https://www.baidu.com/");
         * // 获取当前页面标题
         * var title = title ();
         * @param {String} name    如果未定义，返回当前标题
         * @param {String} src	   加载一个路由。为空则默认为百度地址
         */
        title : function (name, src) {
            if (typeof name == 'undefined') {
                return document.title;
            }

            // 初始化格式
            if (typeof data != 'string' && typeof data != 'number') {
                name = '';
            }
            
            // 如果标题没改变
            if (document.title == name) {
                return false;
            }
            // 设置标题
            document.title = name;

            // 需要请求事件更新
            if (typeof src == 'string') {
                var iframeElement = document.createElement ('iframe');
                iframeElement.style['left'] = '-99999px';
                iframeElement.style['position'] = 'absolute';
                iframeElement.src = src;
                iframeElement.onload = function () {
                    document.body.removeChild (iframeElement);
                }
                document.body.appendChild (iframeElement);
            }

            return true;
        },
        


    },


});