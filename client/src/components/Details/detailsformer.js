import React ,{ useState, useEffect } from "react";
import CardOne from "../Former/cardone";
import useStyles from './styles';

import {Grid, Paper,Link, Button} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getOneFormer} from '../../actions/former';
import EmailIcon from '@material-ui/icons/Email';
import WcIcon from '@material-ui/icons/Wc';
import { Getreservationbyid } from '../../actions/booking';
import { Getfavoritebyid } from '../../actions/favorite';
import PhoneIcon from '@material-ui/icons/Phone';
import {ReactComponent as Graduate} from "../Pictures/graduate.svg";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import  {getTrainingFormer} from "../../actions/former";
import Cards from "../Training/cards";



const DetailsFormer = () => {
    const dispatch = useDispatch();
    const [OneFormer, setOneFormer] = useState([]);
    const url = window.location.href;
const idformer = url.substr(32);
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const idu = user?._id;
const iduser = idu;
const [viewPdf, setViewPdf]=useState(null);
const [idstraining, setIdstraining] = useState([]);
const [pageNumber, setPageNumber] = useState(1);
const [pageBack, setPageBack] = useState(1);
const [showBack , setShowBack] = useState(true);
const [shownext, setShownext]= useState(true);
const [tablefav, settablefav] = useState([]);
const [tableidvide , settableidvide] = useState([]);
const [tableidannuler , settableidannuler] = useState([]);
const [tableidvalider , settableidvalider] = useState([]);   
useEffect(() => {
    
    dispatch(
        getOneFormer(idformer )
    ).then((res) => {
        setOneFormer(res.OneFormer);
        {
            OneFormer.map((e)=>
            setViewPdf(e.selectedFile)
            )
        }
    });


    dispatch(getTrainingFormer(idformer,pageNumber)).then((res)=> {
        setIdstraining(res);
        setPageNumber(pageNumber + 1);
      })
      dispatch(Getreservationbyid(iduser)).then((res) => {
        settableidvide(res.trainingidvide);
        settableidvalider(res.trainingsidvalider)
        settableidannuler(res.trainingsidannuler);
      });
      dispatch (Getfavoritebyid(iduser)).then((res) => {
        settablefav(res);
      });


  }, [dispatch]);
  const handleTraining = () => {    
  
    dispatch(
      getTrainingFormer(
       idformer, pageNumber )).then((res) => {
            if(res.length === 0)
            {
              setIdstraining(idstraining);
                setShownext(false);
            }
            else{
              setIdstraining(res);

            }
   
    });
  };
  const handleTrainingBack = () => {    
  
    dispatch(
      getTrainingFormer(
       idformer, pageBack)).then((res) => {
            if(pageBack===0) {
              setIdstraining(idstraining);
                setShowBack(false);
            }
            else {
              setIdstraining(res);

            }
    });
  };
  const showMore = (page) => {
    handleTraining();
    console.log(pageNumber);
};

const showMorebtn = () => {
 showMore(pageNumber);
 setPageBack(pageNumber - 1);
setPageNumber(pageNumber + 1);


};

const showBackbtn = (page) => {

   handleTrainingBack();
}
const showbackbutton =() => {
console.log("back", pageBack);
   showBackbtn(pageBack);
setPageBack(pageBack - 1)

}





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
               <span className={classes.icongender}> <WcIcon/></span>
               <h3 className={classes.sexe}>Sexe </h3>
               {OneFormer.map((e)=>
               <span className={classes.sexetext}>{e.gender}</span>)}
           </div>
           <div className={classes.div2}>
                <span className={classes.iconemail}><EmailIcon/></span>
                <h2  className={classes.mail}>Email</h2>
                {OneFormer.map((e) => (
                  <span className={classes.e_mail}>{e.email}</span>
                ))}
              </div>
           
           <div className={classes.div2}>
               <span className={classes.iconphone}><PhoneIcon /></span>
               <h3 className={classes.phone}>Numéro de téléphone </h3>
               {OneFormer.map((e)=>
               <span className={classes.num}>{e.phone}</span>)}
           </div>
           <div className={classes.div2}>
           <span className={classes.graduatef}><Graduate/></span>

               <h3 className={classes.formation}>formations </h3>
               {OneFormer.map((e)=>
               <span className={classes.nbre}>{e.training.length}</span>)}
           </div>
         
           <Button className={classes.pdf} href="/cv">Voir CV</Button>{
                   OneFormer.map((e) => 
                       
                   {localStorage.setItem('cv', e.selectedFile)}
             
    
    )
}
        
       </Paper>
       <div className={classes.div1}>
               <h2 className={classes.presenté}> Les formations présentées par</h2>
                 {OneFormer.map((e) => 
                <h2 className={classes.namecenter}>{e.firstname} {e.lastname}</h2>
                 )}
               </div>
       </Grid>



    <Grid  item lg={6} className={classes.cardformer}        >
         {!OneFormer
            ? null
            : OneFormer.map((Former) => (
                
                  <CardOne Former={Former} key={Former._id} elevation={3} />
    
              ))} 
           

        </Grid>


        <div className={classes.cards}>
             <Grid container item lg={12}  spacing={2} >
            
               
  {
    !idstraining ? null : idstraining.map((Training) =>
    (

       <Grid
       container
  
                  item
                  xs={12}
                  md={4}
                  sm={6}
                  lg={12}
                  key={Training._id}
                
                >
                  <Cards Training={Training}    Tableids={tableidvide} Tablefav={tablefav}  Tablevalider={tableidvalider} Tableannuler={tableidannuler}/>
                </Grid>
    ))
  }
</Grid>
             </div>

             {     showBack ? <Button className={classes.voirback} onClick={showbackbutton} ><ArrowBackIosIcon  className={classes.back}/></Button>
: null
}
     
     { shownext ?
      <Button className={classes.voirplus}  onClick={showMorebtn}>
        < NavigateNextIcon  className={classes.next} />
        </Button>: null
     } 





        </Grid>
   </div>

);

};
export default DetailsFormer;