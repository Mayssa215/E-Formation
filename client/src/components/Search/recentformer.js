import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getrecentFormer } from "../../actions/former";
import Cards from "../../components/Former/cards";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Former = () => {
    const [AllFormer, setAllFormer] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
 const [pageBack, setPageBack] = useState(1);
const [shownext, setShownext]= useState(true);
 const [showBack , setShowBack] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      getrecentFormer(
        pageNumber,
        
      )
    ).then((res) => {
      setAllFormer(res.AllFormer);
      setPageNumber(pageNumber + 1);
      
    });
  }, [dispatch]);


  const classes = useStyles();


  const handleTraining = () => {    
  
    dispatch(
        getrecentFormer(
        pageNumber )).then((res) => {
            if(res.AllFormer.length === 0)
            {
                setAllFormer(AllFormer);
                setShownext(false);
            }
            else{
                setAllFormer(res.AllFormer);

            }
   
    });
  };
  const handleTrainingBack = () => {    
  
    dispatch(
        getrecentFormer(
        pageBack)).then((res) => {
            if(pageBack === 0) {
                setAllFormer(AllFormer);
                setShowBack(false);
            }
            else {
                setAllFormer(res.AllFormer);

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
            <h2 className={classes.text}> Dernières formateurs </h2>
            </div>
      <Grid container  item lg={12} spacing={1}>
       
     
      <Grid container item lg={12}>
          {!AllFormer
            ? null
            : AllFormer.map((Former) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={4}
                  key={Former._id}
                >
                  <Cards Former={Former} />
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
export default Former;