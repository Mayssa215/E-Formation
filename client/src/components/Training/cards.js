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
      <Typography className={classes.prix}> {Training.prix}TND  </Typography>​ ​
      <CardContent>
        ​
        <Typography variant="h6" gutterBottom>
          <PlaceIcon fontSize="large" />
          {Training.lieu}
        </Typography>
        <div>
          <Typography variant="h6" gutterBottom>
            <PeopleIcon fontSize="large" />
            {Training.Nombredeplace}
            </Typography>
        </div>
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