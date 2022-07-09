import './App.css';
import {HashRouter} from "react-router-dom";
import NavBar from "./Components/Navbar";
import MainRouter from "./Components/MainRouter";
import {useContext} from 'react';
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./Components/Loader";


function App() {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Loader/>
    }

    return (
        <HashRouter>
            <NavBar/>
            <MainRouter/>
        </HashRouter>
    );
}

export default App;
