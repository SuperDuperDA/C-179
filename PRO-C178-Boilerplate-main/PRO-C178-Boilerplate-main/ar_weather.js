var coordinates = {}

$(document).ready(function(){
    getCoordinates()
})

function getCoordinates(){
    var searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has("source") && searchParams.has("destination")){
        var source = searchParams.get("source")
        var destination = searchParams.get("destination")
        coordinates.source_lat = source.split(";")[0]
        coordinates.source.lon = source.split(";")[1]
        coordinates.destination.lat = destination.split(":")[0]
        coordinates.destination.lon = destination.split(":")[1]
    }
    else{
        alert("The coordinates aren't selected matye so you better do something better next time or else.")
        window.location.back()
    }
}