import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
 

    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        width:'70%'

    },
    accordionTitle:{
        borderColor:theme.palette.primary.main
    },



}));