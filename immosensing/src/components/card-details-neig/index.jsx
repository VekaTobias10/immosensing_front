import React, { useEffect, useState } from "react";
import { useStyles } from "./style.js";
// import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import NavBar from "../components-landingpage/navBar/index";



function CardsDetailsBarrios(props) {
  const classes = useStyles();
  let { name } = useParams();

  let [eachBarrio, updateEachBarrio] = useState([]);
  const baseURL = "http://localhost:3001/static/img/";

  useEffect(() => {
    fetch(`http://localhost:3001/preferences/barrios/${name}`)
      .then((r) => r.json())
      .then((b) => updateEachBarrio(b))
      .catch((err) => err);
  }, []);

  return (
    <React.Fragment>
    <div className={classes.mainContainer}>
      <NavBar></NavBar>
      <div className={classes.root}>
        <Grid container spacing={1}  justifyContent="center" direction="row" alignItems="center">
          <Grid item xs={12} md={6} lg={5}>
          <img
              className={classes.photoBarrio}
              src={baseURL + eachBarrio?.img}
              alt="fotoBarrio"
            ></img>
            <div className={classes.containerText}>
            <h2>{eachBarrio?.name}</h2>
            <p className={classes.card}>{eachBarrio?.description_es}</p>
          
            {/* <Typography variant="body2" color="textSecondary">
                  <p>{props.barrios.neighborhood[i]?.description_es}</p>
                  </Typography> */}
             </div>
          </Grid>
        </Grid>
      </div>
      </div>
    </React.Fragment>
  );
}

export default CardsDetailsBarrios;
