let inputBox = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");

async function getWeather(e){
    e.preventDefault();
    let city_name = inputBox.value;
    let API_key = ""

    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${API_key}`)
    let geoData = await response.json();

    const {lat, lon} = geoData[0]

    //getWeather
    let response2 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`)
    let getW = await response2.json();

    console.log(getW)
}

searchBtn.addEventListener("click", getWeather);