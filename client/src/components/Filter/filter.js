import React, { useState } from 'react';
import { Paper} from '@material-ui/core';

import Categorie from './categorie';
import Infos from './index';
import Gouvernorat from './gouvernorat'
import useStyles from './styles';
import { Scrollbars } from 'rc-scrollbars';
import Datefilter from './datefilter';



const Filter = ({OnfilterApply}) => {
const classes = useStyles();
var curr = new Date();
curr.setDate(curr.getDate() );

var date = curr.toISOString().substr(0,10);


const [filter,SetFilter]=useState({CategoriesIds:[],Prices:[0,10000],Heures:[0,150],GouvernoratIds:[],citiesids:[], Datedeb :date, Datefin:date,Selected:[] });

const filterPriceApply=(prices)=>
{
    filter.Prices=prices;
    OnfilterApply(filter);
}
const FilterCategoriesAplly=(categories)=>
{
    filter.CategoriesIds=categories;
    OnfilterApply(filter);
}
const FilterGouvernoratAplly=(Gouvernorat)=>
{
    filter.GouvernoratIds=Gouvernorat;
    OnfilterApply(filter);
}
const FilterCitiesAplly=(City)=>
{
    filter.citiesids=City;
    OnfilterApply(filter);
}


const filterApplyDuree=(heures)=>
{
    filter.Heures=heures;
    OnfilterApply(filter);
}
const filterApplyDatedebut=(datedeb)=>
{
    filter.Datedeb=datedeb;
    OnfilterApply(filter);
}
const filterApplyDatefin = (datefin) => {
    filter.Datefin=datefin;
    OnfilterApply(filter);
}
const filterApplycheckdate = (selected) => {
    filter.Selected=selected;
    OnfilterApply(filter);
}
return (
    <Paper className={classes.Paper}>
     <Scrollbars autoHide className={classes.scroll}>       
     <Categorie onFilterCategoriesAplly={FilterCategoriesAplly}  />
     <div className={classes.sliders}>

     <Gouvernorat onFilterGouvernoratAplly={FilterGouvernoratAplly}  onFilterCityAplly={FilterCitiesAplly}   />
     <Infos OnfilterApplyPrice={filterPriceApply}  />
     </div>
     <Datefilter OnfilterApplyDuree= {filterApplyDuree}  OnfilterApplyDatedebut={filterApplyDatedebut} OnfilterApplyDatefin={filterApplyDatefin} OnfilterApplycheckdate={filterApplycheckdate} />
    </Scrollbars>
    </Paper>
    )
};
export default Filter;