const express=require('express');
var pool=require('../pool');
var route=express.Router();
route.get("/banner",(req,res)=>{
    pool.query("select img,title from m_banner",(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
route.get("/hot",(req,res)=>{
    var {limit,typeid}=req.query;
    limit=parseInt(limit);
    pool.query("select art_id,add_date,img,detail,title from article where typeid=? order by add_date desc limit 0,?",[typeid,limit],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})


module.exports=route;