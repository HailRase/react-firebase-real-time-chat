import React from 'react';
import {Container, Grid} from "@material-ui/core";
import  './styles.css';

const Loader = () => {
    return (
        <Container>
            <Grid container
                  className="grid-container"
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <div className="lds-grid">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;