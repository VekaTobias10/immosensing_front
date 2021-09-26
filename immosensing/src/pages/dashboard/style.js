import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({

    listCards:{
        listStyleType:'none',
        width:'100%'
    },
    titlePageMap:{
        textAlign:'center',
        margin:'2rem',
        [theme.breakpoints.down('sm')]: {
         
        marginTop: '2rem',
        fontSize: '1.5rem'
        }

    },



}));