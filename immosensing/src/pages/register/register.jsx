import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import Button from '@material-ui/core/Button';
import imgBcnRegister from '../../assets/img/register/imgRegisterBcn.jpg';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";

function PersonalDataRegister() {
  const classes = useStyles();
  const [t] = useTranslation("global");
  const [invalidPass, setInvalidPass] = React.useState(false)

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos
      if (e.target.pass.value === e.target.repeated_pass.value) {
        // solo ejecuto el registro si las passwords son iguales
        // genero el objeto options para llamar al login
        setInvalidPass(false);
        const options = {
          method: "POST",
          headers: {
            "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
          },
          body: JSON.stringify({
            // Genero el body como string
            name: e.target.name.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value, // obtengo el value de un input por su name
            password: e.target.pass.value,
          }),
        };
        // llamo al registro
        fetch("http://localhost:3001/auth/register", options)
          .then((r) => r.json())
          .then((d) => console.log(d)); 
      } else {
        setInvalidPass(true);
      }
    }
  };   


  
  return (
    <div className={classes.personalDataBigcontainer}>
      {/* <div className={classes.personalDataInputTitelcontainer}> */}
    
        <div className={classes.inputContainer}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
        <h1>{t("register.title")}</h1>
          <form
            className={classes.root}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
          >
              <TextField
              className={classes.inputData}
              required
              name="name"
              label={t("register.name")}
            //   ref={firstNameRef}
              // defaultValue="First Name"
              variant="outlined"
            />
              <TextField
              className={classes.inputData}
              required
              name="lastName"
              label={t("register.lastName")}
            //   ref={firstNameRef}
              // defaultValue="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              type="email"
              name="email"
              label={t("register.email")}
            //   ref={firstNameRef}
              // defaultValue="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              type="password" 
              name="pass"
              label={t("register.password")}
            //   ref={lastNameRef}
              // defaultValue="Last Name"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              required
              type="password"
              name="repeated_pass"
              label={t("register.repeatPassword")}
            //   ref={addressRef}
              // defaultValue="Adress"
              variant="outlined"
            />
         {invalidPass ? <p style={{ color: 'red' }}>{t("register.wrongPass")}</p> : <p></p>}
        <Button className={classes.buttonSubmit} type="submit" variant="contained">
              {t("register.btnSubmit")}
            </Button>
          </form>
        {/* </div> */}
       
      </div>
      <div className={classes.imgContainerPersonal}>
        <img className={classes.imgBcn} src={imgBcnRegister} alt="logo-movimiento" />
      </div>
    </div>
  );
}
export default PersonalDataRegister;
