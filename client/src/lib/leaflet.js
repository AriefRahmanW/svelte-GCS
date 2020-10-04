import L from 'leaflet'

let GCS_MAP

let data = []

let counter = 0, polygonMarker, marker = []
    
let DroneIcon = L.Icon.extend({
  options: {
    iconSize: [50, 50],
    popupAnchor: [0, -10]
  }
});
  
let droneIcon = new DroneIcon({iconUrl: "/assets/marker/drone.png"})

export function createMap(container){

    GCS_MAP = L.map(container).setView([-7.78301, 110.3573347], 13);

    // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    //     maxZoom: 18,
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    //         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    //         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     id: 'mapbox/streets-v11',
    //     tileSize: 512,
    //     zoomOffset: -1
    // }).addTo(GCS_MAP);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(GCS_MAP);
    
    let DroneIcon = L.Icon.extend({
      options: {
        iconSize: [50, 50],
        popupAnchor: [0, -10]
      }
    });

    droneIcon = new DroneIcon({iconUrl: "/assets/marker/drone.png"})
    
}


export function createMarker(location, index){

    marker.push(
      L.marker(location, {draggable: true, icon: droneIcon}).addTo(GCS_MAP)
    )

    data.push(location)

    marker[index].on('dragend', function (e) {

        data[index] = [marker[index].getLatLng().lat, marker[index].getLatLng().lng]

        marker[index].bindPopup(index === 0 ? "Home" : index.toString()).openPopup()

        if(data.length > 1){

          counter++

          if(counter > 1){

            GCS_MAP.removeLayer(polygonMarker)
        
          }

          polygonMarker = L.polygon(data).addTo(GCS_MAP)

        }
        
    })
}

export function showAllMarker(){

  for(let i = 0; i < data.length; i++){

    L.marker(data[i], {draggable: false, icon: droneIcon}).addTo(GCS_MAP)

  }

  polygonMarker = L.polygon(data).addTo(GCS_MAP)

}

export function getLocations(){

  return data

}

export function clearAllMarkers(){

  for(let i = 0; i < marker.length; i++){
    GCS_MAP.removeLayer(marker[i])

  }
  GCS_MAP.removeLayer(polygonMarker)
  data = []

}




