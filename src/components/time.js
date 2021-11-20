webpanda.project ({

    // 时间相关
    name : 'webpanda-time',

    /**
     * 原型
     * @var {Object}
     */
    prototype : {
        

        
        /**
         * 对Date的扩展，将 Date 转化为指定格式的String 
         * -------------------------
         * fmt 就是格式字符串，月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)， 可以用 1-2 个占位符。年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 。   
         * timestamp 即指定要格式化的时间戳，毫秒。如果为空，则默认当前时间戳。 
         * 
         * date ("yyyy-MM-dd hh:mm:ss.S");// 2019-12-17 05:53:43.288    
         * date ("yyyy-MM-dd E HH:mm:ss");// 2019-12-17 二 17:54:13
         * date ("yyyy-MM-dd EE hh:mm:ss");// 2019-12-17 周二 05:54:34
         * date ("yyyy-MM-dd EEE hh:mm:ss");// 2019-12-17 星期二 05:55:02     
         * date ("yyyy-M-d h:m:s.S");// 2019-12-17 5:55:15.354
         * date ("yyyy-MM-dd q hh:mm:ss");// 2019-12-17 4 05:55:32
         * 
         * // 自定义格式化时间戳
         * date ("yyyy-MM-dd EEE hh:mm:ss", 696007439000);// 1992-01-21 星期二 11:23:59
         * @param {String}  fmt         格式字符串
         * @param {Number}  timestamp   是一个毫秒时间戳
         */
        date : function (fmt, timestamp) {
            if (timestamp) {
                var time = new Date (timestamp);
            } else {
                var time = new Date ();
            }

            var o = {
                "M+" : time.getMonth () + 1, //月份  ，注意js里的月要加1        
                "d+" : time.getDate (), //日         
                "h+" : time.getHours () % 12 == 0 ? 12 : time.getHours () % 12, //小时         
                "H+" : time.getHours (), //小时         
                "m+" : time.getMinutes (), //分         
                "s+" : time.getSeconds (), //秒         
                "q+" : Math.floor((time.getMonth () + 3) / 3), //季度         
                "S" : time.getMilliseconds () //毫秒         
            };
            var week = {
                "0" : "日",
                "1" : "一",
                "2" : "二",
                "3" : "三",
                "4" : "四",
                "5" : "五",
                "6" : "六"
            };
            if (/(y+)/.test (fmt)) {
                fmt = fmt.replace (RegExp.$1, (time.getFullYear () + '').substr (4 - RegExp.$1.length));
            }
            if (/(E+)/.test (fmt)) {
                fmt = fmt.replace (RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : '') + week[time.getDay () + '']);
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test (fmt)) {
                    fmt = fmt.replace (RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr (('' + o[k]).length)));
                }
            }

            return decodeURI (fmt);
        },








    },




});