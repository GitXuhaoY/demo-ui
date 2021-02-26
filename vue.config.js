const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    
    devServer: {
        // host: "localhost", //要设置当前访问的ip 否则失效
        port: 8080,
        open: true, //浏览器自动打开页面,
        
    },
    chainWebpack: config => {
        console.log("config")
        console.log(config)
        config.module
            .rule('js')
            .include
            .add(resolve('packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                console.log("bable-loader")
                
                return options
            })
    }
}