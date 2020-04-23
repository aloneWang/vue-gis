const webpack = require('webpack')
module.exports = {
    devServer: {
        port: '8081'
    },
    publicPath: './',
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
   
}