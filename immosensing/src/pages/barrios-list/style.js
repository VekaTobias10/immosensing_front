import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({

    containerCards:{
        margin:'auto',
    },
    listItem:{
        listStyleType:'none',
    },
    titleUser:{
        margin:'2rem',
        textAlign:'center',
    },
    //Loading
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.main,
  },


}));