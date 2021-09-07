import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    mainContainerServices: {
        backgroundColor: '#0FCDB2',
        padding: '1rem',
    },
    servicesContainer: {

        margin: '5rem auto',
        width: '80%',
        fontSize: '1rem',
        color: 'black',
        letterSpacing: '0.2rem',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }

    },
    internalContainerServices: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    },
    titleService:{
        margin: '1rem auto 1rem',
        color: 'white'
    },
    containersCard: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    root: {
        maxWidth: '27%',
        borderRadius:'20px',
        margin: '1.5rem',
        padding: '1.5rem',
        boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin:'1rem auto',
            padding:'1rem'
        },
    },
    iconServices: {
        fontSize: '80px',
        color: '#0FCDB2',
        width: '100%',
        margin: '0rem auto',
    }

}));