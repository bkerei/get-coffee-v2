import React from 'react'

const Map = () => {

    function initAutocomplete() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -41.28664, lng: 174.77557 },
            zoom: 13,
            mapTypeId: 'roadmap'
        })

        // Create the search box and link it to the UI element.
        // var input = document.getElementById('pac-input');
        // var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        // map.addListener('bounds_changed', function () {
        //   searchBox.setBounds(map.getBounds());
        // })

        markers = []

        // Listen for the event fired when the user selects a prediction and retrieve
        searchBox.addListener('places_changed', function () {
            console.log('How are you?')
            places = searchBox.getPlaces();
            if (places.length == 0) {
                return
            }
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null)
            });
            markers = [];
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };
                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));
                if (place.geometry.viewport) {
                    console.log('I good')
                    bounds.union(place.geometry.viewport);
                } else {
                    console.log('yeah you are')
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
        let anArray = [
            { lat: -41.296380, lon: 174.774990 }, //Raglan Roast
            { lat: -41.295910, lon: 174.773990 },//Fidels
            { lat: -41.297190, lon: 174.773350 },//Marthas Pantry
            { lat: -41.291520, lon: 174.776700 },//Random location
            { lat: -41.295700, lon: 174.772736 },//Emporio Coffee
            { lat: -41.296830, lon: 174.773930 }//
        ]
        //Adds all the markers in anArray
        anArray.forEach((item) => {
            console.log('what you mena bro')
            markerPosition = new google.maps.LatLng(item.lat, item.lon);
            marker = new google.maps.Marker({ position: markerPosition });
            marker.setMap(map)
        })
        //Comment out see what happens
        var rad = function (x) {
            console.log('you wannafight about it')
            return x * Math.PI / 180
        };
        measureTool = new MeasureTool(map, {
            showSegmentLength: true,
            tooltip: true,
            unit: MeasureTool.UnitTypeId.METRIC // metric, imperial, or nautical
        });
    }

    return (
        <div>
            <input id="pac-input" class="controls" type="text" placeholder="Where you at?" style="width: 200px; height: 50px;" />
            <div id="map" style="width: 500px; height:900px; grid-area: sidebar;"></div>


        </div >
    )
}

export default Map