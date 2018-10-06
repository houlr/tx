//使用express构建web服务器
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
var article=require('./routes/article')
var images=require('./routes/images')
var m=require('./routes/m')
var video=require('./routes/video')
var wx=require('./routes/wx')
const cors=require('cors')
/*引入路由模块*/
var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
app.use(cors({
  origin:['http://127.0.0.1:8080','http://127.0.0.1:3000','http://localhost:3000','http://localhost:4200','http://localhost:8080',"http://176.18.9.148:3000"],
  credentials:true,
}))
app.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));
/*使用路由器来管理路由*/
app.use("/article",article);
app.use("/images",images);  
app.use("/m",m);  
app.use("/video",video);  
app.use("/wx",wx);  