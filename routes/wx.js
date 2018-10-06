const express=require('express');
var pool=require('../pool');
var route=express.Router();
route.get("/goods",(req,res)=>{
    var {limit,ty}=req.query;
    limit=parseInt(limit);
    pool.query("select gid,price,cover,type from wx_goods where type REGEXP ? limit 0,?",[ty,limit],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
route.get("/goodsdetail",(req,res)=>{
    var {gid}=req.query;
    var goods={};
    pool.query("select gid,price,cover,yun,remain,output from wx_goods  where gid=?",[gid],(err,result)=>{
        if(err) throw err;
        goods.detail=result[0];
        console.log(goods.detail.gid)
        pool.query("select banner from wx_banner  where gid=?",[gid],(err,result)=>{
            if(err) throw err;
            goods.banner=result;
            pool.query("select content from wx_content  where gid=?",[gid],(err,result)=>{
                if(err) throw err;
                goods.content=result;
                res.send(goods)
            });
        });
    })
})


module.exports=route;