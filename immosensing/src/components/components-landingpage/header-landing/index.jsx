import { Link } from "react-router-dom";
import React from "react";
import { useStyles } from "./style.js";
import { Button, Card, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import NavBar from '../navBar/index';

export default function HeaderLanding() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  
 
  return (
      <div className={classes.mainNavBar}>
      <NavBar></NavBar>
      <div className={classes.welcomeHeader}>
        <h1 className={classes.titleImmo}>{t("header.welcome")}</h1>
        <h4 className={classes.subtitleHeader}>
          {t("header.subtitle-header")}
        </h4>
      </div>
      <div className={classes.buttonRegisterContainer}>
        <Button variant="outlined" className={classes.buttonRegister}>
          <Link className={classes.buttonRegister} to="/register">
            {t("header.register")}
          </Link>
        </Button>
      </div>
      <Card className={classes.cardBuscador}>
        <form className={classes.searchContainer} noValidate autoComplete="off">
          <TextField
            className={classes.inputSearch}
            id="outlined-basic"
            label="Presupuesto"
            variant="outlined"
            // InputLabelProps={{
            //   style: {
            //     color: "#0FCDB2",
            //   },
            // }}
          />
          <Button className={classes.buttonSearch}>
            <Search />
          </Button>
        </form>
      </Card>
      </div>
  );
}
