import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { useStyles } from "./style.js";
import Grid from '@material-ui/core/Grid';
import CardsDistrictBcn from "../../components/component-district-card/index";
import MapBcn from "../../components/map-component/map.jsx";
import NavBar from "../../components/components-landingpage/navBar/index";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  let [district, updateDistricts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3001/infoBcn/districtBcn")
    //   .then((r) => r.json())
    //   .then((d) => updateDistricts(d))
    //   .catch((err) => err);

    async function fetchBcnDistrict() {
      let apiDistrict = await fetch(
        // "http://localhost:3001/infoBcn/districtBcn"
        "https://immosensing.herokuapp.com/infoBcn/districtBcn"
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
          <h1 className={classes.titlePageMap}>{t("map.title")}</h1>
          <MapBcn></MapBcn>
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <div className={classes.containerCardsDistrictos}>
            <ul className={classes.listCards}>
              {district.map((d) => (
                <li className={classes.listItem} key={d.di}>
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
