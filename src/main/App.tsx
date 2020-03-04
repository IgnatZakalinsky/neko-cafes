import React from 'react';
import './App.css';
import Header from "./header/Header";
import NavBar from "./navbar/NavBar";
import Profile from "../pages/Profile";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div style={{
                marginTop: 40, // header
            }}>
                <NavBar/>
                <Profile/>
            </div>
        </div>
    );
};

export default App;
