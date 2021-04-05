import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import Filter from "../components/Filter/filter";
import Recherche from "../components/Filter/recherche";
import { useDispatch } from "react-redux";
import { getSearchedTraining, getTraining } from "../actions/training";
import Cards from "../components/Training/cards";
import { getnotshowfilter } from "../actions/training"; 
import Resultatform from "../components/Search/resultat/resultatForm";
const Training = () => {
  const [Alltraining, setAlltraining] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [pagefilter, setPageFilter] = useState(1);
  const [pageNumber2, setPageNumber2] = useState(1);

  const [prices, setPrices] = useState([0, 10000]);
  const [categoriesid, setCategoriesId] = useState([]);
  const [heures, setHeures] = useState([0, 10000]);
  const [gouvernoratid, setGouvernoratId] = useState([]);
  const [cityid, setCityId] = useState([]);
  const [selected, setselected] = useState([]);
  const [InputSearch, setInputSearch] = useState("");

  var curr = new Date();
  curr.setDate(curr.getDate());

  var date = curr.toISOString().substr(0, 10);

  const [datedeb, setDatedeb] = useState("1920-01-01");
  const [datefin, setDatefin] = useState("2030-01-01");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      getTraining(
        pagefilter,
        prices,
        categoriesid,
        heures,
        gouvernoratid,
        cityid,
        datedeb,
        datefin,
        selected,
        InputSearch
      )
    ).then((res) => {
      setAlltraining(res.Alltraining);
      setPageNumber(pageNumber + 1);
    });
  }, [dispatch]);


  const classes = useStyles();

  const [filter, SetFilter] = useState({
    CategoriesIds: [],
    GouvernoratIds: [],
    citiesids: [],
    Prices: [0, 10000],
    Heures: [0, 10000],
    Datedeb: "1920-01-01",
    Datefin: "2030-01-01",
    Selected: [],
  });

  const [show, setShow] = useState(true);

 

  const handleTraining = (filter) => {
    const prices = filter.Prices;
    const categoriesid = filter.CategoriesIds;
    const heures = filter.Heures;
    const gouvernoratid = filter.GouvernoratIds;
    const cityid = filter.citiesids;
    const datedeb = filter.Datedeb;
    const datefin = filter.Datefin;
    const selected = filter.Selected;
    console.log(prices);
    console.log(heures);
    console.log(gouvernoratid);
    console.log(datedeb);
    console.log(datefin);
    dispatch(
      getTraining(
        pageNumber,
        prices,
        categoriesid,
        heures,
        gouvernoratid,
        cityid,
        datedeb,
        datefin,
        selected,
        InputSearch
      )
    ).then((res) => {
      setAlltraining([...Alltraining, ...res.Alltraining]);
    });
  };

 


  const handleTraining2 = (filter) => {
    
    dispatch(
      getnotshowfilter(
        pageNumber
      )
    ).then((res) => {
      setAlltraining([...Alltraining, ...res.Alltraining]);
    });
  };





  const filterApply = (filter) => {
    console.log("heni houni");
    console.log(filter);
    SetFilter(filter);
    const prices = filter.Prices;
    const categoriesid = filter.CategoriesIds;
    const heures = filter.Heures;
    const gouvernoratid = filter.GouvernoratIds;
    const cityid = filter.citiesids;
    const datedeb = filter.Datedeb;
    const datefin = filter.Datefin;
    const selected = filter.Selected;
    console.log("pricefilter", prices);
    console.log("categfilter", categoriesid);
    console.log("heuressfilter", heures);
    console.log("gouvernoratfilter", gouvernoratid);
    console.log("datedevfilter", datedeb);
    console.log("datefinfilter", datefin);
    dispatch(
      getTraining(
        pagefilter,
        prices,
        categoriesid,
        heures,
        gouvernoratid,
        cityid,
        datedeb,
        datefin,
        selected,
        InputSearch
      )
    ).then((res) => {
      setAlltraining(res.Alltraining);
    });
  };

  const showMore = (page) => {
    console.log("page noumrou");
    console.log(page);
    handleTraining(filter);
  };
    const showMore2 = (page) => {
    console.log("page noumrou");
    console.log(page);

    handleTraining2(filter);

   
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
      getTraining(
        pagefilter,
        prices,
        categoriesid,
        heures,
        gouvernoratid,
        cityid,
        datedeb,
        datefin,
        selected,
        InputSearch
      )
    ).then((res) => {
      setAlltraining(res.Alltraining);
    });
  };



  const onClick = () => {

    setShow(!show);
    dispatch(getnotshowfilter(pagefilter)).then((res) => {
      setAlltraining(res.Alltraining);
    });
   
    
  };




  const showfilter = () => {
    return <Filter 
   OnfilterApply={filterApply} /> 
  }

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
          show={show}
          onClick={onClick}
         
        />
        <Grid item xs={12} lg={3}>
     {   unshowfilter()}
   
        </Grid>
        { show ? <Grid container item lg={9}>
          {!Alltraining
            ? null
            : Alltraining.map((Training) => (
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  lg={6}
                  key={Training._id}
                >
                  <Cards Training={Training} />
                </Grid>
              ))}
        </Grid> : <Grid container item lg={12}>
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
            
        </Grid>}
      </Grid>
      <Button className={classes.voirplus} onClick={showMorebtn} size="large">
        Voir Plus
      </Button>
    
      
    </div>
  );
};
export default Training;