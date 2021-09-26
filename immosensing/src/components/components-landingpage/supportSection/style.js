import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    mainCont:{
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection:'column',
        height:'100vh'
    },
    mainContainerWho: {
        width: '80%', 
        margin: '1rem auto 2rem',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height:'100vw'
        },
    },
    titlePresentation:{
        margin: 'auto',
        textAlign: 'center',
    },
    supportTitle:{
        marginBottom: theme.spacing(4),
    },
    containerText:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
    },
    containerTextPresentation:{
        margin:'1rem',
    },
    textParagraph:{
        margin: '2rem auto',
        padding: '2rem',
        fontSize: '1.2rem',
    },

    root: {
        flexGrow: 1,
        width: '50%',
        // backgroundColor: ' #0FCDB2',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    header: {
        display: 'none',
        alignItems: 'center',
        paddingLeft: theme.spacing(4),
    },
    img: {
        height: '60vh',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    btnBottomSupport:{
        display:'none'
    },

}));