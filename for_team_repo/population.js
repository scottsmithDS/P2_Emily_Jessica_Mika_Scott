/// Store our data site inside queryUrl
function selectData(data,year){
    var results=[];
    for (var i=0; i<data.length; i++){
      if (data[i]['Indicator Name'] == 'Population, total'){
        //results.push([data[i]['Lat'], data[i]['Long'], data[i][year]]);
        results.push({"type": "Feature",
                    "population": data[i][year],
                    "Country Name" : data[i]['Country Name'],
                    "geometry": {
                        "type": "Point",
                        "coordinates": 
                            [
                            data[i]['Long'],
                            data[i]['Lat']
                            ]
                      },
                    });
      }
    }
    return results;
  }

    // Define streetmap layers
    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });
    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
        center: [
          37.09, -95.71
        ],
        zoom: 5,
      });

      streetmap.addTo(myMap);
      d3.json('Untitled.geojson', function(data) {
        // Once we get a response, send the data.features object to the createFeatures function
        console.log(data);

        function style(feature){
            var styling = {
            radius: getRadius(feature.population),
            fillColor: getColor(feature.population),
            color: 'black',
            weight: 0.5,
            opacity: 1,
            fillOpacity: 0.8
            };
            console.log(feature,styling);
            return styling;
    }
    function getColor(population){
        switch(true){
            case population > 90000000:
                return '#a50026';
            case population > 80000000 :
                return '#d73027';
            case population > 70000000 :
                return '#f46d43';
            case population > 60000000 :
                return '#fdae61';
            case population > 50000000 :
                return '#fee090';
            case population > 40000000 :
                return '#ffffbf';
            case population > 30000000 :
                return '#e0f3f8';
            case population > 20000000 :
                return '#abd9e9';
            case population > 10000000 :
                return '#74add1';
            case population > 1000000 :
                return '#4575b4';
            case population >100000 :
               return '#313695';
            default :
                return '#ffffff';
        }
    }

    function getRadius(population){
        return Math.log10(population)*3.6;
    }

    year='2014';
    console.log(selectData(data,year));
    /* reference https://leafletjs.com/examples/geojson/ */
    L.geoJSON(selectData(data,year), {
        pointToLayer: function (feature, latnlng) {
            return L.circleMarker(latnlng);
        },
        style:style,
        onEachFeature:function(feature,layer){
            layer.bindPopup(feature['Country Name'] + ':' + "Population: " + feature.population);
        }
    }).addTo(myMap);

    
    /* Reference https://leafletjs.com/examples/choropleth/ */
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        levels = [0, 100000, 100000, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000, 90000000];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < levels.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(levels[i] + 1) + '"></i> ' +
            levels[i] + (levels[i + 1] ? '&ndash;' + levels[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);

      });