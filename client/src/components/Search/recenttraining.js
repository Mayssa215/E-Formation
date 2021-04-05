import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getrecentTraining } from "../../actions/training";
import Cards from "../../components/Training/cards";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Training = () => {
  const [Alltraining, setAlltraining] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
 const [pageBack, setPageBack] = useState(1);
const [shownext, setShownext]= useState(true);
 const [showBack , setShowBack] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      getrecentTraining(
        pageNumber     
      )
    ).then((res) => {
      setAlltraining(res.Alltraining);
      setPageNumber(pageNumber + 1);
      
    });
  }, [dispatch]);


  const classes = useStyles();


  const handleTraining = () => {    
  
    dispatch(
        getrecentTraining(
        pageNumber )).then((res) => {
            if(res.Alltraining.length === 0)
            {
                setAlltraining(Alltraining);
                setShownext(false);
            }
            else{
                setAlltraining(res.Alltraining);

            }
   
    });
  };
  const handleTrainingBack = () => {    
  
    dispatch(
        getrecentTraining(
        pageBack)).then((res) => {
            if(pageBack===0) {
                setAlltraining(Alltraining);
                setShowBack(false);
            }
            else {
                setAlltraining(res.Alltraining);

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

  return (
    <div className={classes.container}>
        <div>
            <h2 className={classes.text}> Dernières formations </h2>
            </div>
      <Grid container  item lg={12} spacing={1}>
       
     
      <Grid container item lg={12}>
          {!Alltraining
            ? null
            : Alltraining.map((Training) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={4}
                  key={Training._id}
                >
                  <Cards Training={Training} />
                </Grid>
              ))}
        </Grid>
              
      
         
       
        
      </Grid>

{     showBack ? <Button className={classes.voirback} onClick={showbackbutton} ><ArrowBackIosIcon  className={classes.back}/></Button>
: null
}
     
     { shownext ?
      <Button className={classes.voirplus}  onClick={showMorebtn}>
        < NavigateNextIcon  className={classes.next} />
        </Button>: null
     } 


    
      
    </div>
  );
};
export default Training;