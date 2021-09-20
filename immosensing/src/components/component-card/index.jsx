import React from "react";
import { useStyles } from "./style.js";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

function CardsInfoBcn(props) {
  const classes = useStyles();
  const [t] = useTranslation("global");
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container direction="row" spacing={2}>
          {/* {props.barrios.map((v,i,a) => ( */}
          <Grid direction="row" item xs={12} md={6} lg={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography color="textSecondary">
                  <Link
                    className={classes.linkBarrio}
                    to={`preferences/barrios/${props.barrios?.name}`}
                  >
                    <h2>{props.barrios?.name}</h2>
                  </Link>
                </Typography>
                <Typography color="textSecondary">
                  <h3>{t("cardBarrios.text")} {props.barrios?.district}</h3>
                </Typography>
                <Typography color="textSecondary">
                  <p>
                    {t("cardBarrios.pertenece")} 
                    "{props.barrios?.name}"
                  </p>
                </Typography>
                <Button className={classes.btnFotocasaMU}>
                  <SearchIcon></SearchIcon>
                  <a
                    href={props.barrios.url}
                    className={classes.btnFotocasa}
                    target="blank"
                  >
                    fotocasa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Grid>
          {/* ))} */}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default CardsInfoBcn;
