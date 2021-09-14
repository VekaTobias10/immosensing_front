import React,{useState,useEffect} from "react";
import "leaflet/dist/leaflet.css";
import { useStyles } from "./style.js";
import NavBar from "../../components/components-landingpage/navBar/index";
import CardsInfoBcn from '../../components/component-card/index';


function HomeUser() {
  const classes = useStyles();
let [district, updateDistricts] = useState([]);
let [barrios, updateBarrios] = useState([]);

  useEffect(() => {
  fetch("http://localhost:3001/infoBcn/districtBcn")
    .then((r) => r.json())
    .then((d) => {updateDistricts(d)
    return fetch('http://localhost:3001/preferences/barriosBcn')
    })
    .then((r) => r.json())
    .then((b)=> updateBarrios(b))
    .catch(err => err) 
}, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className={classes.containerCards}>
      <ul className={classes.listCards}>
          {barrios
          .map((i)=>(
            <li className={classes.listItem} key={i.id}>
            <CardsInfoBcn barrios={i}></CardsInfoBcn>
            </li>
          ))  
          }
      </ul>
      </div>
      {/* <p>{district[0]?.district}</p>
        <p>{district[0]?.description_es}</p>
        <p>{barrios[0]?.barrio}</p> */}
        {/* <h2>{props.district?.district}</h2>
      <p>{props.district?.description_es}</p> */}
    </div>
  );
}

export default HomeUser;