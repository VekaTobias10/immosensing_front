import React from "react";
// import React,{useEffect, useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup,GeoJSON } from "react-leaflet";
// import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useStyles } from "./style.js";
import BcnBarriosData from './lat-long-barrios-bcn.json';

function MapBcn() {
    const classes = useStyles();
    // const mapRef = useRef();

    // useEffect(()=>{
    //     const {current={}}= mapRef;
    //     const {leafletElement: map} = current;
    //     if (!map) return;
    //     console.log(map);
    //     const BarriosGeoJson = new L.GeoJSON(BcnBarriosData);

    //     BarriosGeoJson.addTo(map);
    // },[]);

    return (
      <div>
        <MapContainer
          className={classes.map}
          center={[41.390205, 2.154007]}
          zoom={13}
          scrollWheelZoom={false}
        //   ref={mapRef}
        >
         <GeoJSON key={BcnBarriosData} data={BcnBarriosData}></GeoJSON>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[51.505, -0.09]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
  
  export default MapBcn;
  