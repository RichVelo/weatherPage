//fetching the date from api based on my chosen locale
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Great%20Missenden?unitGroup=metric&key=JRQGFHWMLJJEMRQJ9Z6GXQ8GC&contentType=json", {
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
    return '<ul>' + 'Date: ' + day.datetime + ' Max Temp: ' + day.tempmax + ' Min Temp: ' + day.tempmin + ' Conditions: ' + day.conditions + ' Description: ' + day.description + '</ul>'
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





