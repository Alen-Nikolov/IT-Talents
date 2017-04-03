function makeElement(text) {
    return document.getElementById('weather').appendChild(document.createElement(text));
}
function sendRequest(url,method, success, fail, parameters){
    var parameters=parameters||null;
    var xhr=new XMLHttpRequest();
    xhr.open(method,url,true);
    xhr.send(parameters);
    xhr.addEventListener('load', function(){
        if(xhr.status>=200 && xhr.status<=299){
            success(JSON.parse(xhr.responseText));
        } else {
            fail(new Error("Failed to execute AJAX call: "+xhr.status));
        }
    },false);
        xhr.addEventListener('error', function(){
            fail(new Error("Failed to execute AJAX call(throws error): "+xhr.status));
    },false);


}

document.getElementById('cities').addEventListener('change', function () {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.value + ",bg&appid=f631fd357c75163a46154773a513dd64";

    sendRequest(url, 'get',function(data){
        document.getElementById('weather').innerHTML = "";
        var temp = makeElement('p').innerText = "Temperatura: " + Number(data.main.temp - 273.15).toFixed(2);
        var wind = makeElement('p').innerText = "Vqtyr: " + Number(data.wind.speed);
        var weather = makeElement('p').innerText = "Vreme: " + data.weather[0].description;
    }, function (err) {
        console.log(err);
    });

}, false);
