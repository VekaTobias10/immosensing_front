import React from "react";
import "leaflet/dist/leaflet.css";
// import { useStyles } from "./style.js";
import MapBcn from "../../components/map component/map.jsx";


function Dashboard() {
//   const classes = useStyles();
  return (
    <div>
      <MapBcn></MapBcn>
    </div>
  );
}

export default Dashboard;
