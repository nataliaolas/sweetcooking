import { Grid, Typography, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    menu: {
        textAlign: "center",
        textShadow: '1px 1px #020009'
    },
    foods: {
        textAlign: "center",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    typo: {
        textAlign: "center"
    },
    typos: {
        textAlign: "center",
        fontWeight: "bold"
    },
}));
export default function Menus() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Grid>
                <Paper>
                    <Typography variant="h5" className={classes.menu}> {bull}MENU{bull} </Typography>
                    <Typography variant="h5" className={classes.foods} color="textSecondary"> Cakes </Typography>
                    <Grid container >
                        <Grid item xs={6}>
                            <Typography className={classes.typos} >
                                Products
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typos} >
                                Price
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Cake
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Cake
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Cake
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Cake
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Cake
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h5" className={classes.foods} color="textSecondary"> Breakfast </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Breakfast
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Breakfast
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Breakfast
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Breakfast
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h5" className={classes.foods} color="textSecondary"> Drinks </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Drinks
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Drinks
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Drinks
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                Drinks
        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.typo}>
                                5
        </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
};