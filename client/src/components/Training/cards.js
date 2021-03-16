import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";
import { getTraining } from "../../actions/training";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg'

const Cards = ({ Training }) => {
  const  dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.svg}>
          {/* <Avatar className={classes.avatar}>
            {Training.coach.substr(0, 1).toUpperCase()}
          </Avatar> */}
          <div className={classes.Container}>
          <div className={classes.price}>
          <span  className={classes.prix}>{Training.prix}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
          </div>
          <div>
          <ReactLogo className={classes.mauve} />
          </div>
          </div>
        </div>
        <CardMedia className={classes.media} image={Training.selectedFile} />
      </div>
      
    <CardContent className={classes.MuiCardContentroot}>
        <div className={classes.formatdate}>
        <span className={classes.title}>{Training.nomformation} </span>
        {/* <div>
        <span className={classes.date}>{moment(Training.date).format("L")}</span>
        </div> */}
        </div>
           <div  className={classes.icons}>
          <PlaceIcon className={classes.Placeicon} />
          <PeopleIcon className={classes.Placeicon} />
          <AccessTimeIcon className={classes.Placeicon} />
          </div>
          
        <Typography className={classes.items} >
         <span className={classes.lieu}>{Training.citynom}</span>
           <span className={classes.nbh}>{Training.Nombredeplace}</span>
         <span className={classes.nbh}>{Training.duree} heures</span>
       
        </Typography>
         
        {/*    title= { }
        subheader=  */}


      </CardContent>
      <CardActions>
        <Button className={classes.buttonVoir} variant="outlined" size="large">
          details
        </Button>
      </CardActions>

    </Card>
  );
};
export default Cards;