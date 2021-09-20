import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
  allContainer:{
    height:'100vh',
  },
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: "auto",
      width: '100%'
    }
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin: 'auto',
      width:'90%'
    },
    [theme.breakpoints.down('md')]: {
      padding: 0,
      margin: 'auto',
      width:'100%'
    }
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
    width: '40%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    },
    [theme.breakpoints.down('md')]: {
      width: "80%",
    }
  },
  margin: {
    margin: theme.spacing(1),
    height: "2.7rem",

  },
  buttonlogin: {
    background: theme.palette.primary.main,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      marginTop: "2rem",
    }
  },

  imgRegister: {
    minWidth: '100%',
    borderLeft: '8px solid #0FCDB2',
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }

  },
  checkBox: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLanding: {
    width: '13%',
    margin: '2.5rem auto',
    [theme.breakpoints.down('sm')]: {
      width: "27%",
    },
    [theme.breakpoints.down('md')]: {
      width: "20%",
    }
  },
  link: {
    marginTop: '1rem',
  },
  colorLink: {
    color: theme.palette.primary.main,
    '&:hover, &:focus, &:visited, &:link, &:active': {
      textDecoration: 'none',
      outline: 'none',
      color: theme.palette.primary.main,
    },
  },



}));