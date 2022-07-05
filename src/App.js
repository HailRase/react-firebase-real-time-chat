import './App.css';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/Navbar";
import MainRouter from "./Components/MainRouter";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <MainRouter/>
        </BrowserRouter>
    );
}

export default App;
