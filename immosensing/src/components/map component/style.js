import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({


map:{
    height:'70vh',
    width:'90%',
    color:theme.palette.primary.main,
    margin:'auto',
},
//Multiselect
formControl: {
    margin: '1rem 2rem',
    minWidth: 120,
    maxWidth: '80%',
    
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