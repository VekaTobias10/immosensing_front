import React from "react";
import "leaflet/dist/leaflet.css";
// import { useStyles } from "./style.js";
import MapBcn from "../../components/map component/map.jsx";
import NavBar from "../../components/components-landingpage/navBar/index";


function Dashboard() {
//   const classes = useStyles();


  return (
    <div>
      <NavBar></NavBar>
      <MapBcn></MapBcn>
    
    </div>
  );
}

export default Dashboard;
