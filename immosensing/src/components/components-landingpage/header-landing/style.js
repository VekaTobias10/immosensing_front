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

    containerList: {
        listStyleType: 'none',
        display: 'flex'
    },
    listItem: {
        margin: '1rem'
    },
    button_lang: {
        color: 'white',
        margin: '0.3rem',
    },
    button_lang2: {
        color: '#0FCDB2',
        margin: '0.3rem',
    },
    //Header
    mainheader: {
        width: '100%',
        margin: 'auto'
    },

    welcomeHeader: {
        width: '60%',
        border: '8px solid #0FCDB2',
        margin: '2rem auto 1.5rem',
        color: 'grey',
        padding: '1rem',
        textAlign: 'left',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
        color: '#0FCDB2',
        fontSize: '1.2rem'
    },
    btnAccess: {
        backgroundColor: '#0FCDB2',
        color: 'white',
        width: '8rem',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    searchContainer: {
        width: '100%',
        display:'flex',
    },
    cardBuscador: {
        width: '25%',
        margin: '5rem auto -20rem',
        padding: '1rem',
    },
    buttonSearch:{
        width: '30%',
        backgroundColor: '#0FCDB2',
        padding: '1rem',
    },
}));