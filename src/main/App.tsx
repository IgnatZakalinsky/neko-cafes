import React, {useState} from 'react';
import s from './App.module.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {Provider} from "react-redux";
import {store} from "./store/store";

const App = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const closeNavBar = () => {
        if (showNavBar) setShowNavBar(false);
    };

    return (
        <Provider store={store}>
            <HashRouter>
                <div className={s.App}>
                    <Header setShowNavBar={() => setShowNavBar(!showNavBar)}/>

                    <div className={s.page}>
                        {showNavBar && <NavBar/>}

                        <div onClick={closeNavBar}>
                            <Routes/>
                        </div>
                    </div>
                </div>
            </HashRouter>
        </Provider>
    );
};

export default App;
