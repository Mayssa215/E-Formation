  
import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import FilterCentre from "../components/FilterCentre/filtercentre";
import Recherche from "../components/Filter/recherche";
import {getCentre} from "../actions/centre";
import { useDispatch } from "react-redux";
import {getnotshowfilter} from "../actions/centre";
import Cards from "../components/Centre/cards";

const Centre = () => {
  const dispatch = useDispatch();
  const [AllCentres, setAllCentres] = useState([]);
  const [pagefilter, setPageFilter] = useState(1);
  const [gouvernoratid, setGouvernoratId] = useState([]);
  const [cityid, setCityId] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [InputSearch, setInputSearch] = useState("");

  const classes = useStyles();
  const [Speciality, setSpeciality] = useState([]);

  useEffect(() => {
    dispatch(
      getCentre(pagefilter, Speciality, gouvernoratid, cityid, InputSearch)
    ).then((res) => {
      setAllCentres(res.AllCentres);
      setPageNumber(pageNumber + 1);
    });
  }, [dispatch]);
  
  const [filtercentre, SetFiltercentre] = useState({
    SpecialityIds: [],
    GouvernoratIds: [],
    citiesids: [],
  });

 
  const [show, setShow] = useState(true);

  

  
  const OnfilterApplyCentre = (filtercentre) => {
    SetFiltercentre(filtercentre);

    const Speciality = filtercentre.SpecialityIds;
    const gouvernoratid = filtercentre.GouvernoratIds;
    const cityid = filtercentre.citiesids;

    dispatch(
      getCentre(pagefilter, Speciality, gouvernoratid, cityid, InputSearch)
    ).then((res) => {
      setAllCentres(res.AllCentres);
    });
  };

  const handleCentre = (filtercentre) => {
    dispatch(
      getCentre(pageNumber, Speciality, gouvernoratid, cityid, InputSearch)
    ).then((res) => {
      setAllCentres([...AllCentres, ...res.AllCentres]);
    });
  };

  const handleCentre2 = (filtercentre) => {
    
    dispatch(
      getnotshowfilter(
        pageNumber
      )
    ).then((res) => {
      setAllCentres([...AllCentres, ...res.AllCentres]);
    });
  };



 const showMore = (page) => {
    console.log("page noumrou");
    console.log(page);
    handleCentre(filtercentre);
  };
    const showMore2 = (page) => {
    console.log("page noumrou");
    console.log(page);

    handleCentre2(filtercentre);

   
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
    dispatch(
      getCentre(pagefilter, Speciality, gouvernoratid, cityid, InputSearch)
    ).then((res) => {
      setAllCentres(res.AllCentres);
    });
  };





  const onClick = () => {

    setShow(!show);
    dispatch(getnotshowfilter(filtercentre)).then((res) => {
      setAllCentres(res.AllCentres);
    });    
  };

  const showfilter = () => {
    return <FilterCentre OnfilterApplyCentre={OnfilterApplyCentre} />
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
        </Grid> : <Grid container item lg={12}> 
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
        
        </Grid>}
      </Grid>
      <Button className={classes.voirplus} onClick={showMorebtn} size="large">
        Voir Plus
      </Button>
    </div>
  );
};
export default Centre;