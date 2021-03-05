import React, { useEffect, useState } from "react";
import { getTraining} from "../../actions/training";

import {  useDispatch } from "react-redux";
import Training from "./training";

const Paging= () => {
 
  const [pageNumber, setPageNumber] = useState(1);
  const [Alltraining,setAlltraining]= useState([]);


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

      <button onClick={ showMore}>Voir Plus </button>
    </div>
  );
};
export default Paging;