

function getweather() {

    // assigning values to variables
    var city = document.getElementById('city').value;
    // checking if city is empty
    if (city.length == 0) {
        alert('please enter a city name');
        return;
    }
    // API key
    var key = "cc43ba69009c31161202dfcc15594f47";
    var weatherDiv = document.getElementById('weather');
    // fetching data from API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key)

        // converting data into json
        .then(response => {

            // checking if city is found or not
            if (!response.ok) {
                alert('city not found');
                throw new Error('City Not Found');
            }

            return response.json();
        })
        // displaying data
        .then(data => {
            console.log(data);
            var temp = Math.round(data.main.temp - 273);
            var desc = data.weather[0].description;
            var icon = data.weather[0].icon;
            weatherDiv.innerHTML = '<h2>' + city + '</h2><h1>' + temp + '°C</h1><p>' + desc + '</p><img src="http://openweathermap.org/img/w/' + icon + '.png">';
        })
        // error handling
        .catch(error => {
            console.error('Error:', error);
            weatherDiv.innerHTML = '<h2>City Not Found</h2>';
        });

}