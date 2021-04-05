import React, { useState } from 'react';
import { Paper} from '@material-ui/core';

import Speciality from '../FilterFormer/specialty';

import useStyles from './styles';
import { Scrollbars } from 'rc-scrollbars';
import Gouvernorat from '../Filter/gouvernorat';


const FilterCentre = ({OnfilterApplyCentre}) => {
const classes = useStyles();
const [filtercentre,SetFiltercentre]=useState({SpecialityIds:[] ,GouvernoratIds:[],citiesids:[]});




const FilterGouvernoratAplly=(Gouvernorat)=>
{
     filtercentre.GouvernoratIds=Gouvernorat;
     OnfilterApplyCentre(filtercentre); 
}
const FilterCitiesAplly=(City)=>
{
    filtercentre.citiesids=City;
    OnfilterApplyCentre(filtercentre);
} 
    

const onFilterSpecialityAplly=(Speciality)=>
{
    filtercentre.SpecialityIds=Speciality;
    OnfilterApplyCentre(filtercentre); 
}

return (
    <Paper className={classes.Paper}>
     <Scrollbars autoHide className={classes.scroll}>       
     <Speciality onFilterSpecialityAplly={onFilterSpecialityAplly}  />
     <div className={classes.sliders}>
     <Gouvernorat onFilterGouvernoratAplly={FilterGouvernoratAplly}  onFilterCityAplly={FilterCitiesAplly}   />
     </div>
    </Scrollbars>
    </Paper>
    )
}
export default FilterCentre;