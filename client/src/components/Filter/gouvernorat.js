import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';
import { useDispatch, } from 'react-redux';
import { getgouvernorat } from '../../actions/gouvernorat';



const Gouvernorat = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [Gouvernorat, setGouvernorats] = useState([]);
   const[ gouvId, setgovId] = useState('');
   const[ gouvNom, setgovNom] = useState('');

    useEffect(() => {
        dispatch(getgouvernorat()).then((res) => {
            setGouvernorats(res);
        });
    }, [])
    const handleChangegouvernorat = (e, val) => {
        e.preventDefault();
        setgovId({
            gouvId: val._id,
        });
        setgovNom({
            gouvNom: val.nom,
        });
    }; 
    return (
        <Autocomplete
        onChange={handleChangegouvernorat}
        options={Gouvernorat}
        getOptionLabel={(option) => option.nom}
        renderInput={(params) => <TextField    {...params} label="Gouvernorat"   
        variant="outlined"   className={classes.gouvernorat}
        />}
      />
    );
};
export default Gouvernorat 