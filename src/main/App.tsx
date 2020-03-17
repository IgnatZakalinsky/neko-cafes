import React from 'react';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Page from "./Page";

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Page/>
            </HashRouter>
        </Provider>
    );
};

export default App;
