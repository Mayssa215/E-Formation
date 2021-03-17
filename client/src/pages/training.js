  
import React, { useState, useEffect } from "react";
import { Container, Grid,Button } from "@material-ui/core";
import useStyles from "./styles";
import Filter from "../components/Filter/filter";
import Recherche from "../components/Filter/recherche";
import { useDispatch } from "react-redux";
import { getTraining } from "../actions/training";
import Cards from "../components/Training/cards";

const Training = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [ pagefilter , setPageFilter] =useState(1);
  const [prices, setPrices] = React.useState([0, 10000]);
  const [categoriesid, setCategoriesId] = useState([]); 
  const [heures, setHeures] = React.useState([0, 10000]);
  const [nomCity, setnomCity] = useState([]);
  const [ville, setville] = useState([]);

  const [filter, SetFilter] = useState({
    CategoriesIds: [],
    Prices: [0, 10000],
    Heures:[0,10000],
  });
  const [Alltraining, setAlltraining] = useState([]);

  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(  getTraining(pageNumber, prices,categoriesid, heures )).then((res) => {
      setAlltraining(res.Alltraining);
      setnomCity(res.trainings);
      setPageNumber(pageNumber + 1);
     
 
    });
  }, [dispatch]);



  const handleTraining = (filter) => {
    const prices = filter.Prices;
    const categoriesid = filter.CategoriesIds;
    const heures= filter.Heures;
    dispatch(getTraining(pageNumber, prices,categoriesid,heures)).then((res) => {
      setAlltraining([...Alltraining, ...res.Alltraining]);
    });
  };

  const onClick = () => {
    setShow(!show);
  };

  const filterApply = (filter) => {
  /*   console.log("heni houni");
    console.log(filter);  */
    SetFilter(filter);
    const prices = filter.Prices;
    const categoriesid = filter.CategoriesIds;
    const heures= filter.Heures;
/* 
    console.log("pricefilter", prices);
    console.log("categfilter", categoriesid);
    console.log("heuressfilter", heures); */

    dispatch(getTraining(pagefilter, prices,categoriesid,heures)).then((res) => {
      setAlltraining(res.Alltraining);
    });
  };

  const showMore = (page) => {
/*     console.log("page noumrou");
    console.log(page); */
    handleTraining(filter);
  };

  const showMorebtn = () => {
    showMore(pageNumber);
  };


  return (
    <div className={classes.container}>
      <Grid container spacing={1}>
        <Recherche onClick={onClick} show={show} />
        <Grid item xs={12}md={3} sm={4}>
          {show ? <Filter OnfilterApply={filterApply} /> : null}
        </Grid>
        {!Alltraining ? null : (
            Alltraining.map((Training) => (
                <Grid container item xs={12} md={4} sm={8}  key={Training._id} >
                 <Cards Training={Training} />
                </Grid>
              )) 
          
      )}
        
    </Grid>
    <Button className={classes.voirplus} onClick={showMorebtn} size="large">Voir Plus </Button>
    </div>

  );
};
export default Training;