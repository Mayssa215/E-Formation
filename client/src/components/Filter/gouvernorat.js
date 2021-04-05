import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, } from 'react-redux';
import { getgouvernorat } from '../../actions/gouvernorat';
import { getCity } from '../../actions/cities';

const Gouvernorat = ({onFilterGouvernoratAplly, onFilterCityAplly}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [Gouvernorat, setGouvernorats] = useState([]);
    const [City, setCity] = useState([]);
    const [filtredCity, setfiltredCity] = useState([]);
    const [GouvernoratIds, setGouvernoratIds] =useState([]);
    const [citiesids, setCitiesIds] = useState([]);

    useEffect(() => {
        dispatch(getgouvernorat()).then((res) => {
            setGouvernorats(res);
        });
    }, []);
    
    useEffect(() => {
        dispatch(getCity()).then((res) => {
           setCity(res);
        
        }); 
    }, []);
    
    const handleChangegouvernorat = (event, value) => {

        value === null ? setfiltredCity([]) :
        setfiltredCity(City.filter((x) => x.id_gouvernorat === value._id));
        if(value !== null) 
        {
            let val=value._id;
            if(val) 
            {
                GouvernoratIds.push(val);
                setGouvernoratIds(GouvernoratIds);
              console.log(GouvernoratIds);
      
            }
            else 
            {
                GouvernoratIds.splice(GouvernoratIds.indexOf(val),1);
                setGouvernoratIds(GouvernoratIds);
                console.log(GouvernoratIds);
      
            }
            onFilterGouvernoratAplly(GouvernoratIds);
        }
        else { let val = null}
        
            
        };
    

  
    const handleChangecity = (e, value) => {
        e.preventDefault();

        if(value !== null) 
        {
            let val=value._id;
            if(val) 
            {
                citiesids.push(val);
                setCitiesIds(citiesids);
              console.log(citiesids);
      
            }
            else 
            {
                citiesids.splice(citiesids.indexOf(val),1);
                setCitiesIds(citiesids);
                console.log(citiesids);
      
            }
            onFilterCityAplly(citiesids);
        }
        else { let val = null}




    }; 
    return (
        <div className={classes.gouvVille}>
        <Autocomplete
        onChange={handleChangegouvernorat}
        options={Gouvernorat}
        getOptionLabel={(option) => option.nom}
        renderInput={(params) => <TextField    {...params} label="Gouvernorat"    variant="outlined" 
        className={classes.gouvernorat}
        />}
      />
      <Autocomplete
      onChange={handleChangecity}
      options={filtredCity}
      getOptionLabel={(option) => option.nom}
      renderInput={(params) => <TextField    {...params} label="ville"   
      variant="outlined"   className={classes.gouvernorat}
      />}
    />

    </div>

    );
};
export default Gouvernorat; 