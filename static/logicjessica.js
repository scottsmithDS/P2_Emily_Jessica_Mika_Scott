// Load in geoJSON data
var geoData = "static/Data/worlddata.geojson";

var myMap2 = L.map("map2", {
  center: [37.09, -95.71],
  zoom: 3
});

// Adding tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
  }).addTo(myMap2);

var geojson;

var slider = d3.select("#myRange");
var year = d3.select("#demo").value();

// Grab data with d3
d3.json(geoData, function(data) {

  function filterData(d) {
    for (i=0; i<d.length; i++) {
        if (d.features[i]["properties"]["Indicator Name"] === "Forest area (% of land area)");
        return d;
      };
    };

  var forestData =filterData(data);

  // Create a new choropleth layer
  geojson = L.choropleth(forestData, {

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
      layer.bindPopup("Country Name: " + feature.properties["Country Name"] + "<br>Forest area (% of land area):<br>" +
        feature.properties.year);
    }
  }).addTo(myMap2);

  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Median Income</h1>" +
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