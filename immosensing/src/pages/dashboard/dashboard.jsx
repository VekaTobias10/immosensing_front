import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { useStyles } from "./style.js";
import Grid from '@material-ui/core/Grid';
import CardsDistrictBcn from "../../components/component-district-card/index";
import MapBcn from "../../components/map-component/map.jsx";
import NavBar from "../../components/components-landingpage/navBar/index";

function Dashboard() {
  const classes = useStyles();
  let [district, updateDistricts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/infoBcn/districtBcn")
    //   .then((r) => r.json())
    //   .then((d) => updateDistricts(d))
    //   .catch((err) => err);

    async function fetchBcnDistrict() {
      let apiDistrict = await fetch(
        "http://localhost:3001/infoBcn/districtBcn"
      );
      apiDistrict = await apiDistrict.json();
      updateDistricts(apiDistrict);
    }
      fetchBcnDistrict();

  }, []);

  return (
    <div>
      <NavBar></NavBar>

      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
          <h1 className={classes.titlePageMap}>Estos son los puntos de interés de Barcelona</h1>
          <MapBcn></MapBcn>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={classes.containerCardsDistrictos}>
            <ul className={classes.listCards}>
              {district.map((d) => (
                <li className={classes.listItem} key={d.id}>
                  <CardsDistrictBcn district={d}></CardsDistrictBcn>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
