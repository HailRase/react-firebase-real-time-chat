import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../../Utils/consts";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const NavBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>LOGIN</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;