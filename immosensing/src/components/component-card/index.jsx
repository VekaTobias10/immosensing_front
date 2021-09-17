import React from "react";
import { useStyles } from "./style.js";
// import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function CardsInfoBcn(props) {
  const classes = useStyles();
  // const [t] = useTranslation("global");
  return (
    <React.Fragment>
      <div  className={classes.containerBarrios}>
      <div className={classes.root}>
      <Grid container direction="row" justifyContent="center" spacing={2}>
            {props.barrios.neighborhood.map((v,i,a) => (
                <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                  <CardContent>
                  <Typography variant="body2" color="textSecondary">
                  <h2>{props.barrios.neighborhood[i]?.nameBarrio}</h2>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  <p>{props.barrios.neighborhood[i]?.description_es}</p>
                  </Typography>
                  
                  </CardContent>
                </Card>
                </Grid>
            ))}
      </Grid>
      </div>
      </div>
    </React.Fragment>
  );
}

export default CardsInfoBcn;
