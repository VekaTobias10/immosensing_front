import { useStyles } from "./style.js";
import React from "react";
import logoimmosensing from "../../../assets/img/landingpage-img/logoimmosensing.png";
import {useTranslation} from "react-i18next";

export default function MenuNavigator() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  return (
    <div className={classes.mainNavBar}>
      <nav className={classes.containerNavBar}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
        <ul className={classes.containerList}>
          <li className={classes.listItem}>{t("navbar.who_are_we")}</li>
          <li className={classes.listItem}>{t("navbar.what_do_we")}</li>
          <li className={classes.listItem}>{t("navbar.patrocinador")}</li>
        </ul>
        <button onClick={()=> i18n.changeLanguage('es')}>ES</button>
        <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      </nav>
    </div>
  );
}
