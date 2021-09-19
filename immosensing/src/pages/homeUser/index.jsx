import React from "react";
import "leaflet/dist/leaflet.css";
// import { useStyles } from "./style.js";
import NavBar from "../../components/components-landingpage/navBar/index";
import BarrioDescription from "../barrios-list/index";


function HomeUser() {
  // const classes = useStyles();

  //   useEffect(() => {
  //   fetch("http://localhost:3001/infoBcn/districtBcn")
  //     .then((r) => r.json())
  //     .then((d) => {updateDistricts(d)
  //     return fetch('http://localhost:3001/preferences/barriosBcn')
  //     })
  //     .then((r) => r.json())
  //     .then((b)=> updateBarrios(b))
  //     .catch(err => err)
  // }, []);

  return (
    <div>
      <NavBar></NavBar>
      <BarrioDescription></BarrioDescription>
     
      {/* <p>{district[0]?.district}</p>
        <p>{district[0]?.description_es}</p> */}
      {/* <p>{barrios[0]?.barrio}</p> */}
      {/* <h2>{props.district?.district}</h2>
      <p>{props.district?.description_es}</p> */}
    </div>
  );
}

// array de barrios solo debe generar 3 elementos aleatorios

export default HomeUser;
