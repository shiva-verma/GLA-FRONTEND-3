let inputBox = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");

function getWeather(){
    let city = inputBox.value;

    let weatherData = fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
}

searchBtn.addEventListener("click", getWeather);