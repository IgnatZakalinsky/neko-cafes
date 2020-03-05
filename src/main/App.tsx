import React, {useState} from 'react';
import s from './App.module.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const closeNavBar = () => {
        if (showNavBar) setShowNavBar(false);
    };

    return (
        <HashRouter>
            <div className={s.App}>
                <Header setShowNavBar={() => setShowNavBar(!showNavBar)}/>

                <div className={s.page}>
                    {showNavBar && <NavBar/>}

                    <Routes closeNavBar={closeNavBar}/>
                </div>
            </div>
        </HashRouter>

    );
};

export default App;
