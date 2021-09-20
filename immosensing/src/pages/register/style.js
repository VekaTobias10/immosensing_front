import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        margin: '0.5rem auto',
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        }
    },
    inputData: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
        }
    },
    bigInputData: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
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
        margin: '1rem auto',
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
        width: '65%',
        margin:'auto',
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
        margin: '1rem auto',
        width:'50%',
        [theme.breakpoints.down('md')]: {
            width: "80%",
            margin: "1rem auto"
        }
    },

    //modal
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderColor: theme.palette.primary.main,
        border:'solid 8px',
      }

}));
