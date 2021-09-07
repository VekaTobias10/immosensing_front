import React from "react";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./style.js";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import imgLogin from "../../assets/img/login/pexels-login.jpg";
import { useTranslation } from "react-i18next";
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
// import { useHistory } from 'react-router-dom';

function Login() {
  // const { push } = useHistory()
  const classes = useStyles();
  const [t] = useTranslation("global");
  const [checked, setChecked] = React.useState(false);
  const myHistory = useHistory();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => { // gestiono el submit del formulario
    e.preventDefault();
    if(e.target.checkValidity()){ // compruebo que todos los campos del formulario son validos
        // genero el objeto options para llamar al login
        const options = {
            method: 'POST',
            headers:{
                'Content-type': 'application/json' // aviso a mi servidor que le envio los datos en formato JSON
            },
            body: JSON.stringify({ // Genero el body como string
                email: e.target.email.value, // obtengo el value de un input por su name
                password: e.target.pass.value
            })
        }
        // llamo al login
        fetch('http://localhost:3001/auth/login', options)
        .then(r => r.json())
        .then(d => {
          sessionStorage.setItem("token", d.access_token); 
          myHistory.push('/user');
        }) // aqui tendríamos el access token
    }else{
        // mostrar error al usuario con el campo que no es válido
    }
   
  }


  return (
    <React.Fragment>
      <div className={classes.pageContainer}>
   
        <div className={classes.accountContainer}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
          <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <InputBase
              className={classes.margin}
              required
              name="email"
              placeholder={t("login.email")}
              inputProps={{ "aria-label": "naked" }}
            />
            <InputBase
              className={classes.margin}
              required
              name="pass"
              type="password"
              placeholder={t("login.password")}
              inputProps={{ "aria-label": "naked" }}
            />
            <div className={classes.checkBox}>
              <Checkbox
                className={classes.checkBoxElement}
                checked={checked}
                onChange={handleChange}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
              <p className="text_check-box">{t("login.checkText")}</p>
            </div>
            <Button type="submit" className={classes.buttonlogin} variant="contained">
              LOGIN
            </Button>
            {/* <Button className={classes.buttonlogin} variant="contained" onClick={() => push('/')} >LOGIN</Button> */}

            {/* <p className="link"><a className="link_color" href='#'>Forgot password?</a></p> */}
            <p className={classes.link}>
            {t("login.haveAccount")}
            <Link to="/register">{t("header.register")}</Link>
            </p>
          </form>
        </div>
        <div>
          <img
            className={classes.imgRegister}
            src={imgLogin}
            alt="img-register"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Login;
