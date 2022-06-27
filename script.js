function processWeatherData(response) {

    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
        console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    }
}

function displayWeatherData(response) {
    var location = response.resolvedAddress;
    var days = response.days;

    let day = JSON.stringify(days, null, 4)

    let h2 = document.querySelector('h2')
    let h3 = document.querySelector('h3')


    h2.textContent += location
    h3.textContent += "datetime:" + day.datetime
}





fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Great%20Missenden?unitGroup=metric&key=JRQGFHWMLJJEMRQJ9Z6GXQ8GC&contentType=json", {
    "method": "GET",
    "headers": {
    }
})
    .then((response) => {
        console.log(response)
        return response.json()

    }).then((response) => {
    processWeatherData(response);
    displayWeatherData(response);
});