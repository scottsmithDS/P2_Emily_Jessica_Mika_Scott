// Store our data 
// "Indicator Name": "CO2 emissions (metric tons per capita)"
//"Lat": 12.52111,
//"Long": -69.968338, 
//"1993": 22.001,
//Returns:
// for specific year,  [
//	[50.5, 30.5, 0.2], // lat, lng, intensity
//	[50.6, 30.4, 0.5],
//	...
//]

function selectData(data,year){
  var results=[];
  for (var i=0; i<data.length; i++){
    if (data[i]['Indicator Name'] == 'CO2 emissions (metric tons per capita)'){
      results.push([data[i]['Lat'], data[i]['Long'], data[i][year]]);
    }
  }
  return results;
}

var jsonData = "Untitled.geojson";
console.log(jsonData);


    var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 10,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    });

    // Create our map, giving it the streetmap and Coe levels layers to display on load
    var myMap = L.map("map", {
        center: [
          37.09, -95.71
        ],
        zoom: 3,
      });

      streetmap.addTo(myMap); 
      var year='2014';
    d3.json(jsonData, function(data) {
        console.log(data);
        console.log(selectData(data,year));

        var heat = L.heatLayer(selectData(data,year), {radius: 50, minOpacity:1, blur: 70 }).addTo(myMap);



      });





