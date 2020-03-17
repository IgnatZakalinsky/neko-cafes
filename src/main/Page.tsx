import React, {useState} from 'react';
import s from './Page.module.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Routes from "./routes/Routes";

const Page = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const closeNavBar = () => {
        if (showNavBar) setShowNavBar(false);
    };

    return (
        <div className={s.page}>
            <Header setShowNavBar={() => setShowNavBar(!showNavBar)}/>

            <div className={s.content}>
                {showNavBar && <NavBar/>}

                <div onClick={closeNavBar}>
                    <Routes/>
                </div>
            </div>
        </div>
    );
};

export default Page;
