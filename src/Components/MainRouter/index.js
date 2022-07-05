import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privetRoutes, publicRoutes} from "../../Routes/routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../../Utils/consts";

const MainRouter = () => {
    const user = false
    return user ?
        (
            <Routes>
                {privetRoutes.map(({path, Component}) =>
                    <Route path={path} element={<Component/>} exact={true}/>
                )}
                <Route path='*' element={<Navigate to={CHAT_ROUTE}/>}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} element={<Component/>} exact={true}/>
                )}
                <Route path='*' element={<Navigate to={LOGIN_ROUTE}/>}/>
            </Routes>
        );
};

export default MainRouter;