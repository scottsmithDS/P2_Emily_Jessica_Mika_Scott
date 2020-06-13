function selectData(data,year){
  var results=[];
    for (var i=0; i<data.length; i++){
      if (data[i]['Indicator Name'] == 'CO2 emissions (metric tons per capita)'){
        results.push([data[i]['Lat'], data[i]['Long'], data[i][year]]);
      };
    };
  return results;
};

  
var jsonData = "static/Data/Untitled.json";
console.log(jsonData);
  
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 10,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
});
  
// Create our map, giving it the streetmap and Coe levels layers to display on load
var myMap2 = L.map("map2", {
    center: [37.09, -95.71],
    zoom: 3,
});
  
streetmap.addTo(myMap2); 

var year='2014';

d3.json(jsonData, function(data) {
  console.log(data);
  console.log(selectData(data,year));
  
  var choropleth = L.choropleth(selectData(data, year), {
    // Define what  property in the features to use
    valueProperty: year,
    // Set color scale
    scale: ["#ffffb2", "#b10026"],
    // Number of breaks in step range
    steps: 10,
    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Country Name: " + feature.countryName + "<br>Forest area (% of land area):<br>" +
        "$" + feature.properties["1993"]);
      }
    }).addTo(myMap2);
  });
  
  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Forest Area (% of Land Area)</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap2);
});