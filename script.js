//fetching the date from api based on my chosen locale
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Great%20Missenden/next4days?unitGroup=metric&key=JRQGFHWMLJJEMRQJ9Z6GXQ8GC&contentType=json", {
    "method": "GET",
    "headers": {
    }
})
    .then((response) => {
        console.log(response)
        return response.json()

    }).then((response) => {

    displayWeatherData(response); //need to define the function here
})


//function to display the data I want
function displayDayWeatherData(day) {

    // setting condition for the day to update image
    let weatherCondition = day.conditions;

    //setting suitable image to condition
    let sun = '<img src="sun.png" alt="sunny day" />'
    let partlyCloudy = '<img src="partlyCloudy.png" alt="cloudy day" />'
    let windy = '<img src="wind.png" alt="windy day" />'
    let snow = '<img src="snow.png" alt="snowy day" />'
    let thunderStorm = '<img src="thunderStorm.png" alt="stormy day" />'
    let cloudy = '<img src="cloudy.png" alt="cloudy day" />'
    let rain = '<img src="rain.png" alt="rainy day" />'

    //image variable to be set on each iteration using above variables
    let image

    //switch statement to check thorough condition in weatherCondition and set appropriate pic to image variable
    switch (weatherCondition) {
        case 'Partially cloudy':
            image = partlyCloudy
            break
        case 'Overcast':
            image = cloudy
            break
        case 'Clear':
            image = sun
            break
        case 'Rain':
            image = rain
            break
        case 'Wind':
            image = windy
            break
        case 'Thunder storms':
            image = thunderStorm
            break
        case 'Snow':
            image = snow
            break
        default:
            image = rain
    }

    //returning the card to be displayed pulling everything together (format for readability)
    return '<div class="dayWeatherCard">' +
                '<div class="cardImage">'
                    + image +
                '</div>' +
                    '<div class="cardData">'
                + '<p><b>Date: </b>'
                + day.datetime + '</p>'
                + '<p><b> Max Temp: </b>'
                + day.tempmax + '</p>'
                + '<p><b> Min Temp: </b>'
                + day.tempmin + '</p>'
                + '<p><b> Conditions: </b>'
                + day.conditions + '</p>'
                + ' <p><b>Description: </b>'
                + day.description + '</p></div></div>'
}


// function to display the data on the page
function displayWeatherData(response) {
    //variable definitions
    const location = response.resolvedAddress;
    const days = response.days;
    let h2 = document.querySelector('h2')
    let weatherList = document.querySelector('#weatherList')

    h2.textContent = location // using and displaying the resolved location here due to laziness
    console.log(days) // shows us the array of all days records

    //split up the days into objects
    days.forEach((day) => {
        console.log(day) //shows the objects for each day record
        //function call to display return
        weatherList.innerHTML += displayDayWeatherData(day)
    })
}





