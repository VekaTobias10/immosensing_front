import { makeStyles } from '@material-ui/core/styles';
import photoFooter from "../../../assets/img/landingpage-img/pexels-bcn.jpg"


export const useStyles = makeStyles((theme) => ({
    footerContainer:{
     background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${photoFooter})`,
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'bottom',
     padding:'3rem',
     borderTop:'8px solid #0FCDB2',
     textAlign:'center',
     lineHeight:'2rem',
     color: 'white'
    },
}));