import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    display:'flex',
    justifyContent: 'center',
    margin: '7rem auto',
    width: '90%',
    fontSize: '1rem',
    color: 'black',
    letterSpacing: '0.2rem',

  },
  root: {
    maxWidth: '20%',
    margin:'2rem',
    padding:'1.5rem',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  iconServices:{
    fontSize: '80px',
    color: '#0FCDB2',
    width: '100%',
    margin: '1rem auto',
  }

}));