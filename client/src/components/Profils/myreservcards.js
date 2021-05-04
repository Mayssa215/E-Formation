import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
   TextField,
       FormLabel
} from "@material-ui/core";
import HistoryIcon from '@material-ui/icons/History';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import Menu from '@material-ui/core/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SmsIcon from '@material-ui/icons/Sms';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import {Annuleréservation, réservationCancled} from '../../actions/booking';
import { useDispatch } from 'react-redux';
const Cards = ({ Training, Tableids , Tablevalider}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const iduser = user?._id;
  const phone = user?.phone;
  const idtraining= Training._id;
  const [open, setOpen] = React.useState(false);
  const [favoris, setfavoris] = useState(false);
  const  dispatch = useDispatch();
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };
  const Handleclick = () => {
    dispatch(Annuleréservation(iduser,idtraining));

    setOpen(!open);
    window.location.reload(false);
    }
 
      const handleClose = () => {
    setOpen(false);
  }
  const Annuler= () =>{
    dispatch( réservationCancled(iduser,idtraining));
    window.location.reload(false);
   
  }

  const Avis = () => {
    window.location.replace(`/formation/${Training._id}/#section1`)
  }
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.svg}>
          <div className={classes.Container}>
            
          <div className={classes.price}>
        
          <span  className={classes.prix}>{Training.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
          </div>
          <div>
          <ReactLogo className={classes.mauve} />
          </div>
          </div>
        </div>
        <CardMedia className={classes.media} image={Training.selectedimage} />
      </div>
      
    <CardContent >
        <div className={classes.formatdate}>
        <span className={classes.title}>{Training.name} </span>
        </div>
        <div className={classes.place}>
           <PlaceIcon className={classes.Placeicon} /> 
           <span className={classes.lieu}>{Training.namecity}</span>
        </div>
          <div className={classes.place}> 
          <CalendarTodayIcon className={classes.Placeicon} />
          <span className={classes.duree}>Du {moment(Training.firstdate).format("DD-MM-yyyy")} au {moment(Training.lastdate).format("DD-MM-yyyy")} </span>
          </div>
          <div className={classes.place}>
          <PeopleIcon className={classes.Placeicon} />
          <span className={classes.nbh}>{Training.numberplace}</span>
          </div>

      </CardContent>
      <CardActions className={classes.btns}>
        <Button className={classes.buttonVoir} variant="outlined" size="large" href={ `/formation/${Training._id}`} >
          Details
        </Button>
        
      
      { user?.Role ==="client" && Tablevalider && ( Tablevalider.indexOf(Training._id) > -1 )  ? 
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        <Button  className={classes.btnupdates} {...bindTrigger(popupState)} >
        <MoreVertIcon className={classes.iconupdates}/>
        </Button>
        <Menu {...bindMenu(popupState)}>
            <MenuItem   onClick={Annuler}> Annuler la réservation  <CancelIcon  className={classes.iconsu1}/></MenuItem>
            <MenuItem  onClick={Avis}> Laisser un avis  <SmsIcon  className={classes.iconsu}/></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
        : user?.Role ==="client" && Tableids && ( Tableids.indexOf(Training._id) > -1 ) ?   <Button className={classes.btnreservez}   onClick={handleOpen} variant="outlined" size="large">
        < HistoryIcon className={classes.booked} />  en attente   
    
        
      </Button> : null  }

            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper1}>
                    <div className={classes.titleicon}>
                        <Button
                            className={classes.openicon}
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <CloseIcon className={classes.iconclose} />
                        </Button>
                    </div>
                    <Grid container>
                    <Grid item xs={12} lg={8} sm={4} md={4} >
                    <Typography >Voulez vous vraiment annuler cette réservation ? </Typography> 
                        </Grid>   
                        <Grid item xs={12} lg={8} sm={4} md={4}>
                            <div className={classes.buttonac}>
                        <Button className={classes.confirmer} onClick={Handleclick}>Confirmer </Button>

                            <Button className={classes.Annuller} onClick={() => {
                            setOpen(!open);
                            }}>Annuler</Button>
                            </div>
                        </Grid>
                        </Grid>
                </div>

            </Fade>
        </Modal>
      </CardActions>
    </Card>
  );
};
export default Cards;