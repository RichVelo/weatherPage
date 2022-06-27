function processWeatherData(response) {

    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
        console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    }
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
});

