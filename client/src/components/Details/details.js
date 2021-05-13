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
import {getnameFormer,getFav} from '../../actions/training';
import {createOpinion,getOpinions} from '../../actions/opinion';
import Box from '@material-ui/core/Box';
import moment from 'moment'
import 'moment/locale/fr'  // without this line it didn't work

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
    const [avis,setavis]=useState([]);
    const [open , setOpen] = useState('false');
    const [count,setcount]=useState();
     const [First,setFirst] = useState([]);
     const url = window.location.href;
     const idtraining = url.substr(32, 24);
     const classes = useStyles();
     const [newOpinion , setnewOpinion] = useState({iduser,idtraining,comment:'',ratingvalueContenu:5, ratingvaluePlateforme:5,ratingvalueAmbiance:5,status:''});
useEffect(() => {
    dispatch(
        getnameFormer(idtraining)
    ).then((res) => {
        setFirst(res);
    });
    dispatch(
        getFav(idtraining)
    ).then((res) => {
        setcount(res);
    });
    dispatch(
        getOneTraining(idtraining )
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
      dispatch(getOpinions(idtraining)).then((res)=> {
        setavis(res);
      });
 
  
  }, [dispatch]);
  moment.locale('fr')

 const  Donneravis = () => {
     dispatch(createOpinion(newOpinion));
     setOpen(true);


 }








return (
    <div className={classes.root} >
         {
               OneTraining.map((e)=>
               <h2 className={classes.nom} key={e._id} > { e.name}</h2>
          
               )
           }
           {
               OneTraining.map((e)=> 
         
                   <div className={classes.div} key={e._id} >
                     <div className={classes.date}>
                     <AccessTimeIcon className={classes.duree}/>
                      <span className={classes.heure}>{e.periode} Heures</span> 
                     </div>
                     {count === 0 ? null :
                    < div className={classes.love} >
                   <FavoriteBorderIcon className={classes.favorite}  />
                   <span className={classes.intersted}> {count} {count === 1 ? 'est intéressé' : 'sont intéressés'  }</span>
                   
                   </div>
                }
                   <div className={classes.trainer}>
                   <FaceIcon className={classes.former} />
                    <span className={classes.coach}>Présenté Par : </span>
                    {
                        First.map((e)=> <div className={classes.names}>
                            {e.Role ==="formateur"? 
                            <div>
                       <span className={classes.formateur1}>{e.lastname}</span>

                            <span className={classes.formateur}>{e.firstname}</span>
                            </div>
                            : e.Role==="centre"?  <span className={classes.formateur1}>{e.lastname}</span>
                             :null}
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
   <p className={classes.text1} key={e._id}  > {e.description}</p>
   
   )}
   <h2 className={classes.programme}>Programme</h2>
   {OneTraining.map((e)=>
   <div className={classes.text2}
     dangerouslySetInnerHTML= {{__html: e.planning}}
     key={e._id} 
   />

   )}
        
       
   

</Grid>

    <Grid  item lg={5} className={classes.card}     >
         {!OneTraining
            ? null
            : OneTraining.map((Training) => ( 
                
                  <CardOne Training={Training} key={Training._id} elevation={3}   Tableids={tableidvide} Tablefav={tablefav}  Tablevalider={tableidvalider} Tableannuler={tableidannuler}/>
    
              ))} 
             
               <h2 className={classes.connaissance}> Prerequis</h2>
     {OneTraining.map((e)=> 
  <div className={classes.prerequis }  dangerouslySetInnerHTML= {{__html:e.skills}} key={e._id} /> 
    )  }
       
       
           <h2 className={classes.apprendre}>Ce que vous allez apprendre </h2>
    { 
       OneTraining.map((e)=> 
          
           <p  className={classes.objectif} dangerouslySetInnerHTML= {{__html: e.objectif}} key={e._id} />
          
      )
   }  
        </Grid>




        </Grid>

 { user && ( tableidvalider.indexOf(idtraining) > -1 ) ?
  <Grid container   spacing={0} direction="column"
  alignItems="center"
  justify="center">
        <Paper className={classes.papercomment} id="section1" >
            <h5 className={classes.title}>Quelle note donnez-vous à cette ressource ?</h5>
            <div className={classes.rootRating}>
        <div className={classes.stars}>
        <Box component="fieldset" className={classes.box1}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar}>Contenu</Typography>
      <Rating name="half" 
          value={newOpinion.ratingvalueContenu}
          onChange={(e) => setnewOpinion({ ...newOpinion, ratingvalueContenu: e.target.value })} 
          precision={0.5}
          className={classes.opinions}           size="large"
          />
</Box>
<Box component="fieldset" className={classes.box1}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar}>Plateforme</Typography>

        <Rating name="rating" 
          value={newOpinion.ratingvaluePlateforme}
          onChange={(e) => setnewOpinion({ ...newOpinion, ratingvaluePlateforme: e.target.value })} 
          precision={0.5} 
          size="large"
          className={classes.opinions2} 
          />
    </Box>
    <Box component="fieldset" className={classes.box1}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar}>Animation</Typography>
              <Rating name="ating" 
          value={newOpinion.ratingvalueAmbiance}
          onChange={(e) => setnewOpinion({ ...newOpinion, ratingvalueAmbiance: e.target.value })} 
          precision={0.5}           size="large"
          className={classes.opinions3} 
          />
</Box>
          </div>
      </div>
      <div className={classes.div1}>
        <div className={classes.div2}>
        <Avatar alt={user?.email} src={user?.selectedimage} className={classes.avatar}>{user?.lastname.charAt(0)}</Avatar>
        <Typography className={classes.fullname}>{user?.lastname} {user?.firstname}</Typography>
        </div>
        <form >
        <TextField required className={classes.textfield} value={newOpinion.comment} onChange={(e) => setnewOpinion({ ...newOpinion, comment: e.target.value })}   placeholder="Ecrivez votre text ici..."multiline  name="comment"></TextField>
        <Button  className={classes.btnpub}  size='large' onClick={Donneravis} >Publier</Button>
        </form>

        </div>
       
        </Paper>
       </Grid>
    : null } 

{ avis?.map((e) =>(

<Grid container   spacing={0} direction="column"
  alignItems="center"
  justify="center">
   
        <Paper className={classes.papercomment2}  elevation={0} >

        <Typography   className={classes.datesm}>Le {moment(e.createdAt).format("Do MMM  YYYY")}</Typography>
      <div className={classes.div1}>
        <Avatar alt={e.users.lastname} src={e.users.selectedimage} className={classes.avatar2}>{e.users.lastname.charAt(0)}</Avatar>
       <div  className={classes.descrptionname}>
        <Typography className={classes.fullname2}>{e.users.lastname} {e.users.firstname}</Typography>
        < Typography className={classes.desc}   name="comment">{ e.comment}</Typography>
     
        </div>
        </div>
        <div className={classes.rootRating}>
        <div className={classes.stars}>
        <Box component="fieldset" className={classes.box2}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar1}>Contenu</Typography>
        <Rating name="read-only" value={e.ratingvalueContenu} className={classes.opinions}  size="medium" readOnly
    />
</Box>
<Box component="fieldset" className={classes.box2}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar1}>Plateforme</Typography>

        <Rating name="read-only" value={e.ratingvaluePlateforme} className={classes.opinions2}  size="medium" readOnly
    />
    </Box>
    <Box component="fieldset" className={classes.box2}  borderColor="transparent">
        <Typography component="legend" className={classes.titlestar1}>Animation</Typography>
        <Rating name="read-only" value={e.ratingvalueAmbiance} className={classes.opinions3}  size="medium" readOnly
    />
</Box>
     </div>
      </div>
       
        </Paper>
   
       </Grid> 
       
))}
    </div>

);

};
export default Details;