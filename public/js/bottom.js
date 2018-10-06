$.ajax({
    type:"get",
    url:"http://176.18.9.148:3000/bottom.html",
    success:function(result){
        $("#bottom").append($(result));
    }
})