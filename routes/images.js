const express=require('express');
var pool=require('../pool');
var route=express.Router();
route.get("/mainswipe",(req,res)=>{
    pool.query("select title,src,bannertype from main_banner where onshow=1 order by id asc",(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
route.get("/newbie",(req,res)=>{
    pool.query("select title,src from main_newbie where onshow=1 order by id asc",(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
route.get("/",(req,res)=>{
    pool.query("select title,src from main_newbie where onshow=1 order by id asc",(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})

module.exports=route;