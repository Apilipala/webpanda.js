webpanda.project ({

    // 单位相关
    name : 'webpanda-unit',


    /**
     * 工程成员属性
     * @var {Object}
     */
    property : {

        /**
         * 字节单位换算函数（bytes，KB）
         * ------------------
         * bytes 字节数，decollator 是分隔符。
         * byte (123," ");// "123 bytes"
         * byte (12345);// "12.06KB"
         * byte (102400000,"-");// "97.66-MB"
         * @param {Object} bytes
         * @param {Object} decollator	分隔符
         */
        byte : function (bytes, decollator) {
            if (isNaN (bytes)) {
                return '';
            }
            var symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var exp = Math.floor (Math.log (bytes) / Math.log (2));
            if (exp < 1) {
                exp = 0;
            }
            var i = Math.floor (exp / 10);
            bytes = bytes / Math.pow (2, 10 * i);
            if (bytes.toString ().length > bytes.toFixed (2).toString ().length) {
                bytes = bytes.toFixed (2);
            }

            if (typeof decollator != 'string') {
                decollator = '';
            }

            return bytes + decollator + symbols[i];
        },




    
    }


});