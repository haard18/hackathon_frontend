import React, { useEffect, useState, useRef, useMap } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  Marker,
  Popup
} from "react-leaflet";
import Routing from "./routing";

import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'


// Base map tile:
const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = () => {
  //Set up a useState hook for our map instance:
  const [map, setMap] = useState(null);
  
  return (
    <>
    <div className="map" style={{height:"50%",width:"50%",color:"black"}}>
      <MapContainer
      
        center={[22.450679117626724, 73.35509879766879]}
        zoom={10}
        zoomControl={false}
        style={{ height: "51vh", width: "100vh", padding: 0}}

        // Set the map instance to state when ready:
        whenCreated={map => setMap(map)}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        
        
        <Routing />
      </MapContainer>
      </div>
    </>
  );

  };
export default Map;
