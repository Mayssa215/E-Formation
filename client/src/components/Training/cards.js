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
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg'

const Cards = ({ Training}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.svg}>
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
      
    <CardContent >
        <div className={classes.formatdate}>
        <span className={classes.title}>{Training.nomformation} </span>
        </div>
        <div className={classes.place}>
           <PlaceIcon className={classes.Placeicon} /> 
           <span className={classes.lieu}>{Training.citynom}</span>
        </div>
          <div className={classes.place}> 
          <CalendarTodayIcon className={classes.Placeicon} />
          <span className={classes.duree}>Du {moment(Training.firstdate).format("DD-MM-yyyy")} au {moment(Training.lastdate).format("DD-MM-yyyy")} </span>
          </div>
          <div className={classes.place}>
          <PeopleIcon className={classes.Placeicon} />
          <span className={classes.nbh}>{Training.Nombredeplace}</span>
          </div>

      </CardContent>
      <CardActions className={classes.btns}>
        <Button className={classes.buttonVoir} variant="outlined" size="large">
          Details
        </Button>
        <Button className={classes.btnreservez} variant="outlined" size="large">
          Réservez
        </Button>
      </CardActions>

    </Card>
  );
};
export default Cards;