import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({

  containerPrincipal:{
    margin:'auto',
    width:'80%'
  },

map:{
    height:'70vh',
    width:'100%',
    color:theme.palette.primary.main,
    margin:'auto',
},
//Multiselect
formControl: {
    margin: '2rem auto',
    minWidth: '50%',
    [theme.breakpoints.down('sm')]: {
    minWidth: '100%'
      },

  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },



}));