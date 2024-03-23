let weather = {
    apikey:  "f358d1bf289a62a9ddc1a6a49f1cad46",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apikey)
         .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_max, temp_min } = data.main;
        const { lon, lat } = data.coord;
        const { speed } = data.wind;
        document.querySelector(".city2").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".lon").innerText = "Longitude: " + lon + "°";
        document.querySelector(".lat").innerText = "Latitude: " + lat + "°";
        //document.querySelector(".temp_min").innerText = "Minimum  " + temp_min + "°C";
       //document.querySelector(".temp_max").innerText = "Maximum  " + temp_max + "°C";
        document.querySelector(".humidity").innerText =   + humidity + "%";
        //document.querySelector(".wind").innerText =  speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
       //document.body.style.backgroundImage = "url('./images/day/cloudy.jpg" + name + "')"
    },

    search : function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("pune");
