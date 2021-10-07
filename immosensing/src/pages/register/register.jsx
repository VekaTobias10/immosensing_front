import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import {Button,Modal,Fade,Backdrop,Grid} from '@material-ui/core';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import NavBar from '../../components/components-landingpage/navBar/index';



export default function PersonalDataRegister() {
  const myHistory = useHistory();
  const classes = useStyles();
  const [t] = useTranslation("global");
  const [invalidPass, setInvalidPass] = React.useState(false)


 //--------------MODAL-------------------------//

const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


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
        // fetch("http://localhost:3001/auth/register", options)
        fetch("/auth/register", options)
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
    <div className={classes.personalRegisterContainer}>
      <NavBar></NavBar>
     <div className={classes.titleRegister}>
     <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
        <h1>{t("register.title")}</h1>
     </div>
        <div className={classes.inputContainer}>
      
          <form
            className={classes.root}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
              <TextField
              className={classes.inputData}
              required
              fullWith
              name="name"
              label={t("register.name")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              className={classes.inputData}
              required
              fullWith
              name="lastName"
              label={t("register.lastName")}
              variant="outlined"
              InputLabelProps={{
                style:{
                    color: '#0FCDB2',
                }
            }}
            />
             </Grid>
             <Grid item xs={12}>
            <TextField
              className={classes.bigInputData}
              required
              fullWith
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
             </Grid>
             <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputData}
              required
              fullWith
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
             </Grid>
             <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputData}
              required
              fullWith
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
             </Grid>
         {invalidPass ? <p style={{ color: 'red' }}>{t("register.wrongPass")}</p> : <p></p>}
        <Button className={classes.buttonSubmit} type="submit" variant="contained"  onClick={handleOpen}>
              {t("register.btnSubmit")}
            </Button>
            {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal> */}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 30,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Verifica tu email</h2>
          </div>
        </Fade>
      </Modal>
      </Grid>
          </form>
        
      </div>
    </div>
  );
}

