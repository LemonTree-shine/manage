var webpack = require('webpack');
var webpackBaseConfig = require('./webpack.config.js');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var express = require('express');

var app = express();


var compiler = webpack(webpackBaseConfig);

console.log(compiler.options.entry.index);

compiler.options.entry.index.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true')
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: {
        colors: true
    }
}));

app.use(webpackHotMiddleware(compiler));

app.use('/',express.static(__dirname));

var http = require('http');
var reload = require("reload");
var server = http.createServer(app);
reload(server, app);
server.listen(3100, function(){
    console.log('App (dev) is now running on port 3100!');
});







