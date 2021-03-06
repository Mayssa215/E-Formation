import React, { useState } from "react";
import { Container, Grid} from '@material-ui/core';
import useStyles from '../components/Filter/styles';
import Filter from '../components/Filter/index';
import Recherche from '../components/Filter/recherche';
import Paging from "../components/Training/paging";

const Training = () => {


    const [show, setShow] = useState(true);
    const classes = useStyles();
    const onClick = () => {
        setShow(!show);
    }

    return (
        <Container >
              <Grid container  spacing={3}>
            
                <Recherche onClick={onClick} show={show} />
                <Grid item xs={12} sm={6}>
                {show ?
                    <Filter />
                    : null}
            </Grid>
            <Grid item xs={12} sm={6}>

                <Paging />
            </Grid>
            </Grid>
        </Container>




    );
};
export default Training;