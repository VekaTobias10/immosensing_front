// import React,{useState} from 'react';
import React,{useState,useEffect} from 'react';
import { useStyles } from "./style.js";
import CardsInfoBcn from "../../components/component-card";
import {Link} from "react-router-dom";
import CardsDetailsBarrios from "../../components/card-details-neig/index";

export default function BarrioDescription (props){

const classes = useStyles();

let [barrios, updateBarrios] = useState([]);
let [eachBarrio, updateEachBarrios] = useState([]);

useEffect(() => {
  fetch(`http://localhost:3001/preferences/BarriosBcn`)
    .then((r) => r.json())
    .then((b) => updateBarrios(b))
    .catch((err) => err);
    fetch(`http://localhost:3001/preferences/barrios`)
    .then((r) => r.json())
    .then((b) => updateEachBarrios(b))
    .catch((err) => err);
}, []);


return(
  <React.Fragment>
    {/* <div>
        <h1 className={classes.titleBarrio}>{barrios?.nameBarrio}</h1>
        <img src={BASE_URL + barrios?.img} alt='foto-barrio'></img>
    </div> */}
    <div className={classes.containerCards}>
    <h1>Estos son tus barrios Ideales en Barcelona</h1>
        <ul className={classes.listCards}>
          {barrios.map((i) => (
             <Link to={`preferences/barrios/${i.name}`}>
            <li className={classes.listItem} key={i.id}>
              <CardsInfoBcn barrios={i}></CardsInfoBcn>
            </li>
            </Link>
          ))}
        </ul>
        {/* <ul className={classes.listCards}>
          {eachBarrio.map((i) => (
            <li className={classes.listItem} key={i.id}>
              <CardsDetailsBarrios eachBarrio={i}></CardsDetailsBarrios>
            </li>
          ))}
        </ul> */}
      </div>

  </React.Fragment>
)

}