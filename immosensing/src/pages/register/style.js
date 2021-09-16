import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin:'auto',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // margin: "5px",
        },
    },
    inputData: {
        width: "100%",
    },
    bigInputData: {
        width: "100%",
    },
    personalRegisterContainer:{
        width: "100%",
        height:'100vh',
        [theme.breakpoints.down('sm')]: {
            width:"fit-content",
        }
    },
    titleRegister:{
        margin:'auto',
        width:'100%'
    },
    personalDataInputTitelcontainer:{
        width: "100%",
    },

    checkboxContainer:{
        display: 'flex',
        margin: '1rem auto',
        width:'100%',
        alignItems:'center'
    },
    inputContainer:{
        width: '100%',
    },
    logoLanding: {
        width: '13%',
        margin:'0 auto 1rem',
    },
    buttonSubmit: {
        textDecoration:'none',
        background: theme.palette.primary.main,
        color: theme.palette.secondary.main,
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
