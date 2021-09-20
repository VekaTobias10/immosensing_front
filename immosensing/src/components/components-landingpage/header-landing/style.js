import { makeStyles } from '@material-ui/core/styles';
import headerPhoto from '../../../assets/img/landingpage-img/pexels-bcn.jpg';


export const useStyles = makeStyles((theme) => ({
    //navbar
    mainNavBar: {
        // backgroundImage: `url(${headerPhoto})`,
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${headerPhoto})`,
        position: 'relative',
        paddingBottom: '14rem',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
    },
    containerNavBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '1.5rem',
        justifyContent: 'space-between',
        color: theme.palette.primary.main,
        position: 'relative',
        fontWeight: 'bold',
        width: '80%',
        margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                padding:'2rem'
            },
            // [theme.breakpoints.up('sm')]: {
            //     width: '100%',
            //     textAlign: 'center',
            //     display: 'flex',
            //     flexDirection: 'column',
            // }
    },

    logoLanding: {
        width: '13%',
            [theme.breakpoints.down('sm')]: {
                width: '50%',
            }

    },

    containerList: {
        listStyleType: 'none',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
       
    },
    listItem: {
        margin: '1rem'
    },
    colorLinkNav:{
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
            color: theme.palette.primary.main,
        },
    },
    button_lang: {
        color: 'white',
        margin: '0.3rem',
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            }
    },
    button_lang2: {
        color: theme.palette.primary.main,
        margin: '0.3rem',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }

    },
    //Header
    mainheader: {
        width: '100%',
        margin: 'auto'
    },

    welcomeHeader: {
        width: '60%',
        border: '8px solid',
        borderColor: theme.palette.primary.main,
        margin: '2rem auto 1.5rem',
        color: 'grey',
        padding: '1rem',
        textAlign: 'left',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },

    titleImmo: {
        fontSize: '3rem',
        color: 'white',
    },
    subtitleHeader: {
        marginTop: '1rem',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        color: 'white',
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
        borderColor:theme.palette.primary.main

    },
    btnAccessDeco: {
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
            color: theme.palette.primary.main,
        },
    },
    btnAccess: {
        color: theme.palette.primary.main,
        width: '8rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        textDecoration: 'none',
        borderColor:theme.palette.primary.main
    },
    searchContainer: {
        width: '100%',
        display: 'flex',
      
    },
    cardBuscador: {
        width: '25%',
        margin: '2rem auto -17rem;',
        padding: '1rem',
        color:theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            margin: '2rem auto -17rem',
        }

    },
    buttonSearch: {
        width: '30%',
        backgroundColor: theme.palette.primary.main,
        padding: '1rem',
    },
    itemLink:{
        textDecoration:'none',
        color:theme.palette.primary.main
    }
}));