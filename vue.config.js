module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',    // 反向代理地址
                changeOrigin : true                // 是否跨域
            }
        }
    }
}