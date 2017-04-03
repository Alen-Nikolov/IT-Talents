var image = document.querySelector("img");
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    var url = "http://www.omdbapi.com/?t=Batman";
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, false);
    xhr.send(null);
    console.log(JSON.parse(xhr.responseText));
}, false);
