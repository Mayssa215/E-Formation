import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, } from 'react-redux';
import { getgouvernorat } from '../../actions/gouvernorat';
import { getCity } from '../../actions/cities';





const Gouvernorat = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [Gouvernorat, setGouvernorats] = useState([]);
    const [City, setCity] = useState([]);
    const [filtredCity, setfiltredCity] = useState([]);
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
    
    const handleChangegouvernorat = (e, val) => {
        val === null ? setfiltredCity([]) :
        setfiltredCity  (City.filter((x) => x.id_gouvernorat === val._id));
    }; 

  
    const handleChangecity = (e, val) => {
        e.preventDefault();
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
export default Gouvernorat 