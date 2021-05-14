import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import useStyles from "./styles";


const Logout = () => {

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  
  const dispatch = useDispatch();
  const history = useHistory();
 
    console.log('ici');
    dispatch({ type: 'logout' });
    history.push('/');
    window.location.reload(false)
    setUser(null);
  
} ; export default Logout ; 