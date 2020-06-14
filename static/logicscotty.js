var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}


const API_KEY = "pk.eyJ1Ijoic2NvdHR5c21pdGhkcyIsImEiOiJja2I2eHRva24wMGN1MnZyZ3gybHZyNWQzIn0.FRNQrwYOv8n6WQPiorEfTw";

// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
// var myMap = L.map("map", {
//     center: [0, -70],
//     zoom: 3
//   });
  // var myMap1 = L.map("map1", {
  //   center: [0, -70],
  //   zoom: 3
  // });
  // var myMap2 = L.map("map2", {
  //   center: [0, -70],
  //   zoom: 3
  // });
//   var myMap3 = L.map("map3", {
//     center: [0, -70],
//     zoom: 3
//   });

//   var Ecuador = "static/data/Ecuador.json";
//   var datar = Ecuador[0]
//   var datamaps = d3.json(Ecuador)
  
//   // Adding a tile layer (the background map image) to our map
// //   // We use the addTo method to add objects to our map
// //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //     maxZoom: 18,
// //     id: 'mapbox/streets-v11',
// //     tileSize: 512,
// //     zoomOffset: -1,
// //     accessToken: API_KEY
// // }).addTo(myMap);

// // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //   maxZoom: 18,
// //   id: 'mapbox/streets-v11',
// //   tileSize: 512,
// //   zoomOffset: -1,
// //   accessToken: API_KEY
// // }).addTo(myMap1);
// // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //   maxZoom: 18,
// //   id: 'mapbox/streets-v11',
// //   tileSize: 512,
// //   zoomOffset: -1,
// //   accessToken: API_KEY
// // }).addTo(myMap2);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox/streets-v11',
//   tileSize: 512,
//   zoomOffset: -1,
//   accessToken: API_KEY
// // }).addTo(myMap3);

// d3.json(Ecuador, function(data) {
//   var longE = []
//   var latE = []
//   var idE = []
//   var userE = []
//   var timeE = []
//   var placeE = []
//   var datar = data.submissions
//     for (var i = 0; i < datar.length; i++) {
//     if(datar[i].id == null) {(console.log("hello"));}
//     else{(idE.push(datar[i].id));}
//     if(datar[i].checkin_longitude == null) {(console.log("hello"));}
//     else{(longE.push(datar[i].checkin_longitude));}
//     if(datar[i].checkin_latitude == null) {(console.log("hello"));}
//     else{(latE.push(datar[i].checkin_latitude));}
//     if(datar[i].checkin_fix_timestap == null) {(console.log("hello"));}
//     else{(timeE.push(datar[i].checkin_fix_timestamp));}
//     if(datar[i].manual_location_name == null) {(console.log("hello"));}
//     else{(placeE.push(datar[i].manual_location_name));}
//     if(datar[i].user_reference == null) {(console.log("hello"));}
//     else{(userE.push(datar[i].user_reference));}

//     }
//     var arrayll = []
//     for (var i = 0; i < 74; i++) {
//       if (latE[i] != null && longE[i] != null) {
//         arrayll.push(latE[i])
//         arrayll.push(longE[i]) 
//         console.log(arrayll)
//         // L.marker(arrayll, {
//         //   draggable: true,
//         // }).addTo(myMap1);
//         // L.marker(arrayll, {
//         //   draggable: true,
//         // }).addTo(myMap2);
//         L.marker(arrayll, {
//           draggable: true,
//         }).addTo(myMap3);}
//       else {(console.log("help"));}
    
//       }
//     })
// })