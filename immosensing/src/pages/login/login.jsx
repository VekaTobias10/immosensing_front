import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
// import imgLogin from "../../assets/img/login/pexels-login.jpg";
import { useTranslation } from "react-i18next";
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import NavBar from "../../components/components-landingpage/navBar/index.jsx";



export default function Login() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  const [checked, setChecked] = React.useState(false);
  const myHistory = useHistory();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      // genero el objeto options para llamar al login
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
        },
        body: JSON.stringify({
          // Genero el body como string
          email: e.target.email.value, // obtengo el value de un input por su name
          password: e.target.pass.value,
        }),
      };
      // llamo al login
      // fetch("http://localhost:3001/auth/login", options)
      fetch("/auth/login", options) 
        .then((r) => r.json())
        .then((d) => {
          sessionStorage.setItem("token", d.access_token);
          if (d.status === "SUCCESS") myHistory.push("/homeUser");
          if (d.status === "PENDING_SECOND_REGISTER")
            myHistory.push("/secondRegister");
        }); // aqui tendríamos el access token
    } else {
      // mostrar error al usuario con el campo que no es válido
    }
  };
  //2.
  // hacer un if
  // primera vez al user status pending de second register
  // Cuando sea success tengo que redigir a otro lado
  //1.
  //backend devuelva el estado en el login

  return (
    <React.Fragment>
      <div className={classes.allContainer}>
      <NavBar className={classes.navBarLogin}></NavBar>
      <div className={classes.pageContainer}>
        <div className={classes.accountContainer}>
          <img
            src={logoimmosensing}
            className={classes.logoLanding}
            alt="logo-landing"
          ></img>
          <form className={classes.root} noValidate onSubmit={handleSubmit}>
            <TextField
              className={classes.margin}
              required
              name="email"
              // variant="outlined"
              label={t("login.email")}
              InputLabelProps={{
                style: {
                  color: "#0FCDB2",
                },
              }}
            />
            <TextField
              className={classes.margin}
              required
              name="pass"
              type="password"
              // variant="outlined"
              label={t("login.password")}
              InputLabelProps={{
                style: {
                  color: "#0FCDB2",
                },
              }}
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
            <Button
              type="submit"
              className={classes.buttonlogin}
              variant="contained"
            >
              {t("login.ingresa")}
            </Button>

            <p className={classes.link}>
              {t("login.haveAccount")} 
              {/* Traduccion con i18next */}
              <Link className={classes.colorLink} to="/register">
                {t("header.register")}
                   {/* Traduccion con i18next */}
              </Link>
            </p>
          </form>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
}
