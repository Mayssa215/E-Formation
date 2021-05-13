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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Fade from '@material-ui/core/Fade';
import CloseIcon from "@material-ui/icons/Close";
import Radio from '@material-ui/core/Radio';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import IconButton from '@material-ui/core/IconButton';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import {Reserverformation} from '../../actions/booking';
import { Favoritetraining,Deletefavoritetraining } from '../../actions/favorite';
import { useDispatch } from 'react-redux';
const Cards = ({ Training, Tableids ,Tablefav, Tablevalider, Tableannuler}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const iduser = user?._id;
  const phone = user?.phone;
  const idtraining= Training._id;
  const [RerservationData, setRerservationData]= useState({ iduser,phone,idtraining,status:''});
  const [favoritedata, setfavoritedata]= useState({iduser, idtraining});
  const [open, setOpen] = React.useState(false);
  const [favoris, setfavoris] = useState(false);
  const [favoris1, setfavoris1] = useState(false);

  const  dispatch = useDispatch();
  const [anuuler, setannuler] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const Handleclick = () => {
   
    dispatch(Reserverformation(idtraining,RerservationData));
    setannuler(true);
    setOpen(!open);
    }
    const handlefavoris = () => {
      dispatch(Favoritetraining(favoritedata));
      setfavoris(true);
      
    }

    const handleannulerfavoris = () => {
      dispatch(Deletefavoritetraining(iduser,idtraining));
      setfavoris(false);
    }
    const handleannulerfavoris1 = () => {
      dispatch(Deletefavoritetraining(iduser,idtraining));
      setfavoris1(true);
    }
    const handleClose = () => {
    setOpen(false);
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
 { user?.Role==="client"  && !favoris &&  Tablefav && ( Tablefav.indexOf(Training._id) ===-1 ) ?
          <IconButton  onClick={handlefavoris}>
          <FavoriteBorderIcon  className={classes.favoris}/>
          </IconButton>
: user?.Role==="client" && favoris ? <IconButton   onClick={handleannulerfavoris} >
<FavoriteIcon  className={classes.favoris}/>
</IconButton>  
: user?.Role==="client"  && favoris1 && Tablefav && (Tablefav.indexOf(Training._id) > -1 )  ?
   <IconButton  onClick={handlefavoris}>
   <FavoriteBorderIcon  className={classes.favoris}/>
   </IconButton>
 : user?.Role ==="client"  && !favoris1 && Tablefav && (Tablefav.indexOf(Training._id) > -1 ) ? <IconButton   onClick={handleannulerfavoris1} >
 <FavoriteIcon  className={classes.favoris}/>
 </IconButton> 
   :
  null}
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
        
      
      { user?.Role ==="client" && Tablevalider && ( Tablevalider.indexOf(Training._id) > -1 )  ?  <Button className={classes.btnreservez}  variant="outlined" size="large">
       < CheckCircleIcon className={classes.booked}  /> Réservée
      </Button>   
        : user?.Role ==="client" && Tableids && ( Tableids.indexOf(Training._id) > -1 ) ?   <Button className={classes.btnreservez}  variant="outlined" size="large">
        < HistoryIcon className={classes.booked} />  en attente   
        
      </Button> : user?.Role === "client"  &&  anuuler ?  <Button className={classes.btnreservez}   variant="outlined" size="large">
      < HistoryIcon  className={classes.booked} />  en attente  
        
      </Button> :   user?.Role === "client"  && Tableannuler  && ( Tableannuler.indexOf(Training._id) > -1 ) ?  <Button className={classes.btnreservez}  onClick={handleOpen}  variant="outlined" size="large">
        Réservez  
        
      </Button> : 
      user?.Role==="formateur" || user?.Role==="centre"? null   :  <Button className={classes.btnreservez}   variant="outlined" size="large" onClick={handleOpen} > 
      Réservez  
      
    </Button>  }

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
                    <Typography >Réserver Formation</Typography> 
                     <TextField name="phone" label="Numéro de téléphone" type="string" variant="outlined" value={RerservationData.phone} onChange={(e)=> setRerservationData({...RerservationData, phone: e.target.value})} className={classes.phonenumber}> </TextField>
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