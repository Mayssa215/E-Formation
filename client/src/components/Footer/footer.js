import React from "react";
import useStyles from "./styles";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}>
        <Toolbar>
          <div className={classes.toolbar}>
            <div className={classes.div1}>
              <h2 className={classes.title}>E-Formation.tn</h2>
              <Typography className={classes.paragraph}>
                  E-Formation est une plateforme en ligne spécialisée dans la
                  vente des formations en présentiel. Grâce à E-Formation.tn,
                  vous allez pouvoir apprendre tout ce que vous voulez dans
                  n'importe quel domaine.
              </Typography>
            </div>
            <div>
              <h2 className={classes.contact}>Contacts</h2>
              <div >
                <div className={classes.div2}>
                  <MailOutlineIcon className={classes.size2}  />
                </div>
                <div className={classes.div2}>
                  <PhoneInTalkIcon  className={classes.size2}/>
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
        <div className={classes.media}>
          <h2 className={classes.suivez}>Suivez Nous </h2>

          <div className={classes.socialMedia}>
            <FacebookIcon className={classes.Size} />
            <LinkedInIcon className={classes.Size} />
            <InstagramIcon className={classes.Size} />
          </div>
      
        </div>
        <div >
        <hr className={classes.copyright} />
        <span className={classes.copyrightext}>Copyright @ 2021 E-formation. Tous les droits sont réservés</span>
        </div>
      </AppBar>
    </Container>
  );
};
export default Footer;