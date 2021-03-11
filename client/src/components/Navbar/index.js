import React ,{ useState, useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Link,
  
} from "@material-ui/core";
import useStyles from "./styles";

import {Menu} from '@material-ui/icons';



const Navbar = () => {

  const classes = useStyles();


  const links = [
    { link: "Accueil", path: '/', id: "1" },
    { link: "Formations", path: '/formations', id: "2" },
    { link: "Formateurs", path: '/formateurs', id:"3" },
    { link: " Centres de formations", path: '/centredeformation', id:"4" },
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


useEffect ( () => {
if(drawerOpen)
{
  document.getElementById("idnav").style.display = "none";

}
else{
  document.getElementById("idnav").style.display = "block";

}

});
useEffect ( () => {
  if(mobileView)
  {
    document.getElementById("idnav").style.display = "none";
  
  }
  else{
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

            onClick:handleDrawerOpen,
          }}
        >
          <Menu  />
        </IconButton>
        <Drawer  anchor="left" 
            open= {drawerOpen }
            onClose= { handleDrawerClose }     
        >
          <div >
          {links.map((l) => (
              <Typography variant="h6" key={l.id} >
                <Link className={classes.titlebar}  underline="none" href={l.path} onClick={()=>{}}>
                  {l.link} 
                </Link>

              </Typography>
            ))}
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
            <Link className={classes.links} underline="none" href={l.path} onClick={()=>{}}>
              {l.link}
            </Link>
          </Typography>
        ))}
      </div>
      </div>
      <Button className={classes.button} size="medium" variant= "contained">Connexion</Button>
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
            <Link className={classes.links} underline="none" href={l.path} onClick={()=>{}}>
              {l.link}
            </Link>
              </Typography>
            ))}
          </div>
          </div>
          <Button className={classes.button} size="small" variant= "contained">Connexion</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
export default Navbar;