import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';

const cakes = [
    {
        label: 'Cakes',
        imgPath:
            '/picture/Pumpkin-Pie-Cheesecake-Slice-FTR-1024x640.jpg',
    },
    {
        label: 'ApplePieCake',
        imgPath:
            '/picture/applepie.jpg',
    },
    {
        label: 'BusterPie',
        imgPath:
            '/picture/Buster-Bar-Dessert-final-036-500x375.jpg',
    },
    {
        label: 'BostonCake',
        imgPath:
            '/picture/Boston-Cream-Pie5.jpg',
    },
    {
        label: 'ChocolateCakes',
        imgPath:
            '/picture/chocolatecake.jpg',
    },
];

const cofee = [
    {
        label: 'Cofee',
        imgPath:
            '/picture/allcofee.jpg',
    },
    {
        label: 'Cold Bew Coffee',
        imgPath:
            '/picture/chocolatecofe.jpg',
    },
    {
        label: 'Dalgona Coffee',
        imgPath:
            '/picture/dalgonacoffee.jpg',
    },
    {
        label: 'Chocolate Coffee',
        imgPath:
            '/picture/coffe.jpg',
    },
    {
        label: 'Coffee latte macchiato',
        imgPath:
            '/picture/kawalattemacchiato.jpg',
    },
];

const breakfast = [
    {
        label: 'Breakfast',
        imgPath:
            '/picture/breaak1.jpg',
    },
    {
        label: 'Breakfast',
        imgPath:
            '/picture/breakfast.jpg',
    },
    {
        label: 'Pancakes',
        imgPath:
            '/picture/pancakes.jpg',
    },
    {
        label: 'Scrambled eggs',
        imgPath:
            '/picture/crambledeg.jpg',
    },
    {
        label: 'Toast',
        imgPath:
            '/picture/tosty.jpg',
    },
];
const birthdaycake = [
    {
        label: 'Birthday Cake',
        imgPath:
            '/picture/happybirthday.jpg',
    },
    {
        label: 'Birthday Cake',
        imgPath:
            '/picture/sweetpink.jpg',
    },
    {
        label: 'Wedding Cake',
        imgPath:
            '/picture/Snapseed.jpg',
    },
    {
        label: 'Wedding Cake',
        imgPath:
            '/picture/justmarried.jpg',
    },
    {
        label: 'Split Cake',
        imgPath:
            '/picture/splitcake.jpg',
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        margin:theme.spacing(8)
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
    gallery: {
        textAlign: "center",
        textShadow: '1px 1px #020009'
    },

}));

export default function Gallery() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeStep1, setActiveStep1] = React.useState(0);
    const [activeStep2, setActiveStep2] = React.useState(0);
    const [activeStep3, setActiveStep3] = React.useState(0);
    const maxSteps = cakes.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext1 = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack1 = () => {
        setActiveStep1((prevActiveStep) => prevActiveStep - 1);
    };
    const handleNext2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep - 1);
    };
    const handleNext3 = () => {
        setActiveStep3((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack3 = () => {
        setActiveStep3((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{cakes[activeStep].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={cakes[activeStep].imgPath}
                    alt={cakes[activeStep].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                    }
                />
            </div>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{cofee[activeStep1].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={cofee[activeStep1].imgPath}
                    alt={cofee[activeStep1].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep1}
                    nextButton={
                        <Button size="small" onClick={handleNext1} disabled={activeStep1 === maxSteps - 1}>
                            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack1} disabled={activeStep1 === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                    }
                />
            </div>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{breakfast[activeStep2].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={breakfast[activeStep2].imgPath}
                    alt={breakfast[activeStep2].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep2}
                    nextButton={
                        <Button size="small" onClick={handleNext2} disabled={activeStep2 === maxSteps - 1}>
                            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack2} disabled={activeStep2 === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                    }
                />
            </div>
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{birthdaycake[activeStep3].label}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={birthdaycake[activeStep3].imgPath}
                    alt={birthdaycake[activeStep3].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep3}
                    nextButton={
                        <Button size="small" onClick={handleNext3} disabled={activeStep3 === maxSteps - 1}>
                            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack3} disabled={activeStep3 === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                    }
                />
            </div>
        </Grid>
    );
}