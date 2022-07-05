import {CHAT_ROUTE, LOGIN_ROUTE} from "../Utils/consts";
import Login from "../Components/Login";
import Chat from "../Components/Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privetRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]