import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin: '0.5rem auto',
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        }
    },
    inputData: {
        width: '47%',
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: '0.2rem',
            marginTop: '0.2rem',
            marginLeft: 0,
            marginRight: 0,
        }
    },
    bigInputData: {
        width: '96%',
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginBottom: '0.2rem',
            marginTop: '0.2rem',
            marginLeft: 0,
            marginRight: 0,
        }

    },
    personalRegisterContainer: {
        width: "100%",
        height: '100vh',
        [theme.breakpoints.down('sm')]: {
            width: "fit-content",
        }
    },
    titleRegister: {
        margin: 'auto',
        width: '80%',
        textAlign: 'center',
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
        }
    },
    personalDataInputTitelcontainer: {
        width: "100%",
    },

    checkboxContainer: {
        display: 'flex',
        margin: '1rem auto',
        width: '100%',
        alignItems: 'center'
    },
    inputContainer: {
        width: '100%',
    },
    logoLanding: {
        width: '13%',
        margin: '0 auto 1rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        [theme.breakpoints.down('md')]: {
            width: "20%",
        }
    },
    buttonSubmit: {
        textDecoration: 'none',
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        textAlign: 'center',
        margin: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            width: "100%",
            margin: 0
        }
    },

    //modal
    paper: {
        position: 'absolute',
        width: 400,
        textAlign: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

}));
