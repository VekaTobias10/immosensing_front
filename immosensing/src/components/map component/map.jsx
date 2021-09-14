import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useStyles } from "./style.js";
import BcnBarriosData from "./lat-long-barrios-bcn.json";
import { useTranslation } from "react-i18next";


function MapBcn() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  const barcelona = [41.390205, 2.154007];
  const hortaGuinardo = [41.41849, 2.1677];
  // const santsMontjuic = [41.37263,2.1546];


  return (
    <div>
      <MapContainer
        className={classes.map}
        center={barcelona}
        zoom={13}
        scrollWheelZoom={false}
      >
        <GeoJSON key={BcnBarriosData} data={BcnBarriosData}></GeoJSON>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={hortaGuinardo} icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }>
          <Popup>
            Horta Guinardó <br /> 11 {t("map.neighborhood")} 
          </Popup>
        </Marker>
        {/* <Marker position={santsMontjuic} icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }>
          <Popup className={classes.popupStyle}>
            <em>Sants Montjuic</em> <br /> 
            <strong>8 {t("map.neighborhood")}</strong> <br/>
            <ul>
                <li>la Bordeta</li>
                <li>Hostafrancs</li>
                <li>La Marina de Puerto</li>
                <li>La Font de la Guatlla</li>
                <li>La Marina del Prat Vermell</li>
                <li>El Poble Sec</li>
                <li>Santos</li>
                <li>Sants-Badal</li>
            </ul>
          </Popup>
        </Marker> */}
      </MapContainer>
      {/* <button onClick={barcelonetaFilter}>Filtra</button> */}
    </div>
  );
}

export default MapBcn;
