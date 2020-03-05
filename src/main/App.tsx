import React, {useState} from 'react';
import s from './App.module.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Profile from "../pages/profile/Profile";
import Chats from "../pages/chats/Chats";

const App = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const closeNavBar = () => {
        if (showNavBar) setShowNavBar(false);
    };

    return (
        <div className={s.App}>
            <Header setShowNavBar={() => setShowNavBar(!showNavBar)}/>
            <div className={s.page}>
                {showNavBar && <NavBar/>}
                {/*<Profile/>*/}
                <Chats closeNavBar={closeNavBar}/>
            </div>
        </div>
    );
};

export default App;
