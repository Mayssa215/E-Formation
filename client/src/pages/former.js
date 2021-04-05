import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import FilterFormer from "../components/FilterFormer/filterformer";
import Recherche from "../components/Filter/recherche";
import { getFormer } from "../actions/former";
import { useDispatch } from "react-redux";
import {getnotshowfilter} from "../actions/former";
import Cards from "../components/Former/cards";

const Former = () => {
  const dispatch = useDispatch();
  const [AllFormer, setAllFormer] = useState([]);
  const [pagefilter, setPageFilter] = useState(1);
  const [InputSearch, setInputSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const classes = useStyles();
  const [Speciality, setSpeciality] = useState([]);
  const [SpecialityIds, setSpecialityIds] = useState([]);
  const [age, setAge] = useState([0, 100]);
  const [sexe, setSexe] = useState([]);
  const [filterformer, SetFilterformer] = useState({
    SpecialityIds: [],
    Sexe: [],
    Age: [0, 100],
  });
  useEffect(() => {
    dispatch(getFormer(pageNumber, age, SpecialityIds, sexe, InputSearch)).then(
      (res) => {
        setAllFormer(res.AllFormer);
        setPageNumber(pageNumber + 1);
      }
    );
  }, [dispatch]);
  const [show, setShow] = useState(true);

  const handleFormer = (filterformer) => {
    dispatch(getFormer(pageNumber, age, SpecialityIds, sexe, InputSearch)).then(
      (res) => {
        setAllFormer([...AllFormer, ...res.AllFormer]);
      }
    );
  };

  
  const OnfilterApplyFormer = (filterformer) => {
    const SpecialityIds = filterformer.SpecialityIds;
    const age = filterformer.Age;
    const sexe = filterformer.Sexe;
    SetFilterformer(filterformer);

    dispatch(getFormer(pagefilter, age, SpecialityIds, sexe, InputSearch)).then(
      (res) => {
        setAllFormer(res.AllFormer);
      }
    );
  };

  const handleFormer2 = (filterformer) => {
    
    dispatch(
      getnotshowfilter(
        pageNumber
      )
    ).then((res) => {
      setAllFormer([...AllFormer, ...res.AllFormer]);
    });
  };



 const showMore = (page) => {
    console.log("page noumrou");
    console.log(page);
    handleFormer(filterformer);
  };
    const showMore2 = (page) => {
    console.log("page noumrou");
    console.log(page);

    handleFormer2(filterformer);

   
  }; 
  const showMorebtn = () => {
    if(show=== true)
{
  showMore(pageNumber);
  console.log(pageNumber);
  setPageNumber(pageNumber + 1);
  setPageFilter(pagefilter + 1);
}    
   else {
    
    showMore2(pageNumber);
   }
 
 
  };

  const handlechangeRecherche = (e, value) => {
    //console.log(e.target.value);
    setInputSearch(e.target.value);

    //console.log("dkhal l recherche",InputSearch);
    dispatch(getFormer(pagefilter, age, SpecialityIds, sexe, InputSearch)).then(
      (res) => {
        setAllFormer(res.AllFormer);
      }
    );
  };



  const onClick = () => {

    setShow(!show);
    dispatch(getnotshowfilter(pagefilter)).then((res) => {
      setAllFormer(res.AllFormer);
    });    
  };

  const showfilter = () => {
    return <FilterFormer  OnfilterApplyFormer={OnfilterApplyFormer} /> 
  };
  const unshowfilter = () => {
    if (show) {
     return showfilter();
    }
    else {
       
      return  !showfilter();
      onClick ();
    } 
    };
  



  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Recherche
          handlechangeRecherche={handlechangeRecherche}
          onClick={onClick}
          show={show}
        />
        <Grid item xs={12} lg={3}>
        {   unshowfilter()}
        </Grid>
        {show ? <Grid  container item lg={9}>
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
        </Grid> : <Grid container item lg={12}> 
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
        
        </Grid>}
       
      </Grid>
      <Button className={classes.voirplus} onClick={showMorebtn} size="large">
        Voir Plus
      </Button>
    </div>
  );
};
export default Former;