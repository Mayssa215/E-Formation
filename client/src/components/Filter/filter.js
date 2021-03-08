import React from 'react';
import { Paper} from '@material-ui/core';

import Categorie from './categorie';
import Infos from './index';
import Date from './date';
import useStyles from './styles';
import { Scrollbars } from 'rc-scrollbars';



const Filter = () => {
    const classes = useStyles();

    return (
    <Paper className={classes.Paper}>
     <Scrollbars autoHide className={classes.scroll}>       
     <Categorie />
     <Infos />
     <Date />
    </Scrollbars>
    </Paper>
    )
};
export default Filter;