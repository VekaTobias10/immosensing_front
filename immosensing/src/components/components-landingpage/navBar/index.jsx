import { Link } from "react-router-dom";
import React, { useContext} from "react";
import { useStyles } from "./style.js";
import logoimmosensing from "../../../assets/img/landingpage-img/logoimmosensing.png";
import { Button} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../assets/themes/theme-wrapper-page";
import { useAuth } from "../../../hooks/customHook";

export default function NavBar() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const {isDark, changeTheme} = useContext(ThemeContext);
  

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };
 
  return (
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
     color='primary'
   />
   {/* <Button onClick={setTema}>Dale click</Button> */}
 </div>
</div>
  );
}
