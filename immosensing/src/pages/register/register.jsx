import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style.js";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import imgBcnRegister from '../../assets/img/register/imgRegisterBcn.jpg';
import logoimmosensing from "../../assets/img/landingpage-img/logoimmosensing.png";

function PersonalDataRegister() {
  const classes = useStyles();
  
  return (
    <div className={classes.personalDataBigcontainer}>
      {/* <div className={classes.personalDataInputTitelcontainer}> */}
    
        <div className={classes.inputContainer}>
        <img
          src={logoimmosensing}
          className={classes.logoLanding}
          alt="logo-landing"
        ></img>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
          >
            <TextField
              className={classes.inputData}
              required
              id="outlined-required"
              label="First Name"
            //   ref={firstNameRef}
              // defaultValue="First Name"
              variant="outlined"
            />
            <TextField
              className={classes.inputData}
              required
              id="outlined-required"
              label="Last Name"
            //   ref={lastNameRef}
              // defaultValue="Last Name"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              required
              id="outlined-required"
              label="Address"
            //   ref={addressRef}
              // defaultValue="Adress"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              required
              id="outlined-required"
              label="Email Address"
            //   ref={emailRef}
              // defaultValue="Email Adress"
              variant="outlined"
            />
            <TextField
              className={classes.bigInputData}
              id="outlined-password-input"
              label="Password"
              type="password"
            //   ref={passwordRef}
              autoComplete="current-password"
              variant="outlined"
            />
            <input type="submit" value="" className={classes.inputOculto}></input>
            <div className={classes.checkboxContainer}>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <p>
            I am +18 years old and I read the Terms and Conditions
          </p>
        </div>

        <Button className={classes.buttonPrices} variant="contained">
              SEND
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
