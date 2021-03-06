var webpack = require('webpack');
var fs = require("fs");
var webpackBaseConfig = require('./webpack.config.js');
var cp = require('child_process');  //运行是打开浏览器
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var app = express();
var watch = require('watch');




var compiler = webpack(webpackBaseConfig);

//console.log(compiler.options.entry.index);

console.log(process.env.NODE_ENV);

compiler.options.entry.index.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true')
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/dist',express.static(__dirname));

//读取package.json
var json = fs.readFileSync("./package.json","utf-8");
//获取端口号
var port = JSON.parse(json).port?JSON.parse(json).port:"8080";


var http = require('http');
var reload = require("reload");
var server = http.createServer(app);
//reload(server, app);
server.listen(port, function(){
    console.log('App (dev) is now running on port '+port+'!');
    function copy(inDirUrl) {
        var allFileList = [];
        //读取目标文件列表
        var fileList = fs.readdirSync(inDirUrl);
        /**
         * 循环
        */
        fileList.forEach((list) => {

            var statInfo = fs.lstatSync(inDirUrl + "/" + list);
            
            //判断这个是一个文件
            if (statInfo.isFile()) {
                //判断文件是以.jsx结尾
                if(/\.jsx$/.test(list)){
                    allFileList.push(inDirUrl + "/" + list);
                }
            }

            //这是一个文件夹
            if (statInfo.isDirectory()) {
                allFileList = allFileList.concat(copy(inDirUrl + "/" + list))
            }
        });
        return allFileList;
    }

    watch.watchTree(process.cwd()+"/page", function(f, curr, prev) {
        fs.writeFile(process.cwd()+"/src/router.js",`export var router = ${JSON.stringify(copy(process.cwd()+"/page"))}`,function(err){
            if(err){
                console.log(err);
            }
        });
    });
});





return false;
//启动后自动打开页面
if(process.platform=="win32"){
    cp.exec('start http://localhost:'+port+"/#/");
}else{
    cp.exec('open http://localhost:'+port+"/#/");
}








