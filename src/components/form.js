webpanda.project ({

    // 表单相关操作
    name : 'webpanda-form',

    /**
     * 工程成员属性
     * @var {Object}
     */
    property : {

        
        /**
         * 将关联数组和对象生成 FormData 键值对结构[!<=IE9]
         * -----------------------
         * 注意，FormData接口在IE9及IE9以下版不支持。更多参考：[FormData](https://developer.mozilla.org/zh-CN/docs/Web/API/FormData)
         * 
         * var obj = {
                "b":{"api":"user.oauth.github.AccessToken","args":{"primaryKey":""}},
                "a":{"api":"testApi1","args":{"name":"王阿和","info":"这是测试"}}
            };
            var forms = buildFormData (obj);
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
         */
        buildFormData : function (obj) {

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
