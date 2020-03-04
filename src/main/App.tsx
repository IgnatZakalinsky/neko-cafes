import React from 'react';
import './App.css';
import Header from "./header/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div style={{
                marginTop: 40, // header
            }}>
                <div>
                    navbar
                </div>
                <div>
                    Profile Page
                    <div>
                        img
                    </div>
                    <div>
                        info
                    </div>
                    <div>
                        comments
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
