webpanda.project ({

    // 常用工具
    name : 'webpanda-common',


    /**
     * 原型
     * @var {Object}
     */
    prototype : {
        

        /**
         * 去掉字符串起始和结尾的空格。
         * @param {String} text
         * @return {String}
         */
        trim : function (text) {
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            return text == null ? "" : (text + "").replace (rtrim, "");
        },

        /**
         * 确定它的参数是否是一个数字或者字符串数字。
         * @param {Object} obj 
         * @return {Boolean}
         */
        isNumeric : function (obj) {
            return (typeof obj === "number" || typeof obj === "string") && !isNaN (obj - parseFloat (obj));
        },

                
        /**
         * 将关联数组和对象生成 FormData 键值对结构[!<=IE9]
         * -----------------------
         * 注意，FormData接口在IE9及IE9以下版不支持。更多参考：[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)
         * 
         * var obj = {
                "b":{"api":"user.oauth.github.AccessToken","args":{"primaryKey":""}},
                "a":{"api":"testApi1","args":{"name":"王阿和","info":"这是测试"}}
            };
            var forms = formData (obj);
            console.log (JSON.stringify (forms));

            打印输出：
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
         * @param {Object} obj 
         */
        formData : function (obj) {

            // 递归循环
            var getChildFormData = function (data) {
                var arr = new Array ();
                if (typeof data == 'object') {
                    for (var i in data) {
                        var child = getChildFormData (data[i]);
                        for (var j in child) {
                            arr.push({
                                key: '[' + i + ']' + child[j].key,
                                value: child[j].value
                            });
                        }
                    }
                } else {
                    arr.push ({
                        key: '',
                        value: data
                    });
                }
                return arr;
            };


            var arr = new Array ();
            if (typeof obj != 'object') {
                return arr;
            }

            for (var i in obj) {
                var child = getChildFormData (obj[i]);
                for (var j in child) {
                    arr.push ({
                        key: i + child[j].key,
                        value: child[j].value
                    });
                }
            }

            return arr;
        },














    },








});