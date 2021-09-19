import { makeStyles } from '@material-ui/core/styles';
// import headerPhoto from '../../assets/img/landingpage-img/pexels-bcn.jpg';


export const useStyles = makeStyles((theme) => ({
    //navbar
    mainNavBar: {
        // backgroundImage: `url(${headerPhoto})`,
        // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${headerPhoto})`,
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
    formContainer:{
        margin: 'auto',
        textAlign: 'center',
        width: '60%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                margin: '10px auto',
            }
        },
        '& .MuiSelect-root': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: '100%',
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
        margin: 'auto',
        color: 'black',
        padding: '3.5rem',
        textAlign: 'center',
    },


    buttonSubmit: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '1.2rem',
        textDecoration:'none'
    },

}));