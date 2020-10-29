import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Container,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Home from './Home';
import Menus from './Menu';
import AboutUS from './AboutUS';
import Map from './Map';
import Gallery from './Gallery';
import {
  home,
  aboutus,
  gallery,
  menu,
  location
} from "../common/routes";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
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
  footer: {
    textAlign: "center"
  }
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Layout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(null);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  return (
    <AppBar position="relative" height="30px" className={classes.appbar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={handleClick}>
          <ArrowDropDownIcon />
        </IconButton>
        <div textAlign="center">
          <StyledMenu
            id="customized-menu"
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon >
                <InstagramIcon />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
            </StyledMenuItem>
          </StyledMenu>
        </div>
        <Typography variant="h4" className={classes.typography}>
          Sweet  <br /> Cooking <FavoriteBorderIcon />
        </Typography>
        <Link to={home}><Button className={classes.homie}>Home</Button></Link>
        <Link to={aboutus}><Button className={classes.homie}>About us</Button></Link>
        <Link to={gallery}><Button className={classes.homie}>Gallery</Button></Link>
        <Link to={menu}><Button className={classes.homie}>MENU</Button></Link>
        <Link to={location}><Button className={classes.homie}><LocationOnIcon /></Button></Link>
      </Toolbar>
    </AppBar>
  )
};