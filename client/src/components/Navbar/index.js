import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  Avatar,

} from "@material-ui/core";
import { ReactComponent as Graduate } from "../Pictures/graduate.svg";
import { ReactComponent as Teacher } from "../Pictures/teacher.svg";
import { ReactComponent as Home } from "../Pictures/home.svg";
import { ReactComponent as Centre } from "../Pictures/mall.svg";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./styles";

import { Menu } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = () => {

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [token, settoken] = useState(localStorage.getItem('token'));

  const [anchorell, setanchorell] = useState(null);
  const handleClick = (event) => {
    setanchorell(event.currentTarget);
  };

  const handleClose = () => {
    setanchorell(null);
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const logout = () => {
    console.log('ici');
    dispatch({ type: 'logout' });
    history.push('/signin');
    setUser(null);
  };

  const Profil = () => {
    history.push('/myaccount');
  };
  useEffect(() => {
    if (token) {
      const tokendecode = decode(token);
      if (tokendecode.exp * 1000 < new Date().getTime()) logout();
    }
    settoken(localStorage.getItem('token'));

  }, [location]);


  const links = [
    { link: "Accueil", path: '/', id: "1", icon: <Home /> },
    { link: "Formations", path: '/formations', id: "2", icon: <Graduate /> },
    { link: "Formateurs", path: '/formateurs', id: "3", icon: <Teacher /> },
    { link: " Centres de formations", path: '/centredeformation', id: "4", icon: <Centre /> },
    user ?
      { link: " Mes  formations", path: '/mesformations', id: "5" } : { link: '', path: '/', id: "" }
  ];

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {


    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);


  useEffect(() => {
    if (drawerOpen) {
      document.getElementById("idnav").style.display = "none";

    }
    else {
      document.getElementById("idnav").style.display = "block";

    }

  });
  useEffect(() => {
    if (mobileView) {
      document.getElementById("idnav").style.display = "none";

    }
    else {
      document.getElementById("idnav").style.display = "block";

    }

  });

  const displayMobile = () => {

    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",

            onClick: handleDrawerOpen,
          }}
        >
          <Menu />
        </IconButton>
        <Drawer
          open={drawerOpen}

        >
          <div className={classes.logo}>
            <Menu className={classes.iconmenu} />
            <Button onClick={handleDrawerClose}  >
              <CloseIcon className={classes.iconopenclose} /></Button>


          </div>

          <div className={classes.typicon}>
            {links.map((l) => (

              <Typography variant="h6" key={l.id} >
                <Link underline="none" href={l.path} onClick={() => { }}>
                  <div className={classes.divicon}>
                    <span className={classes.icons}> {l.icon}</span>
                    <span className={classes.linkicon}> {l.link}</span>
                  </div>
                </Link>

              </Typography>
            ))}

            <Button className={classes.buttonmobile} size="large" variant="contained">Connexion</Button>
          </div>
        </Drawer>

      </Toolbar>
    );
  };



  const displayDesktop = () => {
    <AppBar >

      <Toolbar  >
        <div id="idnav">
          <div className={classes.linksContainer}>
            {links.map((l) => (
              <Typography variant="h6" key={l.id} className={classes.title1}>
                <Link className={classes.links} underline="none" href={l.path} onClick={() => { }}>
                  {l.link}
                </Link>
              </Typography>
            ))}
          </div>
          </div>
        {user ?
          <div>

            <Button className={classes.btn} onClick={handleClick} >
              <div className={classes.avatardesgin}>
                <Avatar alt={user?.email} src={user?.selectedimage}>{user?.lastname.charAt(0)}</Avatar>
                <ArrowDropDownIcon className={classes.arrow} />
              </div>
            </Button>
            <Menus
              id="simple-menu"
              anchorEl={anchorell}
              keepMounted
              open={Boolean(anchorell)}
              onClose={handleClose}
            >
              <MenuItem onClick={Profil} className={classes.item}> <PersonOutlineIcon className={classes.iconuser} /> Profil</MenuItem>
              <MenuItem onClick={logout} className={classes.item} > <ExitToAppIcon className={classes.iconuser} /> Déconnexion</MenuItem>
            </Menus>


          </div>
          :
null        }
           
      </Toolbar>
    </AppBar>
  };

  return (
    <Container maxWidth="lg">

      <AppBar className={classes.appBar} >

        <Toolbar className={classes.toulBar}>
          {mobileView ? displayMobile() : displayDesktop()}

          <div id="idnav">
            <div className={classes.linksContainer}>
              {links.map((l) => (
                <Typography variant="h6" key={l.id} className={classes.title1}>
                  <Link className={classes.links} underline="none" href={l.path} onClick={() => { }}>
                    {l.link}
                  </Link>
                </Typography>
              ))}


            </div>

            </div>
          {user ?
            <div  >
              <Button className={classes.btn} onClick={handleClick}>
                <div className={classes.avatardesgin}>
              <Avatar alt={user?.email} src={user?.selectedimage}>{user?.lastname.charAt(0)}</Avatar>
                  <ArrowDropDownIcon className={classes.arrow} />
                </div>
              </Button>
              <Menus
                id="simple-menu"
                anchorEl={anchorell}
                keepMounted
                open={Boolean(anchorell)}
                onClose={handleClose}
                className={classes.menus}
              >
                <MenuItem onClick={Profil} className={classes.item}> <PersonOutlineIcon className={classes.iconuser} /> Mon profil</MenuItem>
                <MenuItem onClick={logout} className={classes.item}> <ExitToAppIcon className={classes.iconuser} /> Déconnexion</MenuItem>
              </Menus>
              {/*             <Typography  variant="h6">{user?.result.prenom}</Typography>
           <Button variant="contained" color="secondary" onClick={logout} >Déconnexion</Button> */}
            </div>
            :
            <Button className={classes.button} href="/signin" size="medium" variant="contained">Connexion</Button>

          }
           
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Navbar;