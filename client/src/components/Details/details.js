import React ,{ useState, useEffect } from "react";
import CardOne from "../Training/cardOne";
import useStyles from './styles';

import {Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getOneTraining} from '../../actions/training';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FaceIcon from '@material-ui/icons/Face';

const Details = () => {
    const dispatch = useDispatch();
    const [OneTraining, setOneTraining] = useState([]);
    const url = window.location.href;
const id = url.substr(32);

useEffect(() => {
    
    dispatch(
        getOneTraining(id )
    ).then((res) => {
        setOneTraining(res.OneTraining);

    });

  }, [dispatch]);






const classes = useStyles();



return (
    <div className={classes.root} >
         {
               OneTraining.map((e)=>
               <h2 className={classes.nom}> { e.nomformation}</h2>
           
               )
           }
           {
               OneTraining.map((e)=> 
         
                   <div className={classes.div}>
                     <div className={classes.date}>
                     <AccessTimeIcon className={classes.duree}/>
                      <span className={classes.heure}>{e.duree} Heures</span> 
                     </div>
                      
                  < div className={classes.love} >
                   <FavoriteBorderIcon className={classes.favorite}  />
                   <span className={classes.intersted}>50 sont intéressés</span>
                   </div>
                   <div className={classes.trainer}>
                   <FaceIcon className={classes.former} />
                    <span className={classes.coach}>Présenté Par : {e.coach}</span>
                   </div>
                   
                    </div>
               
              )
           }
        <Grid container >
          
        <Grid item lg={7}><h2 className={classes.text}>Résumé</h2>
   {OneTraining.map((e)=>
   <p className={classes.text1}> {e.description}</p>
   
   )}
   <h2 className={classes.programme}>Programme</h2>
   {OneTraining.map((e)=>
   <div className={classes.text2}
     dangerouslySetInnerHTML= {{__html: e.programme}}
   />

 

   )}
        
       
   

</Grid>

    <Grid  item lg={5} className={classes.card}>
         {!OneTraining
            ? null
            : OneTraining.map((Training) => (
                
                  <CardOne Training={Training} key={Training._id} elevation={3} />
    
              ))} 
             
               <h2 className={classes.connaissance}> Prerequis</h2>
     {OneTraining.map((e)=> 
  <div className={classes.prerequis }  dangerouslySetInnerHTML= {{__html:e.prerequis}}/> 
    )  }
       
       
           <h2 className={classes.apprendre}>Ce que vous allez apprendre </h2>
    { 
       OneTraining.map((e)=> 
          
           <p className={classes.objectif} dangerouslySetInnerHTML= {{__html: e.objectifsformation}}/>
          
      )
   } 
     
        </Grid>




        </Grid>
   </div>

);

};
export default Details;