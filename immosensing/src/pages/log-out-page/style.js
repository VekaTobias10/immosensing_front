import { makeStyles } from '@material-ui/core/styles';
import headerPhoto from '../../assets/img/landingpage-img/pexels-bcn.jpg';


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
        height: '100vh',
    },
    containerNavBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1.5rem',
        justifyContent: 'space-between',
        color: 'white',
        position: 'relative',
        fontWeight: 'bold',
        width: '80%',
        margin: 'auto',
    },

    logoLanding: {
        width: '13%',
    },

    mainheader: {
        width: '100%',
        margin: 'auto'
    },

    welcomeHeader: {
        width: '60%',
        border: '8px solid #0FCDB2',
        margin: '2rem auto 1.5rem',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },

    buttonRegisterContainer: {
        textAlign: 'center',
    },
    buttonRegister: {
        color: theme.palette.primary.main,
        fontSize: '1.2rem',
        textDecoration:'none',
        minWidth:'20%',
        margin:'0.5rem',
        borderColor:theme.palette.primary.main
    },
    linkColor:{
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
            color: theme.palette.primary.main,
        },
    }

}));