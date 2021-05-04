import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getTrainingFormer} from '../../actions/former';
import {getTrainingcenter} from '../../actions/centre';
import { Grid, Button } from "@material-ui/core";
import Cards from "./mycards";
import useStyles from "./styles";

const Mytrainings = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(infos);
    const [userid,setuserid]= useState(Data._id);
    const [TrainingsFormer, setTrainingsFormer]=  useState([])
    const [page, setPage] = useState(1);
    const [pageNumber, setpageNumber] = useState(1);
    const [shownext, setShownext]= useState(true);


    useEffect(() => {

        if(Data.Role === 'formateur'){
        dispatch(getTrainingFormer(userid,page)).then((res) => {
            if(res.length === 0)
            { setShownext(false);
            }
    
                else {
    
            setTrainingsFormer(res);
            setpageNumber(pageNumber + 1);
                }

        });
    }
    else if (Data.Role ==='centre'){
        dispatch(getTrainingcenter(userid,page)).then((res) => {
            if(res.length === 0)
            { setShownext(false);
            }
    
                else {
    
            setTrainingsFormer(res);
            setpageNumber(pageNumber + 1);
                }

    

        });
    }
    else if (Data.Role ==='client'){
            
             setShownext(false);
            
    
            

    
    }
    }, []);

const handlemore = () => {
    if(Data.Role === 'formateur'){
        dispatch(getTrainingFormer(userid,pageNumber)).then((res) => {
            if(res.length === 0)
            {
                setTrainingsFormer([...TrainingsFormer, ...res]);

                    setShownext(false);
            }
            else{
                setTrainingsFormer([...TrainingsFormer, ...res]);

            }
   
    });
}
else if(Data.Role === 'centre'){
    dispatch(getTrainingcenter(userid,pageNumber)).then((res) => {
        if(res.length === 0)
        {           
            
            setTrainingsFormer([...TrainingsFormer, ...res]);

                setShownext(false);
        }
        else{
            setTrainingsFormer([...TrainingsFormer, ...res]);

        }
});
}
}
const showMore = (page) => {
    handlemore();
  };

 const showMorebtn = () => {     
    showMore(pageNumber);
    setpageNumber(pageNumber + 1);
    setPage(page + 1); 
      };
    return (
        <div>
      <Grid container >
{console.log(TrainingsFormer)
}   
     { TrainingsFormer.map((training) => (
 <Grid  item lg={4} md={4} sm={4} xs={12}       key={training._id}>
   <Cards Training={training} />
 </Grid>

 ))}
 { shownext ?  <Button className={classes.voirplus} onClick={showMorebtn} size="large">
  Voir Plus
      </Button> : null}

     </Grid> 
 </div>
 )
}
export default Mytrainings;