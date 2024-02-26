import React from "react";
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from 'leaflet'
function Routing() {
    const map = useMap();
    map.addEventListener('click',(e)=>{
        
    })
    useEffect(() => {
      if (!map) return;
      var marker1=L.marker([22.450123811656997, 73.35509881510254]).addTo(map)
      var marker2=L.marker([22.28471532077385, 73.23456433918676]).addTo(map)
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(22.450123811656997, 73.35509881510254), L.latLng(22.28471532077385, 73.23456433918676)],
        routeWhileDragging: true
      })
      .addTo(map);
      routingControl.on('routeselected',function(e){
        
        var allPositions = routingControl._selectedRoute.coordinates;
        console.log(allPositions)
        allPositions.forEach(function(coord,index){
            setTimeout(function () {
                marker1.setLatLng([coord.lat, coord.lng]);
                 // Make the taxi icon visible
            }, 200 * index)
        })
      })
      return () => map.removeControl(routingControl);
    }, [map]);
  
    // return null;

}
export default Routing;