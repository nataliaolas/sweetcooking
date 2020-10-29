import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
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

const images = [
    {
        url: '/picture/allcofee.jpg',
        title: 'Atmosphere',
        width: '30%',
    },
    {
        url: `/picture/localization.jpg`,
        title: 'Great Localization',
        width: '30%',
      },
      {
        url: '/picture/waitress.jpg',
        title: 'Nice waiters',
        width: '30%',
      },
      {
        url: '/picture/images.jpg',
        title: 'Childrens corner',
        width: '30%',
      },
      {
        url: 'picture/coffee_opener.jpg',
        title: 'Coffee',
        width: '30%',
      },
    {
        url: `/picture/breaak1.jpg`,
        title: 'Breakfast',
        width: '30%',
    },
    {
        url: '/picture/Pumpkin-Pie-Cheesecake-Slice-FTR-1024x640.jpg',
        title: 'Cakes',
        width: '30%',
    },
    {
        url: '/picture/menringuecake.jpg',
        title: 'Menringue Cakes',
        width: '30%',
    },
    {
        url: 'picture/happybirthday.jpg',
        title: 'Birthday Cakes',
        width: '30%',
    },
    {
        url: '/picture/desserts.jpg',
        title: 'Desserts',
        width: '30%',
    },
    {
        url: 'picture/drinks.jpg',
        title: 'Drinks',
        width: '30%',
    },
    {
        url: '/picture/Ice_cream_fifty_licks.jpg',
        title: 'Ice Cream',
        width: '30%',
    },
];


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.roots}>
            {images.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
        </div>
    );
}