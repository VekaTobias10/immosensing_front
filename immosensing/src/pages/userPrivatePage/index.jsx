import React from 'react';
// import { useTranslation } from "react-i18next";
import { useStyles } from "./style.js";


function UserPerfil (){
    const classes = useStyles();
    // const [t] = useTranslation("global");
return(
    <h1 className={classes.welcomeName}>Hola página privada</h1>
);

}


export default UserPerfil;