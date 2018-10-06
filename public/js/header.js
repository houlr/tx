$.ajax({
    type:"get",
    url:"http://176.18.9.148:3000/header.html",
    success:function(result){
        $("#header").append($(result));
        var download=document.querySelector(".download-icon");
        var music=document.querySelector(".icon-music");
        download.style.marginLeft="-110px";
        music.parentElement.style.display="inline-block";
    }
})