import React from 'react';
import { useStyles } from "./style.js";
import headerPhoto from "../../../assets/img/landingpage-img/pexels-maria-orlova.jpg";
import {useTranslation} from "react-i18next";

export default function HeaderLanding() {
    const classes = useStyles();
    const [t] = useTranslation("global");
  
    return (
      <div className={classes.mainheader}>
       <div>
       <img
          src={headerPhoto}
          className={classes.imgHeaderLanding}
          alt="logo-landing"
        ></img>
        </div>
        <div>
            
        </div>
      </div>
    );
  }

  