import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import Button from '@material-ui/core/Button';
import imgBcnRegister from '../../assets/img/register/imgRegisterBcn.jpg';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";
import Modal from '@material-ui/core/Modal';
import { useHistory } from "react-router-dom";



//------------Modal---------------------//

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


//----------------------------------------//


export default function PersonalDataRegister() {
  const myHistory = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const [t] = useTranslation("global");
  const [invalidPass, setInvalidPass] = React.useState(false)


 //--------------MODAL-------------------------//

//  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Revisa tu correo</h2>
      <h3>Accede a tu cuenta y completa tu registro</h3>
    </div>
  );


//---------------------------------------//

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
          .then((d) => {
            sessionStorage.setItem("token", d.access_token); 
            myHistory.push('/');
          }) // aqui tendríamos el access token
      } else {
        setInvalidPass(true);
      }
    }
  };   

  
  return (
    <div className={classes.personalDataBigcontainer}>
     
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
          >
              <TextField
              className={classes.inputData}
              required
              name="name"
              label={t("register.name")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
              <TextField
              className={classes.inputData}
              required
              name="lastName"
              label={t("register.lastName")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
            <TextField
              className={classes.inputData}
              required
              type="email"
              name="email"
              label={t("register.email")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
            <TextField
              className={classes.inputData}
              required
              type="password" 
              name="pass"
              label={t("register.password")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
            <TextField
              className={classes.bigInputData}
              required
              type="password"
              name="repeated_pass"
              label={t("register.repeatPassword")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
         {invalidPass ? <p style={{ color: 'red' }}>{t("register.wrongPass")}</p> : <p></p>}
        <Button className={classes.buttonSubmit} type="submit" variant="contained"  onClick={handleOpen}>
              {t("register.btnSubmit")}
            </Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
          </form>
      </div>
      <div className={classes.imgContainerPersonal}>
        <img className={classes.imgBcn} src={imgBcnRegister} alt="logo-movimiento" />
      </div>
    </div>
  );
}

