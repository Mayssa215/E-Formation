import React,{useState} from 'react';
import { Paper} from '@material-ui/core';

import Categorie from './categorie';
import Infos from './index';
import Date from './date';
import Gouvernorat from './gouvernorat'
import useStyles from './styles';
import { Scrollbars } from 'rc-scrollbars';



const Filter = ({OnfilterApply}) => {
    const classes = useStyles();
    
const [filter,SetFilter]=useState({CategoriesIds:[],Prices:[0,10000],Heures:[0,150] });

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

const filterApplyDuree=(heures)=>
{
    filter.Heures=heures;
    OnfilterApply(filter);
}
    return (
    <Paper className={classes.Paper}>
     <Scrollbars autoHide className={classes.scroll}>       
     <Categorie   onFilterCategoriesAplly={FilterCategoriesAplly}/>
     <div className={classes.sliders}>
     <Gouvernorat />
     <Infos  OnfilterApplyPrice={filterPriceApply}/>
     </div>
     <Date />
    </Scrollbars>
    </Paper>
    )
};
export default Filter;