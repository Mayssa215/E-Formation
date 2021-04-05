import React, { useState } from 'react';
import { Paper} from '@material-ui/core';

import Speciality from './specialty';

import useStyles from './styles';
import { Scrollbars } from 'rc-scrollbars';
import Genderage from './Genderage';


const FilterFormer = ({OnfilterApplyFormer}) => {
const classes = useStyles();



const [filterformer,SetFilterformer]=useState({SpecialityIds:[],Sexe:[],Age:[0,100] });

const OnfilterApplyAge=(age)=>
 {
    filterformer.Age=age;
    OnfilterApplyFormer(filterformer); }
    

const onFilterSpecialityAplly=(Speciality)=>
{
    filterformer.SpecialityIds=Speciality;
    OnfilterApplyFormer(filterformer);
}
const OnfilterApplySexe =(sexe) => {
filterformer.Sexe=sexe;
OnfilterApplyFormer(filterformer);
}
return (
    <Paper className={classes.Paper}>
     <Scrollbars autoHide className={classes.scroll}>       
     <Speciality onFilterSpecialityAplly={onFilterSpecialityAplly}  />
     <div className={classes.sliders}>
<Genderage OnfilterApplyAge={OnfilterApplyAge} OnfilterApplySexe={OnfilterApplySexe}/>
     </div>
    </Scrollbars>
    </Paper>
    )
};
export default FilterFormer;