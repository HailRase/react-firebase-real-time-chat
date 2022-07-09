import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {Context} from "../../index";
import firebase from 'firebase/compat/app';

const Login = () => {
    const {auth} = useContext(Context)
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await auth.signInWithPopup(provider)
        console.log(user)
    }
    const styles = useStyles()
    return (
        <Container>
            <Grid container
                  className={styles.gridContainer}
                  alignItems={'center'}
                  justifyContent={'center'}
            >
                <Grid container
                      alignItems={'center'}
                      direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'} >Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;