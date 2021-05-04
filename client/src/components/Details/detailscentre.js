import React, { useState, useEffect } from "react";
import CardOne from "../Centre/cardone";
import useStyles from "./styles";

import { Grid, Paper,Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getOneCenter } from "../../actions/centre";
import {getTrainingcenter} from "../../actions/centre";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {ReactComponent as Graduate} from "../Pictures/graduate.svg";
import PlaceIcon from "@material-ui/icons/Place";
import { Getreservationbyid } from '../../actions/booking';
import { Getfavoritebyid } from '../../actions/favorite';
import EmailIcon from '@material-ui/icons/Email';

import Cards from "../Training/cards";
const DetailsCentre = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const idu = user?._id;
const iduser = idu;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageBack, setPageBack] = useState(1);
  const [tablefav, settablefav] = useState([]);
  const [tableidvide , settableidvide] = useState([]);
  const [tableidannuler , settableidannuler] = useState([]);
  const [tableidvalider , settableidvalider] = useState([]);  
const [shownext, setShownext]= useState(true);
const [idstraining, setIdstraining] = useState([]);
  const [OneCenter, setOneCenter] = useState([]);
 const [showBack , setShowBack] = useState(true);

  const url = window.location.href;
  console.log(url);
  const idcenter = url.substr(29);
   
  useEffect(() => {
  
    dispatch(getOneCenter(idcenter)) .then((res) => {
      setOneCenter(res.OneCenter);
         
   
    });
   dispatch(getTrainingcenter(idcenter,pageNumber)).then((res)=> {
      setIdstraining(res);
      setPageNumber(pageNumber + 1);
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


  const handleTraining = () => {    
  
    dispatch(
      getTrainingcenter(
       idcenter, pageNumber )).then((res) => {
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
      getTrainingcenter(
        idcenter,pageBack)).then((res) => {
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
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid container>
          <Grid item lg={9}>
            <Paper elevation={3} className={classes.papercenter}>
              <div className={classes.div1}>
                <h2 className={classes.propriéte}>Description</h2>
                {OneCenter.map((e) => (
                  <span className={classes.resumcentre}>{e.description}</span>
                ))}
              </div>
              <div className={classes.divcenter}>

             
              <div className={classes.div2}>
                <span className={classes.emailicon}><EmailIcon/></span>
                <h2  className={classes.adressexacte1}>Email</h2>
                {OneCenter.map((e) => (
                  <span className={classes.email}>{e.email}</span>
                ))}
              </div>
             
              <div className={classes.div2}>
                <span className={classes.place}><PlaceIcon/> </span>
                <h2  className={classes.adressexacte}>Adresse exacte</h2>
                {OneCenter.map((e) => (
                  <span className={classes.adresse}>{e.adressexact}</span>
                ))}
              </div>
              <div className={classes.div2}>
                <span className={classes.graduate}><Graduate/></span>
                <h2 className={classes.training}>formations  </h2>
                {OneCenter.map((e) => (
                  <span className= {classes.nbreform}>{e.trainingcenter.length}</span>
                ))}
              </div>

              </div>
         

            </Paper>
            <div className={classes.div1}>
               <h2 className={classes.presenté}> Les formations présentées par</h2>
                 {OneCenter.map((e) => 
                <h2 className={classes.namecenter}>{e.lastname}</h2>
                 )}
               </div>
          </Grid>

          <Grid item lg={3} className={classes.cardcenter}>
            {!OneCenter
              ? null
              : OneCenter.map((Centre) => (
                  <CardOne Centre={Centre} key={Centre._id} elevation={3}    />
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
                  md={8}
                  sm={6}
                  lg={12}
                  key={Training._id}
                
                >
                  <Cards Training={Training}  Tableids={tableidvide} Tablefav={tablefav}  Tablevalider={tableidvalider} Tableannuler={tableidannuler} />
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
      </Grid>
    </div>
  );
};
export default DetailsCentre;