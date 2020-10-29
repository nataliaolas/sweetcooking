import { makeStyles, withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 6,
    },
    menuButton: {
      marginRight: theme.spacing(7),
      backgroundColor: '#fcfafb'
    },
    appbar: {
      backgroundColor: '#fcfafb'
    },
    typography: {
      color: '#1a1417',
      fontFamily: "MyWebFont",
      letterSpacing: "0.08em",
      position: "relative",
      left: "50px",
      textShadow: '1px 1px #020009'
    },
    homie: {
      color: '#1a1417',
      fontFamily: "MyWebFont",
      letterSpacing: "0.08em",
      marginRight: theme.spacing(2),
      position: "relative",
      left: "550px"
    },
    about: {
        textAlign: "center",
        textShadow: '1px 1px #020009'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    rot: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
    roots: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
  }));
  