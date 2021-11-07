var api_key = 'ebcd87836b6c19e70edd85b51e78eda3';

var city_searchbar = document.getElementById('city_searchbar');
var svg = document.getElementById('svg');
var city_name = document.querySelector('#city_name');
var air_status = document.querySelector('#status');


var temp1 = document.querySelector('#temp1');
var temp2 = document.querySelector('#temp2');
var temp3 = document.querySelector('#temp3');

// var degree = document.createElement('span');
// var degree_text = document.createTextNode('&#176;');
// degree.appendChild(degree_text);


city_searchbar.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {

        city_name.textContent = city_searchbar.value.toUpperCase();
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city_searchbar.value + '&appid=ebcd87836b6c19e70edd85b51e78eda3')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const { temp_min, temp_max, feels_like } = data.main;
                const { main, description } = data.weather[0];

                if (main == "Mist") {
                    svg.setAttribute('src', "img/mist.svg");
                    // document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?cs=srgb&dl=pexels-ian-beckley-2440061.jpg&fm=jpg")';
                } else if (main == "Clouds") {
                    svg.setAttribute('src', "img/cloudy.svg");
                } else if (main == "Rain") {
                    svg.setAttribute('src', "img/rainy.svg");
                } else {
                    svg.setAttribute('src', "img/sunny.svg");
                }
                air_status.textContent = main.toUpperCase() + " | " + description.toUpperCase();
                temp1.textContent = Math.round(temp_min - 273);
                temp2.textContent = Math.round(feels_like - 273);
                temp3.textContent = Math.round(temp_max - 273);
            })

        .catch(err => alert("Wrong city name!"));
    }

});