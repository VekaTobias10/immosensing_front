import React from "react";
// import {React, useContext} from 'react';
// import { ThemeContext } from '../../../assets/themes/theme-context';
import { useStyles } from "./style.js";
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";


export default function LogOutPage() {
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
<h1>{t("page.logOut")}</h1>

<div className={classes.buttonRegisterContainer}>
  <Button variant="outlined" className={classes.buttonRegister}>
  <Link className={classes.linkColor} to="/login">{t("navbar.acceso")}</Link>
  </Button>
  <Button variant="outlined" className={classes.buttonRegister}>
  <Link className={classes.linkColor} to="/">{t("navbar.home")}</Link>
  </Button>
  </div>
</div>

</div>
</React.Fragment>
);
}
