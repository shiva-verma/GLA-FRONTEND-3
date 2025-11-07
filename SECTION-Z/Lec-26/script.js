//GET latitude & longitude from city name
//https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json

//latitude & longitude
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

let inputBox = document.getElementById("inp")
let getWeatherBtn = document.getElementById("btn");


async function getWeather(){
    let city = inputBox.value;

    //geoencoding - geo location
    let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
    let geoData = await response.json();
    
    const {latitude, longitude} = geoData.results[0];

    //get Weather
    let response1 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
    let weatherData = await response1.json();

    console.log(weatherData);


    
}

getWeatherBtn.addEventListener("click", getWeather)