import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useStyles } from "./style.js";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../assets/themes/theme-wrapper-page";
import { useAuth} from "../../../hooks/customHook";

export default function NavBar() {
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");
  const isAuth = useAuth();
  // const isNotAuth = removeToken();
  const { isDark, changeTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    changeTheme((prevDark) => !prevDark); // cambiamos el check del boton del tema
  };
  //Para el menu responsive
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.navBarResponsive}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link className={classes.btnAccessDeco} to="/">
                {t("navbar.home")}
              </Link>
            </MenuItem>

            {!isAuth ? (
              <React.Fragment>
                <MenuItem onClick={handleClose}>
                  <Link className={classes.btnAccessDeco} to="/register">
                    {t("header.registro-nav")}
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link className={classes.btnAccessDeco} to="/login">
                    {t("navbar.acceso")}
                  </Link>
                </MenuItem>
              </React.Fragment>
            ) : (
              ""
            )}

            {isAuth ? (
              <React.Fragment>
                <MenuItem variant="outlined">
                  <Link className={classes.btnAccessDeco} to="/homeUser">
                    {t("navbar.homeUser")}
                  </Link>
                </MenuItem>
                <MenuItem variant="outlined">
                  <Link className={classes.btnAccessDeco} to="/mapBcn">
                    {t("navbar.mapBcn")}
                  </Link>
                </MenuItem>
              </React.Fragment>
            ) : (
              ""
            )}
          </Menu>
          <Button
            variant="outlined"
            className={classes.button_lang}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </Button>
          <Button
            variant="outlined"
            className={classes.button_lang2}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </Button>
          <Switch
            checked={isDark}
            onChange={handleChangeTheme}
            color="secondary"
          />
            {/* <Button
              className={classes.btnAccess}
              variant="outlined"
              onClick={isNotAuth}
            >
              <Link className={classes.btnAccessDeco} to="/logOut">
                {t("navbar.logOut")}
              </Link>
            </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
