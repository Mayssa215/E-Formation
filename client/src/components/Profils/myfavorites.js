import React, { useState, useEffect } from 'react';
import {Getfavoritetrainings} from '../../actions/favorite';
import { useDispatch } from 'react-redux';
import Cards from './myfavcards';
import { Getfavoritebyid } from '../../actions/favorite';

import useStyles from "./styles";

import {
 Grid,
    Button,
    Typography,
    
  } from "@material-ui/core";

const   Myfavorites = () => {
   const classes = useStyles();
    const dispatch = useDispatch();
    const [infos, setinfos]= useState(JSON.parse(localStorage.getItem('profile')));
    const [Data, setData] = useState(infos);
    const [iduser,setiduser]= useState(Data._id);
    const [page, setPage] = useState(1);
    const [pageNumber, setpageNumber] = useState(1);
    const [Trainingsfavorite, setTrainingsfavorite]=  useState([])
    const [shownext, setShownext]= useState(true);
    const [tablefav, settablefav] = useState([]);

    
    useEffect(() => {
        dispatch(Getfavoritetrainings(iduser,page)).then((res) => {
            if(res.length === 0)
            { setShownext(false);
            }
            else {
            setTrainingsfavorite(res);
            setpageNumber(pageNumber + 1);
            }
        

        });
        dispatch (Getfavoritebyid(iduser)).then((res) => {
            settablefav(res);
          });
        
    }, [dispatch]);

    const handlemore = () => {

        dispatch(Getfavoritetrainings(iduser,pageNumber)).then((res) => {
            if(res.length === 0)
                {
                    setTrainingsfavorite([...Trainingsfavorite, ...res]);
    
                        setShownext(false);
                }
                else{
                    setTrainingsfavorite([...Trainingsfavorite, ...res]);
    
                }
       
        });
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
   
     { Trainingsfavorite.map((training) => (
 <Grid  item lg={6} md={4} sm={4} xs={12}       key={training._id}>
   <Cards Training={training}  Tablefav={tablefav}/>
 </Grid>

 ))}
 { shownext ?  <Button className={classes.voirplus} onClick={showMorebtn} size="large">
  Voir Plus
      </Button> : null}

     </Grid> 
 </div>
        
    )

}
export default Myfavorites;



