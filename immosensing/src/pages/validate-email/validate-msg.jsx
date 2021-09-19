import React from "react";
import {Link} from 'react-router-dom';
// import {React, useContext} from 'react';
// import { ThemeContext } from '../../../assets/themes/theme-context';
import { useStyles } from "./style.js";
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { Button} from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function ValidationSuccess() {
  const classes = useStyles();
  // const Theme = useContext(ThemeContext);
  // const [modo, setTema ] = Theme;
  const [t] = useTranslation("global");

  return (
<React.Fragment>
<div className={classes.mainNavBar}>
<div className={classes.containerNavBar}>
  <img
    src={logoimmosensing}
    className={classes.logoLanding}
    alt="logo-landing"
  ></img>
</div>
<div className={classes.welcomeHeader}>
  <h1 className={classes.subtitleHeader}>
    {t("validation.emailSuccess")}
  </h1>
</div>
<div className={classes.buttonRegisterContainer}>
  <Button variant="outlined" className={classes.buttonRegister}>
  <Link className={classes.linkColor} to="/login">{t("navbar.acceso")}</Link>
  </Button>
</div>
</div>
</React.Fragment>
);
}
