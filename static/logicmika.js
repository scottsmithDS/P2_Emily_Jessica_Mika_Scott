

function selectData(data,year){
    var results=[];
    for (var i=0; i<data.length; i++){
      if (data[i]['Indicator Name'] == 'CO2 emissions (metric tons per capita)'){
        results.push([data[i]['Lat'], data[i]['Long'], data[i][year]]);
      }
    }
    return results;
  }

  
  var jsonData = "static/Data/Untitled.json";
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
//   change layer but nothing above except for indicator name and if need change the 5 or 6 lines above. For css don't implement here ad directly to html of your map
          var heat = L.heatLayer(selectData(data,year), {radius: 50, minOpacity:1, blur: 60 }).addTo(myMap);
  
  
  
        });
  
  
  
  
  
  