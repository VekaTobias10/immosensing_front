import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import hospitalIconMarker from '../../assets/img/icon-marker/hospital-marker.png';
import consuladoIconMarker from '../../assets/img/icon-marker/consulado-marker.png';
import parkingIconMarker from '../../assets/img/icon-marker/parking-marker.png';
import policeIconMarker from '../../assets/img/icon-marker/police-marker.png';
import { Icon } from "leaflet";
import { useStyles } from "./style.js";
import BcnBarriosData from "./lat-long-barrios-bcn.json";

// multiselect
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";

// import { useTranslation } from "react-i18next";
// import { useSessionBcnOpenData } from "../../hooks/customHook";

function MapBcn() {
  const classes = useStyles();
  // const [t] = useTranslation("global");
  const barcelona = [41.390205, 2.154007];

  let [comisarias, updateComisarias] = useState([]);
  let [atencionPrimaria, updateAtencionPrimaria] = useState([]);
  let [consulados, updateConsulados] = useState([]);
  let [aparcamientos, updateAparcamientos] = useState([]);
  let [bibliotecas, updateBibliotecas] = useState([]);
  let [espaciosInfantiles, updateEspaciosInfantiles] = useState([]);
  // let [parquesYJardines, updateParquesYJardines] = useState([]);
  let [CinesYTeatros, updateCinesYTeatros] = useState([]);
  // let [hoteles, updateHoteles] = useState([]);

  //Multiselect
  const [servicios, setServicios] = React.useState([]);
  const names = [
    "Comisarias",
    "Atención primaria",
    "Consulados",
    "Aparcamientos",
    "Bibliotecas",
    "Espacios Infantiles",
    // "Parques y Jardines",
    "Cines y Teatros",
  ];

  const handleChange = (event) => {
    setServicios(event.target.value);

  };

console.log(names);
  // async function fetchMyAPI() {
  //   let response = await fetch('api/data')
  //   response = await response.json()
  //   dataSet(response)
  // }

  // fetchMyAPI()

  useEffect(() => {


  let controller = new AbortController();


    async function fetchBcnData() {
      //Comisarias
      try{
      let apiComisarias = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=40ab2784-3555-466a-996c-55f3d900c0e5&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiComisarias = await apiComisarias.json();
      updateComisarias(apiComisarias.result?.records);
      console.log('api comisarias', apiComisarias);
      }catch (error) {
        console.log("error", error);
      }
      
      try{
      //Hospitales
      let apiHospitales = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=9e135848-eb0a-4bc5-8e60-de558213b3ed&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiHospitales = await apiHospitales.json();
      updateAtencionPrimaria(apiHospitales.result?.records);
      }catch (error) {
        console.log("error", error);
      }

      try{
      //Consulados
      let apiConsulados = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=873e7692-cae0-4c7d-ac44-5cbc99843b39&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiConsulados = await apiConsulados.json();
      updateConsulados(apiConsulados.result?.records);
      }catch (error) {
        console.log("error", error);
      }

      try{
      //Aparcamientos
      let apiAparcamientos = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=8104b9b9-217e-4c7d-b323-c7b4419d2800&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiAparcamientos = await apiAparcamientos.json();
      updateAparcamientos(apiAparcamientos.result?.records);
      }catch (error) {
        console.log("error", error);
      }

      try{
      //Bibliotecas
      let apiBibliotecas = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=d4803f9b-5f01-48d5-aeef-4ebbd76c5fd7&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiBibliotecas = await apiBibliotecas.json();
      updateBibliotecas(apiBibliotecas.result?.records);
      }catch (error) {
        console.log("error", error);
      }

      try{
      //Espacio infantiles
      let apiEspaciosInfantiles = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=5a331131-fecb-40dc-89ce-d8d6e680cf80&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiEspaciosInfantiles = await apiEspaciosInfantiles.json();
      updateEspaciosInfantiles(apiEspaciosInfantiles.result?.records);
      }catch (error) {
        console.log("error", error);
      }

      // try{
      // //  Parques y jardines
      // let apiParquesYJardines = await fetch(
      //   "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=b64d32a8-aea5-47a8-9826-479b211f5d46&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
      //     signal: controller.signal
      //   }
      // );
      // apiParquesYJardines = await apiParquesYJardines.json();
      // updateParquesYJardines(apiParquesYJardines.result?.records);
      // console.log(apiParquesYJardines);
      // }catch (error) {
      //   console.log("error", error);
      // }

      try{
      let apiCinesYTeatros = await fetch(
        "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=0f706441-b9d8-47c9-9e71-ced453810a72&fields=geo_epgs_4326_y,geo_epgs_4326_x,name" , {
          signal: controller.signal
        }
      );
      apiCinesYTeatros = await apiCinesYTeatros.json();
      updateCinesYTeatros(apiCinesYTeatros.result?.records);
    }catch (error) {
      console.log("error", error);
    }
  }
    

    fetchBcnData();
    
    return function cleanup() {
      console.log('I am in cleanup function');
      controller.abort();
    };

    // fetch(
    //   "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?resource_id=9bccce1b-0b9d-4cc6-94a7-459cb99450de&fields=geo_epgs_4326_y,geo_epgs_4326_x,name"
    // )
    //   .then((r) => r.json())
    //   .then((p) => {
    //     updateHoteles(p.result.records);
    //     return fetch(
    //       "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search?fields=geo_epgs_4326_y%2Cgeo_epgs_4326_x%2Cname&offset=100&resource_id=9bccce1b-0b9d-4cc6-94a7-459cb99450de"
    //     );
    //   })
    //   .then((r) => r.json())
    //   .then((h) => updateHoteles((hotels) => hotels.concat(h.result.records)))
    //   .catch((err) => err);
  }, []);

  return (
    <div>
      <div className={classes.containerPrincipal}>
      {/* multiselect */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Escoja el servicio</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={servicios}
          name="seleccion"
          onChange={handleChange}
          input={<Input id="select-multiple-chip" type='text' />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected?.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {names?.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <MapContainer
        className={classes.map}
        center={barcelona}
        zoom={14}
        scrollWheelZoom={false}
      >
        <GeoJSON key={BcnBarriosData} data={BcnBarriosData}></GeoJSON>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {servicios.length === 0 || servicios?.some((s) => s === "Comisarias")
          ? comisarias && comisarias?.map((c, i) => (
              <Marker
                key={i}
                position={[c.geo_epgs_4326_x, c.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: policeIconMarker,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{c.name[0]}</Popup>
              </Marker>
            ))
          : ""}

        {servicios?.length === 0 ||
        servicios?.some((s) => s === "Atención primaria")
          ? atencionPrimaria && atencionPrimaria?.map((a, i) => (
              <Marker
                key={i}
                position={[a.geo_epgs_4326_x, a.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: hospitalIconMarker,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{a.name[0]}</Popup>
              </Marker>
            ))
          : ""}

        {servicios.length === 0 || servicios?.some((s) => s === "Consulados")
          ? consulados && consulados?.map((c, i) => (
              <Marker
                key={i}
                position={[c.geo_epgs_4326_x, c.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: consuladoIconMarker,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{c.name[0]}</Popup>
              </Marker>
            ))
          : ""}

        {servicios.length === 0 || servicios?.some((s) => s === "Aparcamientos")
          ? aparcamientos && aparcamientos?.map((a, i) => (
              <Marker
                key={i}
                position={[a.geo_epgs_4326_x, a.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: parkingIconMarker,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{a.name[0]}</Popup>
              </Marker>
            ))
          : ""}

        {servicios.length === 0 || servicios?.some((s) => s === "Bibliotecas")
          ? bibliotecas && bibliotecas?.map((a, i) => (
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
                <Popup>{a.name[0]}</Popup>
              </Marker>
            ))
          : ""}

        {servicios.length === 0 ||
        servicios?.some((s) => s === "Espacios Infantiles")
          ? espaciosInfantiles && espaciosInfantiles?.map((e, i) => (
              <Marker
                key={i}
                position={[e.geo_epgs_4326_x, e.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{e.name[0]}</Popup>
              </Marker>
            ))
          : ""}
{/* 
        {servicios.length === 0 ||
        servicios?.some((s) => s === "Parques y Jardines")
          ? parquesYJardines && parquesYJardines?.map((p, i) => (
              <Marker
                key={i}
                position={[p.geo_epgs_4326_x, p.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{p.name[0]}</Popup>
              </Marker>
            ))
          : ""} */}

        {servicios.length === 0 ||
        servicios?.some((s) => s === "Cines y Teatros")
          ? CinesYTeatros && CinesYTeatros?.map((t, i) => (
              <Marker
                key={i}
                position={[t.geo_epgs_4326_x, t.geo_epgs_4326_y]}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>{t.name[0]}</Popup>
              </Marker>
            ))
          : ""}

      </MapContainer>
    </div>
    </div>
  );
}

export default MapBcn;

/**1- Cambiar el nombre a la variable del array de elementos seleccionados
2- Si el array de seleccionados esta vacio, pintas todos tus arrays
3- Si no, solo pintas los arrays de markers cuyo nombre se encuentra en al lista de seleccionados, es decir si selecciono solo "comisarias", el array de atencionPrimaria no se debería pintar

Solo pinto comisarias si el array de seleccionados está vacio o si en el array de seleccionados existe "Comisarias"
Solo pinto atencionPrimaria si el array de seleccionados está vacio o si en el array de seleccionados existe "Atención Primaria" */
