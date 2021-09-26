import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    // mainCont:{
    //     padding: '5rem 4rem',
    //     height:'100vh',
    //     [theme.breakpoints.down('sm')]: {
    //         padding: '2rem 2rem',
    //         height:'100vh',
    //     },

    // },
    mainContainerAll:{
        width:'80%',
        margin:'2rem auto'
    },
    mainCon: {
        width: '60%', 
        margin: 'auto',
        height:'100vh',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
        },
    },
    titlePresentation:{
        width:'100%',
        margin:' auto',
        paddding:'3rem',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            margin:'2rem auto',
        },

    },
    containerText:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
        marginTop:'3rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    // containerTextPresentation:{
    //     margin:'1rem',
    // },
    textParagraph:{
        margin: '2rem auto',
        padding: '2rem',
        fontSize: '1.2rem',
        width: '70%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 'auto',
            textAlign:'center'
        },
        [theme.breakpoints.down('md')]: {
            // width: '90%',
            // margin: 'auto',
            // textAlign:'center'
            },

        
    },

    root: {
        flexGrow: 1,
        minWidth: '50%',
        margin: '1rem',
    },
    header: {
        display:'none',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        
    },
    btnImgBottom:{
     display:'none',
    },
    img: {
        height: '50vh',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    [theme.breakpoints.up('md')]: {
        width: '75%',
        margin: 'auto',
        },


}));