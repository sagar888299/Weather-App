const apikey = "92df510d87771d3c5fd7268ad8085754" ;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search");
const result = document.querySelector(".searchbtn");
const answer = document.getElementById("answer");
answer.style.display = "none";
 async function checkweather()
{
    const city = searchbox.value;
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
if(data.cod === "404")
{
    alert("Enter Correct Name");
    searchbox.value = "";
    answer.style.display = "none";
    document.getElementById("main").style.backgroundImage = "url('cleary.jpg')";
}
else{
    searchbox.value = "";
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
document.querySelector(".name").innerHTML = data.name;
let weathers = data.weather[0].main;
console.log(weathers);
document.querySelector(".weathers").innerHTML = weathers ;
if(weathers === "Clear")
{
    document.getElementById("main").style.backgroundImage = "url('cleary.jpg')";
    document.getElementById("main").style.color = "white";
}
else if(weathers === "Rain")
{
    document.getElementById("main").style.backgroundImage = "url('rainy.avif')";
    document.getElementById("main").style.color = "white";
}
else if(weathers === "Haze")
{
    document.getElementById("main").style.backgroundImage = "url('cloudy.jpg')";
    document.getElementById("main").style.color = "black";
}
else if(weathers === "Snow")
{
    document.getElementById("main").style.backgroundImage = "url('snowy3.avif')";
    document.getElementById("main").style.color = "black";
}
else if(weathers === "Mist")
{
    document.getElementById("main").style.backgroundImage = "url('mist4.jpg')";
    document.getElementById("main").style.color = "white";
}
else if(weathers === "Clouds")
{
    document.getElementById("main").style.backgroundImage = "url('clou.jpg')";
    document.getElementById("main").style.color = "black";
}
answer.style.display = "block";
}
}
result.addEventListener("click",checkweather);
