import { makeStyles } from '@material-ui/core/styles';
import headerPhoto from '../../assets/img/landingpage-img/pexels-bcn.jpg';


export const useStyles = makeStyles((theme) => ({
    //navbar
    mainNavBar: {
        // backgroundImage: `url(${headerPhoto})`,
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${headerPhoto})`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center center',
        left: '0',
        top: '0',
        width: '100%',
        height: '100vh',
    },
    containerPaper:{
        width:'50%',
        margin:'0 auto 0',
        paddingTop: '2rem',
        height:'100vh',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height:'100vh'
        }
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
        margin: '8px auto',
        textAlign: 'center',
        width: '90%',
        '& .MuiTextField-root': {
            marginTop:theme.spacing(1),
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            }
        },
        '& .MuiSelect-root': {
            marginTop:theme.spacing(1),
            width: '100%',
        }
    },
    formControl:{
        margin: '8px auto',
        width: '100%',

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
        padding: '2rem',
        textAlign: 'center',
        borderColor: theme.palette.primary.main,
        border:'solid 8px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            padding:'3rem'
        }
    },


    buttonSubmit: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '1.2rem',
        textDecoration:'none',
        margin:'0.7rem',
        width:'50%',
        [theme.breakpoints.down('sm')]: {
            width: '75%',
            margin: '1.7rem',
        }
    },

}));