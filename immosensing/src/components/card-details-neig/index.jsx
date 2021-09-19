import React,{useEffect,useState} from "react";
import { useStyles } from "./style.js";
// import { useTranslation } from "react-i18next";
import {useParams} from "react-router";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CardsDetailsBarrios(props) {
  const classes = useStyles();
  // const [t] = useTranslation("global");
let {name} = useParams();

let [eachBarrio, updateEachBarrio]=useState([]);
const baseURL = 'http://localhost:3001/static/img/';


  useEffect(() => {
    fetch(`http://localhost:3001/preferences/barrios/${name}`)
    .then((r) => r.json())
    .then((b) => updateEachBarrio(b))
    .catch((err) => err);
  
  }, []);
  


  return (
    <React.Fragment>
      <div className={classes.root}>
          <img src={baseURL + eachBarrio?.img} alt='fotoBarrio'></img>
      <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                  <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {eachBarrio?.name}
                  </Typography>
                      <Typography variant="body2" color="textSecondary">
                  {eachBarrio?.description_es}
                  </Typography>
                  </CardContent>
                  {/* <Typography variant="body2" color="textSecondary">
                  <p>{props.barrios.neighborhood[i]?.description_es}</p>
                  </Typography> */}
                </Card>
                </Grid>
      </Grid>
      </div>
    </React.Fragment>
  );
}

export default CardsDetailsBarrios;
