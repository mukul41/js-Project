// const apiKey = "5743a160bc06662644c8cf19f622a1d9";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".input");
// const searchBtn = document.querySelector(".btn");
// console.log(searchBox);
// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();
  
//     console.log(data);
  
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
// }
// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value);
// })
document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "5743a160bc06662644c8cf19f622a1d9";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".input");
    const searchBtn = document.querySelector(".btn");
    const weatherIcon =document.querySelector(".weather-icon");
    console.log(searchBox);

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        if(response.status == 404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }
        else{
                
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="img/cloudy.png";
        }
        else if(data.weather[0].main == "rain"){
            weatherIcon.src="img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="img/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="img/sun.png";
        }
        document.querySelector(".weather").style.display="block";
        // document.querySelector(".error").style.display="none";
    }
        }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });

});

