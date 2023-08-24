let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
    })
})

function success(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude

    mapboxgl.accessToken = ('pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA')

    var map = new mapboxgl.Map({
        container:"map",
        style:'mapbox://styles/mapbox/streets-v11',
        center:[0, 0],
        zoom:0,
    })

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions:{enableHighAccuracy: true},
            trackUserLocation: true,
        })
    )

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        "top-left"
    )

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapbox: mapboxgl
        }).on('result', function (e){
            destination = e.result.center
        })
    )

        map.on('click', function (e) {
            destination = e.lngLat;
        });
    }

var EffielTower = document.querySelector("#EffielTower")
var BigBen = document.querySelector("#BigBen")
var EmpireState = document.querySelector("#EmpireState")
var Giza = document.querySelector("#Giza")
var Pisa = document.querySelector("#Pisa")
var UnityStatue = document.querySelector("#Unity")
var BurjKalifa = document.querySelector("#Burj")
var SydneyHouse = document.querySelector("#OperaHouse")
var Ryugyoung = document.querySelector("#NorthKorea")


var marker1 = new mapboxgl.Marker({ element: EffielTower }).setLngLat([2.294481297763154, 48.858504187159966,]).addTo(map)
var marker2 = new mapboxgl.Marker({ element: BigBen }).setLngLat([-0.12461523253441183, 51.50079723117065]).addTo(map)
var marker3 = new mapboxgl.Marker({ element: EmpireState }).setLngLat([-73.9856536887414, 40.74854606150921]).addTo(map)
var marker4 = new mapboxgl.Marker({ element: Giza }).setLngLat([31.134240540448456, 29.979255602575726]).addTo(map)
var marker5 = new mapboxgl.Marker({ element: Pisa }).setLngLat([10.396591380104239, 43.72298940515471]).addTo(map)
var marker3 = new mapboxgl.Marker({ element: Unity }).setLngLat([73.71901915263975, 21.838267352872588]).addTo(map)
var marker6 = new mapboxgl.Marker({ element: BurjKalifa }).setLngLat([55.27431200596392, 25.19738137159979]).addTo(map)
var marker7 = new mapboxgl.Marker({ element: SydneyHouse }).setLngLat([151.21529669716202, -33.856641819777366]).addTo(map)
var marker8 = new mapboxgl.Marker({ element: Ryugyoung }).setLngLat([125.73082705780031, 39.036943785254664]).addTo(map)