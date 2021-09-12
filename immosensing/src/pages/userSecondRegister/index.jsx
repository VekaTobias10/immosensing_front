import React from "react";
import { useStyles } from "./style.js";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { useHistory } from "react-router-dom";
// import {React, useContext} from 'react';
// import { ThemeContext } from '../../../assets/themes/theme-context';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";
import { useTranslation } from "react-i18next";
import { useSession } from "../../hooks/customHook";

export default function UserSecondRegister() {
  const classes = useStyles();
  // const Theme = useContext(ThemeContext);
  // const [modo, setTema ] = Theme;
  const [t] = useTranslation("global");
  const [zone, setZone] = React.useState("");
  const [alquiler, setAlquiler] = React.useState("");
  const [trabajo, setTrabajo] = React.useState("");
  const [estadoCivil, setEstadoCivil] = React.useState("");
  const sessionToken = useSession();
  const myHistory = useHistory();

  const handleChange = (event) => {
    setZone(event.target.value);
  };

  const handleChangeAlquiler = (event) => {
    setAlquiler(event.target.value);
  };

  const handleChangeTrabajo = (event) => {
    setTrabajo(event.target.value);
  };

  const handleChangeEstadoCivil = (event) => {
    setEstadoCivil(event.target.value);
  };

  const handleSubmit = (e) => {
    // gestiono el submit del formulario
    e.preventDefault();
    if (e.target.checkValidity()) {
      // compruebo que todos los campos del formulario son validos

      // solo ejecuto el registro si las passwords son iguales
      // genero el objeto options para llamar al login
      // setInvalidPass(false);
      const options = {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          estadoCivil: e.target.estadoCivil.value,
          hijos: e.target.hijos.value,
          tipoDeZonaPreferido: e.target.tipoDeZonaPreferido.value,
          modalidadTrabajo: e.target.modalidadTrabajo.value,
          rangoAlquiler: e.target.rangoAlquiler.value,
        }),
      };
      // llamo al registro
      fetch("http://localhost:3001/user", options).then((r) => {
        if (r.ok) myHistory.push("/homeUser");
      });
    }
  };

  return (
    <React.Fragment>
      <div className={classes.mainNavBar}>
        <div className={classes.containerNavBar}>
          <img
            src={logoimmosensing}
            className={classes.logoLanding}
            alt="logo-landing"
          ></img>
        </div>
        <div className={classes.welcomeHeader}>
          <h1 className={classes.subtitleHeader}>
            {t("secondRegister.title")}
          </h1>
        </div>
        <Grid item xs={12} className={classes.formContainer}>
          <form
            className={classes.formControl}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            id="secondRegister"
          >
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Estado Civil
              </InputLabel>
              <Select
                native
                id="demo-simple-select-outlined"
                name="estadoCivil"
                value={estadoCivil}
                onChange={handleChangeEstadoCivil}
                fullWidth
                label="Estado Civil"
                // {t("secondRegister.zone")}
                inputProps={{
                  id: "outlined-age-native-simple",
                  style: {
                    color: "#0FCDB2",
                  },
                }}
              >
                <option aria-label="None" value="" />
                <option value={"residencial"}>Casado</option>
                <option value={"centro"}>Soltero</option>
                <option value={"centro"}>Viudo</option>
              </Select>
            </FormControl>

            <TextField
              required
              fullWidth
              name="hijos"
              label={t("secondRegister.children")}
              InputLabelProps={{
                style: {
                  color: "#0FCDB2",
                },
              }}
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Zona Preferida
              </InputLabel>
              <Select
                native
                id="demo-simple-select-outlined"
                name="tipoDeZonaPreferido"
                value={zone}
                onChange={handleChange}
                fullWidth
                label="zona Preferida"
                // {t("secondRegister.zone")}
                inputProps={{
                  id: "outlined-age-native-simple",
                  style: {
                    color: "#0FCDB2",
                  },
                }}
              >
                <option aria-label="None" value="" />
                <option value={"residencial"}>Residencial</option>
                <option value={"centro"}>Centro</option>
                <option value={"montaña"}>Montaña</option>
                <option value={"playa"}>PLaya</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Modalidad de trabajo
              </InputLabel>
              <Select
                native
                id="demo-simple-select-outlined"
                name="modalidadTrabajo"
                value={trabajo}
                onChange={handleChangeTrabajo}
                fullWidth
                label="Modalidad de Trabajo"
                // {t("secondRegister.zone")}
                inputProps={{
                  id: "outlined-age-native-simple",
                  style: {
                    color: "#0FCDB2",
                  },
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Remoto"}>Remoto</option>
                <option value={"Presencial"}>Presencial</option>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Rango de alquiler
              </InputLabel>
              <Select
                native
                id="demo-simple-select-outlined"
                name="rangoAlquiler"
                value={alquiler}
                onChange={handleChangeAlquiler}
                fullWidth
                label="Rangos de alquiler"
                // {t("secondRegister.zone")}
                inputProps={{
                  id: "outlined-age-native-simple",
                  style: {
                    color: "#0FCDB2",
                  },
                }}
              >
                <option aria-label="None" value="" />
                <option value={"500 - 1000"}>500 - 1000</option>
                <option value={"1000 - 1500"}>1000 - 1500</option>
                <option value={"1500 - 2000"}>1500 - 2000</option>
                <option value={"2000 en adelante"}>2000 en adelante</option>
              </Select>
            </FormControl>
            <Button
              form="secondRegister"
              className={classes.buttonSubmit}
              type="submit"
              variant="contained"
            >
              {t("secondRegister.btnSubmit")}
            </Button>
          </form>
        </Grid>
      </div>
    </React.Fragment>
  );
}
