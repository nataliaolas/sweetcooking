import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Container,
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Menus from './Components/Menu';
import AboutUS from './Components/AboutUS';
import Map from './Components/Map';
import Gallery from './Components/Gallery';
import Layout from './Components/Layout';
import {
  home,
  aboutus,
  gallery,
  menu,
  location
} from "./common/routes.js";

const useStyles = makeStyles((theme) => ({
 
  footer: {
    textAlign: "center"
  }
}));

export default function AppBars() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Layout />
        <Container>
          <Switch>
            <Route path={home} component={Home} />
            <Route path={aboutus} component={AboutUS} />
            <Route path={menu} component={Menus} />
            <Route path={gallery} component={Gallery} />
            <Route path={location} component={Map} />
          </Switch>
        </Container>
        <footer className={classes.footer}>@natalia olas</footer>
      </div>
    </Router>
  );
}