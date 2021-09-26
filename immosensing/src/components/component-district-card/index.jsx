import React from "react";
import { useStyles } from "./style.js";
import { useTranslation } from "react-i18next";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

function CardsDistrictBcn(props) {
  const classes = useStyles();
  const [t,i18n] = useTranslation("global");

  let txt = ''; 
  switch (i18n.options.lng) {
    case "es":
      txt = props.district?.description_es;      
      break;
    default:
      txt = props.district?.description_en;   
  };


  return (
    <React.Fragment>
      <div className={classes.root}>
      <Grid container direction="row" spacing={2}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.accordionTitle}
        >
          <Typography className={classes.heading}>{props.district?.district}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {txt}
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Grid>
      </div>
    </React.Fragment>
  );
}

export default CardsDistrictBcn;