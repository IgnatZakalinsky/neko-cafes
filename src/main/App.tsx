import React, {useState} from 'react';
import s from './App.module.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Profile from "../pages/profile/Profile";

const App = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    return (
        <div className={s.App}>
            <Header setShowNavBar={() => setShowNavBar(!showNavBar)}/>
            <div className={s.page}>
                {showNavBar && <NavBar/>}
                <Profile/>
            </div>
        </div>
    );
};

export default App;
