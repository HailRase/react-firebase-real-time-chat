import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privetRoutes, publicRoutes} from "../../Routes/routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../../Utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";

const MainRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privetRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact={true}/>
                )}
                <Route path='*' element={<Navigate to={CHAT_ROUTE}/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact={true}/>
                )}
                <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/>
            </Routes>
        );
};

export default MainRouter;