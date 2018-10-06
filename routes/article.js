const express=require('express');
var route=express.Router();
var pool=require('../pool')
route.get("/newslist",(req,res)=>{
    var output={};
    var {typeid,pno}=req.query;
    output.pageSize=9;
    output.typeid=typeid;
    pool.query('select count(*) as count  from article where typeid REGEXP ? ',[typeid],(err,result)=>{
        if(err) throw err;
        output.count=result[0].count;
    })
    if(!pno)
    pno=1;
    output.pno=pno;
    var sql="select art_id,title,detail,add_date,article.typeid,typename from article left join arttype on arttype.typeid=article.typeid where article.typeid REGEXP ? order by add_date desc limit ?,?";
    pool.query(sql,[typeid,(pno-1)*output.pageSize,output.pageSize],(err,result)=>{
        if(err) throw err;
        output.result=result;
        res.send(output);
    })
})
route.get("/dhqb",(req,res)=>{
    var {limit}=req.query;
    limit=parseInt(limit);
    pool.query("select title,cover,author,add_time,typename from dhqb order by add_time desc limit 0,?",[limit],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
route.get("/artcontent",(req,res)=>{
    var {art_id}=req.query;
    pool.query("select title,add_date,content,typename from article left join arttype on arttype.typeid=article.typeid where art_id=?",[art_id],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})
module.exports=route;