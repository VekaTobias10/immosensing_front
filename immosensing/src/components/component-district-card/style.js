import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
 

    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        width:'70%',
        margin:'auto',
     
        [theme.breakpoints.down('sm')]: {
          width: '90%'
            },

    },
    accordionTitle:{
        border:'4px solid',
        borderColor:theme.palette.primary.main
    },



}));