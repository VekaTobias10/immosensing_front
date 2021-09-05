import React from "react";
// import {React, useContext} from 'react';
// import { ThemeContext } from '../../../assets/themes/theme-context';
import { useStyles } from "./style.js";
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";


export default function LoadingPage() {
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
<h1>{t("validation.loading")}</h1>
</div>

</div>
</React.Fragment>
);
}
