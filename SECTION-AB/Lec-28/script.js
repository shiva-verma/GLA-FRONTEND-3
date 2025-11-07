let inputBox = document.getElementById("inp")
let button = document.getElementById("btn");

async function getWeather(){
    let city = inputBox.value;
    let API_key = "f09e8ecb1e5dea7b27ac2e1061a2dd04"

    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)
    let geoData = await response.json();
    
    const {lat, lon} = geoData[0]
    console.log(lat)
    console.log(lon)

    let response2 = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`)
    let weatherData = await response2.json();
    console.log(weatherData);

}

button.addEventListener("click", getWeather);