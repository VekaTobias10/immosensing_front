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
    personalDataBigcontainer:{
        display: "flex",
        width: "100%",
        height:'100vh',
        [theme.breakpoints.down('sm')]: {
            width:"fit-content",
        }
    },

    personalDataInputTitelcontainer:{
        width: "100%",
    },
    inputOculto:{
        border:"none",
        color:"transparent",
    },
    imgBcn:{
        width:'100%',
        height:'100vh',
        borderLeft:'8px solid #0FCDB2',
        [theme.breakpoints.down('sm')]: {
            display:"none",
        }
       
    },
    checkboxContainer:{
        display: 'flex',
        margin: '1rem auto',
        width:'100%',
        alignItems:'center'
    },
    inputContainer:{
        width: '65%',
    },
    logoLanding: {
        width: '13%',
        margin:'0 auto 1rem',
    },
    buttonSubmit: {
        textDecoration:'none'
    }

}));
