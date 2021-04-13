import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from "react-redux";
import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import useStyles from "./styles";
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import {deleteTraining} from '../../actions/training';
const Cards = ({ Training}) => {
  const  dispatch = useDispatch();
    const history = useHistory();
    const Update = () => {
        history.push(`/trainingupdate/${Training._id}`);
      };

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
        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
        <Button  className={classes.btnupdates} {...bindTrigger(popupState)} >
        <MoreVertIcon className={classes.iconupdates}/>
        </Button>
        <Menu {...bindMenu(popupState)}>
            <MenuItem  onClick={Update} > Modifier <EditIcon  className={classes.iconsu1}/></MenuItem>
            <MenuItem onClick={() => dispatch(deleteTraining(Training._id)) }> Supprimer <DeleteOutlineIcon  className={classes.iconsu}/></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
      </CardActions>

    </Card>
  );
};
export default Cards;