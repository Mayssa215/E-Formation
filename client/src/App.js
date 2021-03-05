import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/form';
import Training from './pages/training';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/index';
import Search from './components/Search/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Recherche from './components/Filter/recherche';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    /*   useEffect(() => {
         dispatch(getformations());
     }, [currentId]);  */

    return (

        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/formations"> <Training/>  </Route>
                <Route path="/formateurs"> <Form currentId={currentId} setCurrentId={setCurrentId} /></Route>
            </Switch>
        </Router>
        /*  <Formations  setCurrentId={setCurrentId} />
         */        /* 
              <Grid item xs={12} sm={4}>
                  <Form currentId={currentId}  setCurrentId={setCurrentId}/>
                  </Grid>
               <Grid container justify="space-between" alignItems="stretch" spacing={9}>
                        <Grid  item xs={12} sm={12}>
                         <Formations  setCurrentId={setCurrentId}/>
                        </Grid>
                      </Grid> 
           */
    )
}
export default App;