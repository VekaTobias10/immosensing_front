import { Link } from "react-router-dom";
import React from "react";
import { useStyles } from "./style.js";
import { Button} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import logoimmosensing from "../../../assets/img/landingpage-img/logoimmosensing.png";
import NavBar from '../navBar/index';
import { useAuth } from "../../../hooks/customHook";

export default function HeaderLanding() {
  const classes = useStyles();
  const isAuth = useAuth();
  const [t] = useTranslation("global");
  
 
  return (
      <div className={classes.mainNavBar}>
      <NavBar></NavBar>
      <div className={classes.containerNavBar}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
        <ul className={classes.containerList}>
          <li className={classes.listItem}>
            <a className={classes.itemLink} href="#ServicesLanding">{t("navbar.who_are_we")}</a>
          </li>
          <li className={classes.listItem}>
            <a className={classes.itemLink} href="#PresentationSection">{t("navbar.what_do_we")}</a>
          </li>
          <li className={classes.listItem}>
            <a  className={classes.itemLink}href="#SupportSection">{t("navbar.patrocinador")}</a>
          </li>
        </ul>
        <div>
            {isAuth ? (
               <Button className={classes.btnAccess} variant="outlined">
              <Link className={classes.btnAccessDeco} to="/logOut">
                {t("navbar.logOut")}
              </Link>
              </Button>
            ) : (
              <Button className={classes.btnAccess} variant="outlined">
              <Link className={classes.btnAccessDeco} to="/login">
                {t("navbar.acceso")}
              </Link>
              </Button>
            )}

        </div>
      </div>

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

      {/* <Card className={classes.cardBuscador}>
        <form className={classes.searchContainer} noValidate autoComplete="off">
          <TextField
            className={classes.inputSearch}
            id="outlined-basic"
            label="Presupuesto"
            variant="outlined"
            color='primary'
            InputLabelProps={{
            style: {
             color: "#0FCDB2",
             },
            }}
          />
          <Button className={classes.buttonSearch}>
            <Search />
          </Button>
        </form>
      </Card> */}
      </div>
  );
}
