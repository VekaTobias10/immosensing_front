import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
    mainContainer:{
        height:'90vh',
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(4),
        width:'100%',
        margin:'auto',

    },
    card:{
        minHeight:'80px'
    },
    photoBarrio:{
        height:'300px',
        width:'100%',
        textAlign:'center',
    },
    paperContainer:{
        minHeight:'20vh',
    },
    containerText: {
        borderColor:theme.palette.primary.main,
        border:'solid 8px',
        padding: '2rem',
        width:'100%',
    }



}));