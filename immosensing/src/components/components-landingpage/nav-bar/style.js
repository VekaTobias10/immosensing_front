
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    mainNavBar: {
        display: 'flex',
    },
    containerNavBar:{
        display:'flex',
        alignItems: 'center'

    },

    logoLanding: {
        width: '8%',
    },

    containerList :{
        display:'flex'
    },
    listItem:{
        textDecoration: 'none'
    }

}));