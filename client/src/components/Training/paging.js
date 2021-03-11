import React, { useEffect, useState } from "react";
import { getTraining} from "../../actions/training";
import useStyle from "./styles";
import {  useDispatch } from "react-redux";
import Training from "./training";
import { Button } from "@material-ui/core";

const Paging= () => {
 
  const [pageNumber, setPageNumber] = useState(1);
  const [Alltraining,setAlltraining]= useState([]);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(getTraining(pageNumber)).then((res) => {

      setAlltraining(res.Alltraining);
      setPageNumber(pageNumber + 1);
    } ); 
  }, [dispatch]);
  
  
const showMore = () => { 
  dispatch(getTraining(pageNumber)).then((res) => {
  setAlltraining([...Alltraining, ...res.Alltraining]);
    setPageNumber(pageNumber + 1);
  })
};


  return (
    <div>
     
      <Training Alltraining={Alltraining} />
      <div>
      <Button  className={classes.voirplus}  onClick={ showMore}  size="large">Voir Plus </Button>
      </div>
      </div>
     
  );
};
export default Paging;