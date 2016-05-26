electron 练手项目 纯前端 配合vue框架做的
这个项目本来是一个webapp

client 是客户端 源码文件夹
public 是最终要打成asar文件的目录

使用webpack打包client中的源码,到public/liveSearch中

#开发流程

###1.需全局安装
```
npm install electron-prebuilt -g
npm install asar -g
npm install webpack -g
```

###2.webpack打包
```
npm run build
```

###3.开发时运行
```
npm run dev
```

###4.打包成asar文件
```
npm run asar
```

###5.转成各平台对应的app

####简单打包
去[官网](https://github.com/electron/electron/releases)下载各平台对应的压缩包,解压出来,
把default_app.asar替换成上一步打出来的asar文件

####自动化打包
使用[electron-packager](https://github.com/electron-userland/electron-packager)