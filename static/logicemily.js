
  
        var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
        // Define streetmap layers
        var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "mapbox/streets-v11",
            accessToken: API_KEY
          });
        // Create our map, giving it the streetmap and earthquakes layers to display on load
        var myMap3 = L.map("map3", {
            center: [
              37.09, -95.71
            ],
            zoom: 5,
          });
          streetmap.addTo(myMap3);
          d3.json(queryUrl, function(data) {
            // Once we get a response, send the data.features object to the createFeatures function
            console.log(data);
            function style(feature){
                return{
                radius: getRadius(feature.properties.mag),
                fillColor: getColor(feature.properties.mag),
                color: 'black',
                weight: 0.5,
                opacity: 1,
                fillOpacity: 0.8
            };
        }
        function getColor(magnitude){
            switch(true){
                case magnitude > 5 :
                    return 'red';
                case magnitude > 4 :
                    return 'orange';
                case magnitude > 3 :
                    return 'pink';
                case magnitude > 2 :
                    return 'yellow';
                case magnitude >1 :
                    return 'green';
                default :
                    return 'blue';
            }
        }
        function getRadius(magnitude){
            return magnitude*5;
        }
        /* reference https://leafletjs.com/examples/geojson/ */
        L.geoJSON(data, {
            pointToLayer: function (feature, latnlng) {
                return L.circleMarker(latnlng);
            },
            style:style,
            onEachFeature:function(feature,layer){
                layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
            }
        }).addTo(myMap3);
      })