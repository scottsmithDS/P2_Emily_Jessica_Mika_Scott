

function selectData1(data,year){
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


        // var year='1993';


        
      d3.json(jsonData, function(data) {
        var year = "1993"
//   change layer but nothing above except for indicator name and if need change the 5 or 6 lines above. For css don't implement here ad directly to html of your map
           var heat = L.heatLayer(selectData1(data,year), {radius: 50, minOpacity:1, blur: 60 })
          heat.addTo(myMap);
  
  
  
        

       
      });
      var slider = document.getElementById("myRange");
      slider.oninput = function() {
          
        myMap.eachLayer(function(layer){
          myMap.removeLayer(layer);
      });
      year2 = slider.value
      streetmap.addTo(myMap)
      d3.json(jsonData, function(data) {

        //   change layer but nothing above except for indicator name and if need change the 5 or 6 lines above. For css don't implement here ad directly to html of your map

                  var heat2 = L.heatLayer(selectData1(data,year2), {radius: 50, minOpacity:1, blur: 60 })
                  heat2.addTo(myMap);
          
          
          
                });
              
    }
  
  
  
 
  


            
        