# 搭建过程
1、初始化package.json文件
  npm i --y //命令自动创建

2、构建项目目录
  
3、建立webpack配置文件
  手动创建 webpack.config.js 文件

4、安装开发需要的webpack依赖
  npm install --save-dev webpack webpack-dev-server
  npm install --save-dev html-webpack-plugin

5、配置webpack 见webpack.config.js注视说明

6、.babelrc文件配置
  {
    "presets": [
      "env", "react"
    ],
    "plugins": [
      <!-- antd按需加载 -->
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }]
    ]
  }
  注意需要安装babel-plugin-import来处理按需加载
  npm i babel-plugin-import --save-dev
