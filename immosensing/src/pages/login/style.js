import { makeStyles } from '@material-ui/core/styles';



export const useStyles = makeStyles((theme) => ({
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
    width: "100%",
    margin:'auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      margin:0
    }
  },
  // singupContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "100%",
  //   padding: "2rem",
  // },
  // singupTitle: {
  //   fontWeight: "400",
  //   fontStyle: "normal",
  //   fontSize: "2rem",
  //   color: "#9E9E9E",
  //   margin: "1.5rem 0rem",
  // },
  // singupParagraph: {
  //   fontWeight: "400",
  //   fontStyle: "normal",
  //   fontSize: "1.1rem",
  //   color: "#9E9E9E",
  //   lineHeight: "2rem",
  //   letterSpacing: "0.009rem",
  //   maxWidth: "58%",
  // },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
    width: '40%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    }
  },
  margin: {
    margin: theme.spacing(1),
    height: "2.7rem",

  },
  buttonlogin: {
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      marginTop: "2rem",
    }
  },

imgRegister:{
    minWidth:'100%',
    height: '100vh',
    borderLeft: '8px solid #0FCDB2',
    [theme.breakpoints.down('sm')]: {
      display: "none",
    }

},
checkBox:{
    display: 'flex',
    alignItems: 'center',
},
logoLanding: {
    width: '13%',
    margin:'0 auto 1rem',
    [theme.breakpoints.down('sm')]: {
      width: "50%",
    }
},
link:{
    marginTop: '1rem',
},


}));