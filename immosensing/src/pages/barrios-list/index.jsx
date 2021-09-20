// import React,{useState} from 'react';
import React, { useState, useEffect } from "react";
import { useStyles } from "./style.js";
import CardsInfoBcn from "../../components/component-card";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

export default function BarrioDescription(props) {
  const classes = useStyles();

  let [barrios, updateBarrios] = useState([]);
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/preferences/BarriosBcn`)
      .then((r) => r.json())
      .then((b) => {
        updateBarrios(b)
        setLoading(false);
      })
      .catch((err) => err);
  }, []);

  return (
    <React.Fragment>
      <div className={classes.containerCards}>
        <h1 className={classes.titleUser}>
          Según tus preferencias estos son tus barrios Ideales en Barcelona
        </h1>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <ul className={classes.listCards}>
          {barrios.map((i) => (
            <li className={classes.listItem} key={i.id}>
              <CardsInfoBcn barrios={i}></CardsInfoBcn>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
