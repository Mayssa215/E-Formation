import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./index.css";

const Footer = () => {
  return(
  <footer className="footer">
   <div className="toolbar">

   <div className="div1">
     <h2 className="paragraph1">E-Formation.tn</h2>
              <Typography  className="paragraph">
                  E-Formation est une plateforme en ligne spécialisée dans la
                  vente des formations en présentiel. Grâce à E-Formation.tn,
                  vous allez pouvoir apprendre tout ce que vous voulez dans
                  n'importe quel domaine.
              </Typography></div>

            

              <div>
              <h2 className="contact">Contacts</h2>
              <div >
                <div className="div2">
                  <MailOutlineIcon className="size2"  />
                </div>
                <div className="div2">
                  <PhoneInTalkIcon className="size2"  />
                </div>
              </div>
            </div>








            </div> 
             <div className="media">
          <h2 className="suivez">Suivez Nous </h2>

          <div className="socialMedia">
            <FacebookIcon className="Size"/>
            <LinkedInIcon className="Size" />
            <InstagramIcon className="Size" />
          </div>
      
        </div>
        <div >
        <hr className="copyright" />
        <span className="copyrightext">Copyright @ 2021 E-formation | Tous droits réservés</span>
        </div>
            
            </footer>
);}
export default Footer; 