import React from "react";
import { useStyles } from "./style.js";
import { useTranslation } from "react-i18next";


export default function FooterLanding() {
  const classes = useStyles();
  const [t] = useTranslation("global");

  return (
    <div className={classes.footerContainer}>
     <p>{t("footer.politic")}</p>
     <p>{t("footer.conditions")}</p>
     <p>{t("footer.copyright")}</p>
    </div>
  );
}
