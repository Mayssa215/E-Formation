import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
  Grid,
  TextField,
  FormLabel
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import PlaceIcon from "@material-ui/icons/Place";
import moment from "moment";
import HistoryIcon from '@material-ui/icons/History';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg'
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
import PeopleIcon from "@material-ui/icons/People";
import IconButton from '@material-ui/core/IconButton';
import {Reserverformation} from '../../actions/booking';
import { Favoritetraining,Deletefavoritetraining } from '../../actions/favorite';
const CardOne = ({  Training, Tableids ,Tablefav, Tablevalider, Tableannuler}) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const  dispatch = useDispatch();

  const iduser = user?._id;
  const phone = user?.phone;
  const idtraining= Training._id;
  const [RerservationData, setRerservationData]= useState({ iduser,phone, payement:'',idtraining});
  const [favoritedata, setfavoritedata]= useState({iduser, idtraining});
  const [open, setOpen] = React.useState(false);
  const [favoris, setfavoris] = useState(false);
  const [anuuler, setannuler] = useState(false);
  console.log(Tableids);
  const handleOpen = () => {
    setOpen(true);
  };
console.log(Tablefav)
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
      const handleClose = () => {
    setOpen(false);
  }
  const classes = useStyles();
  return (
    <Card className={classes.root1}>
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
 : user?.Role ==="client" && Tablefav && (Tablefav.indexOf(Training._id) > -1 ) ? <IconButton   onClick={handleannulerfavoris} >
 <FavoriteIcon  className={classes.favoris}/>
 </IconButton>  : null}
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
       
       
      { user?.Role ==="client" && Tablevalider && ( Tablevalider.indexOf(Training._id) > -1 )  ?  <Button className={classes.btnreservez}  variant="outlined" size="large">
       < CheckCircleIcon className={classes.booked}  /> Réservée
      </Button>   
         : user?.Role === "client"  &&  anuuler ?  <Button className={classes.btnreservez}   variant="outlined" size="large">
      < HistoryIcon  className={classes.booked} />  en attente  
        
      </Button> :   user?.Role === "client"  && Tableannuler  && ( Tableannuler.indexOf(Training._id) > -1 ) ?  <Button className={classes.btnreservez}  onClick={handleOpen}  variant="outlined" size="large">
        Réservez  
        
      </Button> : user?.Role ==="client" && Tableids && ( Tableids.indexOf(Training._id) > -1 ) ?   <Button className={classes.btnreservez}  variant="outlined" size="large">
        < HistoryIcon className={classes.booked} />  en attente   
        
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
                    <FormLabel className={classes.labels} component="legend">Informations de Payemenet</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={RerservationData.payement} onChange={ (e) => setRerservationData({ ...RerservationData, payement: e.target.value }) }>
              <div className={classes.radio}>
                  <FormControlLabel value="payer en avance " control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Payer en avance</span>} />
                  <FormControlLabel value="payer  le jour de formation " control={<Radio style={{ color: '#4e3e8c' }} />} label={<span className={classes.words} >Payer  le jour de formation </span>} />
                </div>
              </RadioGroup>
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
export default CardOne;