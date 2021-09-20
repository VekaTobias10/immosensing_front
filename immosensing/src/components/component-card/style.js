import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
 

    root: {
        // flexGrow: 1,
        padding: theme.spacing(2),
        width:'60%',
        margin:'auto',
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
          [theme.breakpoints.down('md')]: {
            width: "100%",
          },
    },
    linkBarrio:{
        '&:hover, &:focus, &:visited, &:link, &:active': {
            textDecoration: 'none',
            outline: 'none',
            color: theme.palette.primary.main,
          },
    },
    card:{
        minHeight:'150px',
        // display:'flex',
        margin: 'auto',
        textAlign:'center',
        borderColor:theme.palette.primary.main,
        border:'8px solid'
    },
    btnFotocasa:{
        '&:visited, &:link,&:active,&:hover': {
            textDecoration: 'none',
            color:'white',
          }
    },
    btnFotocasaMU:{
        margin:'1rem',
        backgroundColor:'#262E8E',
        color:'white',
        fontFamily: 'Open Sans',
        fontWeight:'900',
        padding:'0.5rem',
        '&:visited, &:link,&:active,&:hover': {
            textDecoration: 'none',
            color:'white',
            backgroundColor:'#262E8E',
          }
    },


    
}));