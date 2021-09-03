import {React, useContext} from 'react';
import { ThemeContext } from '../../../assets/themes/theme-context';
import { useStyles } from "./style.js";
import logoimmosensing from "../../../assets/img/landingpage-img/logoimmosensing.png";
import { Button} from '@material-ui/core';
import {useTranslation} from "react-i18next";

export default function HeaderLanding() {
    const classes = useStyles();
    // const Theme = useContext(ThemeContext);
    // const [modo, setTema ] = Theme;
    const [t, i18n] = useTranslation("global");
  
    return (
      // style={{background:modo.backgroundColor, color: modo.color}}
        <div  className={classes.mainNavBar} >
        <div className={classes.containerNavBar}>
          <img
            src={logoimmosensing}
            className={classes.logoLanding}
            alt="logo-landing"
          ></img>
          <ul className={classes.containerList}>
            <li className={classes.listItem}><a href>{t("navbar.who_are_we")}</a></li>
            <li className={classes.listItem}><a href>{t("navbar.what_do_we")}</a></li>
            <li className={classes.listItem}><a href>{t("navbar.patrocinador")}</a></li>
          </ul>
          <div>
            <Button className={classes.btnAccess} variant="outlined">{t("navbar.acceso")}</Button>
           </div>
          <div className={classes.containerButton}>
          <Button variant="outlined" className={classes.button_lang} onClick={()=> i18n.changeLanguage('es')}>ES</Button>
          <Button variant="outlined" className={classes.button_lang2} onClick={()=> i18n.changeLanguage('en')}>EN</Button>
          {/* <Button onClick={setTema}>Dale click</Button> */}
          </div>
        </div>
        
        <div className={classes.welcomeHeader}>
       <h1 className={classes.titleImmo}>{t("header.welcome")}</h1>
       <h4 className={classes.subtitleHeader}>{t("header.subtitle-header")}</h4>
        </div>
        <div className={classes.buttonRegisterContainer}>
        <Button variant="outlined" className={classes.buttonRegister}>{t("header.register")}</Button>
        </div>
      </div>
     
    );
  }



  