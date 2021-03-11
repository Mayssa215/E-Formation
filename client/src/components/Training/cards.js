import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
} from "@material-ui/core";

import PlaceIcon from "@material-ui/icons/Place";
import PeopleIcon from "@material-ui/icons/People";
import moment from "moment";

import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";
const Cards = ({ Training}) => {


  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
             {Training.coach.substr(0, 1)}
                </Avatar>
        }
      title={Training.nomformation}
        subheader={moment(Training.date).format("L")} 


      />
      <CardMedia className={classes.media} image={Training.selectedFile}  />
      <Typography className={classes.price} > <span className={classes.prix}>{Training.prix}TND </span></Typography>​ ​
      <CardContent className={classes.MuiCardContentroot}>
        ​
        <Typography >
          <PlaceIcon className={classes.Placeicon} />
          {Training.lieu}
        </Typography>
          <Typography  >
            <PeopleIcon className={classes.Placeicon}/>
            {Training.Nombredeplace}
            </Typography>
    
        ​
      </CardContent>
      <CardActions>
        <Button className={classes.buttonVoir} variant="outlined">
          Voir details
        </Button>
      </CardActions>
      ​
    </Card>
  );
};
export default Cards;