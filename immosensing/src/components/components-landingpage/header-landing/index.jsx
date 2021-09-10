import { Link } from "react-router-dom";
import React, { useContext} from "react";
import { useStyles } from "./style.js";
import logoimmosensing from "../../../assets/img/landingpage-img/logoimmosensing.png";
import { Button, Card, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Switch from "@material-ui/core/Switch";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../assets/themes/theme-wrapper-page";
import { useAuth } from "../../../hooks/customHook";

export default function HeaderLanding() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const {isDark, changeTheme} = useContext(ThemeContext);
  

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };
 
 
  return (
    <div className={classes.mainNavBar}>
      <div className={classes.containerNavBar}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
        <ul className={classes.containerList}>
          <li className={classes.listItem}>
            <a href>{t("navbar.who_are_we")}</a>
          </li>
          <li className={classes.listItem}>
            <a href>{t("navbar.what_do_we")}</a>
          </li>
          <li className={classes.listItem}>
            <a href>{t("navbar.patrocinador")}</a>
          </li>
        </ul>
        <div>
          <Button className={classes.btnAccess} variant="outlined">
            {useAuth ? (
              <Link className={classes.btnAccessDeco} to="/logOut">
                {" "}
                {t("navbar.logOut")}
              </Link>
            ) : (
              <Link className={classes.btnAccessDeco} to="/login">
                {" "}
                {t("navbar.acceso")}
              </Link>
            )}
          </Button>
        </div>
        <div className={classes.containerButton}>
          <Button
            variant="outlined"
            className={classes.button_lang}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </Button>
          <Button
            variant="outlined"
            className={classes.button_lang2}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Button>
          <Switch
            checked={isDark}
            onChange={handleChangeTheme}
            color="secondary"
          />
          {/* <Button onClick={setTema}>Dale click</Button> */}
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

      <Card className={classes.cardBuscador}>
        <form className={classes.searchContainer} noValidate autoComplete="off">
          <TextField
            className={classes.inputSearch}
            id="outlined-basic"
            label="Presupuesto"
            variant="outlined"
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
      </Card>
    </div>
  );
}
