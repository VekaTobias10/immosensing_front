import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useStyles } from "./style.js";
import BcnBarriosData from "./lat-long-barrios-bcn.json";

// multiselect
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import Chip from "@material-ui/core/Chip";

// import { useTranslation } from "react-i18next";
// import { useSessionBcnOpenData } from "../../hooks/customHook";

function MapBcn() {
  const classes = useStyles();
  // const [t] = useTranslation("global");
  const barcelona = [41.390205, 2.154007];

  let [comisarias, updateComisarias] = useState([]);
  let [atencionPrimaria, updateAtencionPrimaria] = useState([]);
  let [consulados, updateConsulados] = useState([]);
  // let [recreoPerro, updateRecreoPerros] = useState([]);



  useEffect(() => {
    fetch(
      "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=40ab2784-3555-466a-996c-55f3d900c0e5&fields=geo_epgs_4326_y,geo_epgs_4326_x,name"
    )
      .then((r) => r.json())
      .then((c) => updateComisarias(c.result.records))
      .catch((err) => err);

    fetch(
      "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=9e135848-eb0a-4bc5-8e60-de558213b3ed&fields=geo_epgs_4326_y,geo_epgs_4326_x,name"
    )
      .then((r) => r.json())
      .then((a) => updateAtencionPrimaria(a.result.records))
      .catch((err) => err);

    fetch(
      "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=873e7692-cae0-4c7d-ac44-5cbc99843b39&fields=geo_epgs_4326_y,geo_epgs_4326_x,name"
    )
      .then((r) => r.json())
      .then((c) => updateConsulados(c.result.records))
      .catch((err) => err);

    // fetch(
    //   "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=fd4415e3-b7dc-4173-bb88-685401de191f&fields=geo_epgs_4326_y,geo_epgs_4326_x,name"
    // )
    //   .then((r) => r.json())
    //   .then((p) => updateRecreoPerros(p.result.records))
    //   .catch((err) => err);
  }, []);

  return (
    <div>

      <MapContainer
        className={classes.map}
        center={barcelona}
        zoom={12}
        scrollWheelZoom={false}
      >
        <GeoJSON key={BcnBarriosData} data={BcnBarriosData}></GeoJSON>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {comisarias.map((c, i) => (
          <Marker
            key={i}
            position={[c.geo_epgs_4326_x, c.geo_epgs_4326_y]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{c.name}</Popup>
          </Marker>
        ))}

        {atencionPrimaria.map((a, i) => (
          <Marker
            key={i}
            position={[a.geo_epgs_4326_x, a.geo_epgs_4326_y]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{a.name}</Popup>
          </Marker>
        ))}

        {consulados.map((c, i) => (
          <Marker
            key={i}
            position={[c.geo_epgs_4326_x, c.geo_epgs_4326_y]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{c.name}</Popup>
          </Marker>
        ))}

        {/* {recreoPerro.map((p,i) => (
        <Marker
          key={i}
          position={[p.geo_epgs_4326_x,p.result.geo_epgs_4326_y]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
           {p.name}
          </Popup>
        </Marker>
        ))} */}
      </MapContainer>
    </div>
  );
}

export default MapBcn;
