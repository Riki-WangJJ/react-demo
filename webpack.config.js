var path = require('path');//node提供的一块方法
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // 入口
  entry: path.join(__dirname, './src/main.js'),
  // 出口
  output: {
      path: path.resolve(__dirname, './dist'),   //打包后文件的输出路径
      filename: 'bundle.js',                   //输出文件名字，开发环境直接把输出名字固定
  },
  // 准确定位开发期间的错误
  devtool: 'eval-source-map',
  devServer:{
    contentBase:'./dist',   　　//指定服务开启的位置，在dist文件夹中
    inline: true,              //实时刷新
    port:9000,                 //默认8080
    //代理属性
    // proxy:{                    
    //   "/api":{
    //   target:'http://localhost:9000/',
    //   pathRewrite: {"^/api":""}
    // }
　},
  // 处理静态资源
  module: {
    rules: [
      // 处理 css
      // npm install --save-dev css-loader style-loader
      // 因为sass-loader依赖于node-sass，所以还要安装node-sass,postcss-loader autoprefixer postcss 添加浏览器兼容
      // npm install --save-dev sass-loader node-sass
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理 sass
      { test: /\.(sass|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // 处理 图片
      // npm install --save-dev url-loader
      { 
        test: /\.(jpe?g|png|gif|bmp|webp)$/, 
        use: {
          loader: 'url-loader',
          options: {
            // 当文件大小8192将会被转陈base64
            limit: 8192
          }
        }
      },
      // 处理 字体
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'file-loader' },
      // 处理 js的新语法 除此之外你还需要创建.babelrc 文件 
      //js的loader加载器依赖
      // npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev
      // babel相关插件配置
      // npm install --save-dev babel-plugin-transform-runtime babel-preset-stage-0
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  // 自动帮你把打包后的静态文件引入的html中
  // npm install --save-dev html-webpack-plugin
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}