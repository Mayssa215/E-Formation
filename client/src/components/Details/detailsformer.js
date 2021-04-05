import React ,{ useState, useEffect } from "react";
import CardOne from "../Former/cardone";
import useStyles from './styles';

import {Grid, Paper} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getOneFormer} from '../../actions/former';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FaceIcon from '@material-ui/icons/Face';
const DetailsFormer = () => {
    const dispatch = useDispatch();
    const [OneFormer, setOneFormer] = useState([]);
    const url = window.location.href;
    console.log(url);
const idformer = url.substr(29);
console.log('former');
useEffect(() => {
    
    dispatch(
        getOneFormer(idformer )
    ).then((res) => {
        setOneFormer(res.OneFormer);

    });

  }, [dispatch]);
 





const classes = useStyles();



return (
    <div className={classes.root} >
        
              
        < Grid container >
       <Grid item lg={6}> 
       <Paper elevation={3} className={classes.paper}>
    
    
       <div className={classes.div1}>
               <h3 className={classes.resumé}>Résumé : </h3>
               {OneFormer.map((e)=>
               <span className={classes.resumformer}>{e.description}</span>)}
           </div>
           <div className={classes.div2}>
               <h3 className={classes.propriéte}>Sexe : </h3>
               {OneFormer.map((e)=>
               <span className={classes.sexe}>{e.sexe}</span>)}
           </div>
           <div className={classes.div2}>
               <h3 className={classes.propriéte}>Email : </h3>
               {OneFormer.map((e)=>
               <span className={classes.email}>{e.email}</span>)}
           </div>
           
           <div className={classes.div2}>
               <h3 className={classes.propriéte}>Numéro de téléphone: </h3>
               {OneFormer.map((e)=>
               <span className={classes.num}>{e.tel}</span>)}
           </div>
           <div className={classes.div2}>
               <h3 className={classes.propriéte}>Nombre de formations: </h3>
               {OneFormer.map((e)=>
               <span className={classes.nbre}>{e.training.length}</span>)}
           </div>
           <div className={classes.div2}>
               <h3 className={classes.propriéte}>Cv: </h3>
      

           </div>
       </Paper>
       </Grid>



    <Grid  item lg={6} className={classes.cardformer}        >
         {!OneFormer
            ? null
            : OneFormer.map((Former) => (
                
                  <CardOne Former={Former} key={Former._id} elevation={3} />
    
              ))} 
           

        </Grid>










        </Grid>
   </div>

);

};
export default DetailsFormer;