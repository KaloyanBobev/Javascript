window.onload = function () {

    var map,
        watchId=null,
        ourCoords = {
        latitude: -42.666667,
        longitude: 23.30000
    };

    if (navigator.geolocation) {
        var watchBtn = document.getElementById('watch');
        watchBtn.onclick = watchLocation;
        var clearWatcthBtn = document.getElementById('clearWatch');
        clearWatcthBtn.onclick = clearWatch;
    } else {
        alert('Oops,no geolocation support');
    }

    function displayLocation(position) {
        var latitude = position.coords.latitude,
            longitude = position.coords.longitude,
            div = document.getElementById('location');
        div.innerHTML = ('You are at Latitude: ' + latitude + ', Longitude: ' + longitude);
        div.innerHTML += ' (with ' + position.coords.accuracy + ' meters accuracy)';
        var km = computeDistance(position.coords, ourCoords),
            distance = document.getElementById('distance');
        distance.innerHTML = 'You are ' + km + ' km from WickedlySmart HQ';

        if (map == null) {
            showMap(position.coords);
        }
    }

    function displayError(error) {
        var errorType = {
            0: 'unknown error',
            1: 'Permition denied by user',
            2: 'position is not availble',
            3: 'request timed out'
        };
        var errorMsg = errorType[error.code];
        if (error.code == 0 || error.code == 2) {
            errorMsg = errorMsg + ' ' + error.massage;
        }
        var div = document.getElementById('location');
        div.innerHTML = errorMsg;
    }

    function computeDistance(startCoords, destCoords) {
        var startLatRads = degreesToRadians(startCoords.latitude),
            startLongRads = degreesToRadians(startCoords.longitude),
            destLatRads = degreesToRadians(destCoords.latitude),
            destLongRads = degreesToRadians(destCoords.longitude),
            earthRadius = 6371,
            distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) +
            Math.cos(startLongRads - destLongRads)) * earthRadius;

        return distance;
    }

    function degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    function showMap(coords) {
        var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
        var mapOptions = {
            zoom: 15,
            center: googleLatAndLong,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, mapOptions);
        var title = 'Your location',
        content = 'You are here: ' + coords.latitude + ', ' + coords.longitude;
        addMarker(map, googleLatAndLong, title, content);
    }

    function addMarker(map, latlong, title, content) {
        var markerOptions = {
            position: latlong,
            map: map,
            title: title,
            clickable: true
        }

        var marker = new google.maps.Marker(markerOptions);

        var infoWindowOptions = {
            content: content,
            position: latlong
        }

        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map);
        });
    }

    function watchLocation() {
        watchId = navigator.geolocation.watchPosition(displayLocation,
        displayError);
    }

    function clearWatch() {
        if (watchId) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
    }

}