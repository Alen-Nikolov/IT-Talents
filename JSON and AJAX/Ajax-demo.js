var title=document.querySelector('h2');
var desc=document.querySelector('h5');
var img=document.querySelector('img');
var btn=document.getElementById('btn');
var input=document.querySelector('input');


btn.addEventListener('click',function(){
    var t=document.querySelector('input[type=text]').value.trim();
    var xhr=new XMLHttpRequest();
    var url="http://www.omdbapi.com/?t="+t;
    xhr.open("GET",url,true);
    xhr.send(null);
    xhr.addEventListener('load',function(){
        var info=JSON.parse(xhr.responseText);
        title.innerHTML=info.Title;
        desc.innerHTML=info.Plot;
        img.src=info.Poster;
        console.log(info)
    },false);

},false);
