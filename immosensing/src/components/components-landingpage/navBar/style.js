import { makeStyles } from '@material-ui/core/styles';
import headerPhoto from '../../../assets/img/landingpage-img/pexels-bcn.jpg';


export const useStyles = makeStyles((theme) => ({
    //navbar
    mainNavBar: {
        // backgroundImage: `url(${headerPhoto})`,
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${headerPhoto})`,
        position: 'relative',
        paddingBottom: '18rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
    },

    button_lang: {
        color: 'white',
        margin: '0.3rem',
    },
    button_lang2: {
        margin: '0.3rem',
    },
    containerButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
    buttonRegisterContainer: {
        textAlign: 'center',
    },
    buttonRegister: {
        color: theme.palette.primary.main,
        fontSize: '1.2rem',

    },
    btnAccessDeco: {
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
            color: theme.palette.primary.main,
        },
    },
    btnAccess: {
        backgroundColor: theme.palette.primary.main,
        width: '8rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textDecoration: 'none'
    },
    navBarResponsive: {
        backgroundColor: theme.palette.primary.main
    }

}));