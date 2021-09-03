import React from 'react';
import { useStyles } from "./style.js";
import {Card, CardContent, Typography} from '@material-ui/core';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import FindInPageTwoToneIcon from '@material-ui/icons/FindInPageTwoTone';
import {useTranslation} from "react-i18next";

export default function ServicesLanding() {
    const classes = useStyles();
    const [t] = useTranslation("global");
  
    return (
        <div className={classes.servicesContainer}>
      
        <Card className={classes.root}>
        <LocationOnTwoToneIcon className={classes.iconServices}></LocationOnTwoToneIcon>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {t("cardService.serviceOne")}
            </Typography>
          </CardContent>
      </Card>

      <Card className={classes.root}>
       <FindInPageTwoToneIcon className={classes.iconServices}></FindInPageTwoToneIcon>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {t("cardService.serviceTwo")}
            </Typography>
          </CardContent>
      </Card>

      <Card className={classes.root}>
      <MonetizationOnTwoToneIcon className={classes.iconServices}></MonetizationOnTwoToneIcon>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {t("cardService.serviceThree")}
            </Typography>
          </CardContent>
      </Card>
      </div>
     
     
    );
  }
