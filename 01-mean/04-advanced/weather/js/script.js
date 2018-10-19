$(document).ready(function(){
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    // let cityId = "5809844";
    const apiKey = "35ed712f5f8848d1811811c457093d67";

    //save searched city in local storage before anything else
    document.getElementById('button').onclick = function() {
        localStorage.setItem('last_city', document.getElementById('city').value);
    };
    const last_city = localStorage.getItem('last_city');

    //this clears local storage to start fresh
    document.getElementById('clear').onclick = function() {
        localStorage.clear();
        
    };

    if (localStorage.length === 0 || last_city === "") {
        $('.weather-display').append("Please enter name of a city to get weather report");
        return false;
    
    } else {
        // $('form').submit(function(){
            $.get(baseUrl + "q=" + last_city + '&units=imperial&APPID=' + apiKey, function(response) {
                for(var i = 0; i < response.weather.length; i++){
                    var weatherStr = "";
                    weatherStr += "<ul>";
                    weatherStr += "<li>"+response.weather[i].description+"</li>"
                    weatherStr += "</ul>";  // weatherStr was wea_str variable name
                }
                let htmlStr = `
                    <div id="wea_data">
                        <h1>${response.name},</h1>
                        <h2>${response.sys.country}</h2>
                        <p>${ weatherStr }</p>
                        <table class="table">
                        <tr>
                            <th></th>
                            <th scope="col">Current</th>
                            <th scope="col">Max</th>
                            <th scope="col">Min</th>
                        </tr>
                        <tr>
                            <th scope="row">Temperature</th>
                            <td>${response.main.temp}&deg;F</td>
                            <td>${response.main.temp_max}&deg;F</td>
                            <td>${response.main.temp_min}&deg;F</td>
                        </tr>
                        <tr>
                            <th scope="row">Wind speed</th>
                            <td>${response.wind.speed} miles/hr</td>
                        </tr>
                        <tr>
                            <th scope="row">Humidity</th>
                            <td>${response.main.humidity}%</td>
                        </tr>
                    </table>
                </div>
                `
                $('.weather-display').append(htmlStr);
                // console.log(response);
            }, 'json');
        // });
    }
    return false;

});


