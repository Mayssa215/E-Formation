import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getrecentCentre } from "../../actions/centre";
import Cards from "../../components/Centre/cards";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Centre = () => {
    const [AllCentres, setAllCentres] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
 const [pageBack, setPageBack] = useState(1);
const [shownext, setShownext]= useState(true);
 const [showBack , setShowBack] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      getrecentCentre(
        pageNumber,
        
      )
    ).then((res) => {
        setAllCentres(res.AllCentres);
      setPageNumber(pageNumber + 1);
      
    });
  }, [dispatch]);


  const classes = useStyles();


  const handleTraining = () => {    
  
    dispatch(
        getrecentCentre(
        pageNumber )).then((res) => {
            if(res.AllCentres.length === 0)
            {
                setAllCentres(AllCentres);
                setShownext(false);
            }
            else{
                setAllCentres(res.AllCentres);

            }
   
    });
  };
  const handleTrainingBack = () => {    
  
    dispatch(
        getrecentCentre(
        pageBack)).then((res) => {
            if(pageBack=== 0) {
                setAllCentres(AllCentres);
                setShowBack(false);
            }
            else {
                setAllCentres(res.AllCentres);

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
            <h2 className={classes.text}> Dernières Centres de formation </h2>
            </div>
      <Grid container  item lg={12} spacing={1}>
       
     
      <Grid container item lg={12}>
          {!AllCentres
            ? null
            : AllCentres.map((Centre) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={4}
                  key={Centre._id}
                >
                  <Cards Centre={Centre} />
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
export default Centre;