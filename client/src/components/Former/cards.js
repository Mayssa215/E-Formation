import React, { useState,useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Filter9PlusIcon from '@material-ui/icons/Filter9Plus';
import useStyles from "./styles";

const Cards = ({Former}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
     
        
       <CardHeader
        avatar={ <Avatar className={classes.avatar} src= {Former.selectedimage}>
            
                </Avatar>
        }     />
      
    <CardContent >
        <div className={classes.formatdate}>
        <span className={classes.title1}>{Former.firstname} </span>
        <span className={classes.title2}>{Former.lastname} </span>

        </div>
       
        <div className={classes.place}>
           <WbIncandescentIcon className={classes.Placeicon} />   
           <span className={classes.lieu}>  Domaine :  { Former.namespeciality}</span>
        </div>
        <div className={classes.place}>
          <Filter9PlusIcon className={classes.Placeicon} />
          <span className={classes.nbh}> Expérience : {Former.Numbreofexperience} Ans</span>
          
      
          </div>
      </CardContent>
      <CardActions className={classes.btns}>
        <Button className={classes.buttonVoir} variant="outlined" size="large" href={`/formateur/${Former._id}`}>
          Details
        </Button>
       
      </CardActions>

    </Card>
  );
};
export default Cards;