import React,{useState} from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  
  
} from "@material-ui/core";
import useStyles from './styles';
import { Filtrerfavorite } from '../../actions/favorite';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as ReactLogo } from '../Pictures/Tracé 3.svg';
import { useDispatch } from 'react-redux';


const  Cards = ({ Training }) => {
  const classes = useStyles();
  const  dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const iduser = user?._id;
  const idtraining= Training._id;
  const [favoris, setfavoris] = useState(false);
  const supprimerfavoris =() => {
    dispatch(Filtrerfavorite(iduser,idtraining));

  }

  return (
    <Card className={classes.root3}>
      <div>
     <div className={classes.svg}>
    <div className={classes.Container}>
            
 <div className={classes.price}>
        
          <span  className={classes.prix}>{Training.price}</span>
          <br/>
          <span className={classes.tnd}>TND</span>
           </div>
          <div>
          <ReactLogo className={classes.mauve1} />
          </div>
        </div>
        <CardMedia
        className={classes.cover}
        image={Training.selectedimage}
      />       
       </div>
      
         <CardContent className={classes.content}>
        <Typography variant="subtitle1" color="textSecondary">
        {Training.namecategorie}  
        </Typography>
          <Typography component="h5" variant="h5">
            {Training.name}
          </Typography>
          <Typography>{Training.description}</Typography>
          <div className={classes.disp}>
          <IconButton  onClick={supprimerfavoris}  >
<FavoriteIcon className={classes.favoris} />
</IconButton> 
<div>
<Button className={classes.buttonVoir} variant="outlined" size="large" href={ `/formation/${Training._id}`} >
          Details
        </Button>
        </div>
</div>
        </CardContent>
        <CardActions >
        </CardActions>
        
       </div>
    </Card>
  );
}
export default Cards;