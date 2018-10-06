const express=require('express');
var route=express.Router();
var pool=require('../pool');
route.get("/video",(req,res)=>{
    var {limit,bid,did}=req.query;
    limit=parseInt(limit)
    if(!bid) bid=".*"
    if(!did) did=".*"
    pool.query('select video.title,video.cover from video where did REGEXP ? and bid REGEXP ? order by add_time DESC LIMIT 0,?',[did,bid,limit],(err,result)=>{
        if(err) throw err;
        res.send(result)
    }
    )
})
module.exports=route;
