$.ajax({
    type:"get",
    url:"http://176.18.9.148:3000/aside.html",
    success:function(result){
        $("#side").append($(result));
    }
})