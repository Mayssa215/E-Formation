import React ,{ useState, useEffect } from "react";
import CardOne from "../Training/cardOne";
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import {Grid,  Avatar, Typography, TextField,  Button
} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getOneTraining} from '../../actions/training';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Getreservationbyid } from '../../actions/booking';
import { Getfavoritebyid } from '../../actions/favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FaceIcon from '@material-ui/icons/Face';
import {getnameFormer} from '../../actions/training';
import {createOpinion} from '../../actions/opinion';
const Details = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const idu = user?._id;
    const iduser = idu;
    const [OneTraining, setOneTraining] = useState([]);
    const [tablefav, settablefav] = useState([]);
    const [tableidvide , settableidvide] = useState([]);
    const [tableidannuler , settableidannuler] = useState([]);
    const [tableidvalider , settableidvalider] = useState([]);   
     const [First,setFirst] = useState([]);
     const url = window.location.href;
     const id = url.substr(32, 24);
     const [newOpinion , setnewOpinion] = useState({idu,id,comment:'' ,ratingvalue:''});
useEffect(() => {
    dispatch(
        getnameFormer()
    ).then((res) => {
        setFirst(res);
     console.log(First);
    });
    dispatch(
        getOneTraining(id )
    ).then((res) => {
        setOneTraining(res.OneTraining);
    });
    dispatch(Getreservationbyid(iduser)).then((res) => {
        settableidvide(res.trainingidvide);
        settableidvalider(res.trainingsidvalider)
        settableidannuler(res.trainingsidannuler);
      });
      dispatch (Getfavoritebyid(iduser)).then((res) => {
        settablefav(res);
      });
 
  
  }, [dispatch]);

 const  Donneravis = () => {
     dispatch(createOpinion(newOpinion));
     window.location.reload(false);

 }




const classes = useStyles();



return (
    <div className={classes.root} >
         {
               OneTraining.map((e)=>
               <h2 className={classes.nom}> { e.name}</h2>
          
               )
           }
           {
               OneTraining.map((e)=> 
         
                   <div className={classes.div}>
                     <div className={classes.date}>
                     <AccessTimeIcon className={classes.duree}/>
                      <span className={classes.heure}>{e.periode} Heures</span> 
                     </div>
                      
                  < div className={classes.love} >
                   <FavoriteBorderIcon className={classes.favorite}  />
                   <span className={classes.intersted}>50 sont intéressés</span>
                   </div>
                   <div className={classes.trainer}>
                   <FaceIcon className={classes.former} />
                    <span className={classes.coach}>Présenté Par : </span>
                    {
                        First.map((e)=> <div className={classes.names}>
                     <span className={classes.formateur1}>{e.lastname}</span>

                            <span className={classes.formateur}>{e.firstname}</span>
                            </div>
                        )
                    }
                 
                   
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
     dangerouslySetInnerHTML= {{__html: e.planning}}
   />

 

   )}
        
       
   

</Grid>

    <Grid  item lg={5} className={classes.card}>
         {!OneTraining
            ? null
            : OneTraining.map((Training) => ( 
                
                  <CardOne Training={Training} key={Training._id} elevation={3}   Tableids={tableidvide} Tablefav={tablefav}  Tablevalider={tableidvalider} Tableannuler={tableidannuler}/>
    
              ))} 
             
               <h2 className={classes.connaissance}> Prerequis</h2>
     {OneTraining.map((e)=> 
  <div className={classes.prerequis }  dangerouslySetInnerHTML= {{__html:e.skills}}/> 
    )  }
       
       
           <h2 className={classes.apprendre}>Ce que vous allez apprendre </h2>
    { 
       OneTraining.map((e)=> 
          
           <p className={classes.objectif} dangerouslySetInnerHTML= {{__html: e.objectif}}/>
          
      )
   }  
        </Grid>




        </Grid>


{ user && ( tableidvalider.indexOf(id) > -1 ) ?
        <Paper className={classes.papercomment} id="section1" >
            <h5 className={classes.title}>Quelle note donnez-vous à cette ressource ?</h5>
            <div className={classes.rootRating}>
      <Rating name="half-rating" 
          value={newOpinion.ratingvalue}
          onChange={(e) => setnewOpinion({ ...newOpinion, ratingvalue: e.target.value })} 
          precision={0.5} />
      </div>
      <div className={classes.div1}>
        <div className={classes.div2}>
        <Avatar alt={user?.email} src={user?.selectedimage} className={classes.avatar}>{user?.lastname.charAt(0)}</Avatar>
        <Typography className={classes.fullname}>{user?.lastname} {user?.firstname}</Typography>
        </div>
        <form onSubmit={Donneravis}>
        <TextField required className={classes.textfield} value={newOpinion.comment} onChange={(e) => setnewOpinion({ ...newOpinion, comment: e.target.value })}  multiline  name="comment"></TextField>
        <Button  className={classes.btnpub} type="submit" >Publier</Button>
        </form>

        </div>
       
        </Paper>
       
    : null }
       

    </div>

);

};
export default Details;