import React from "react";
import ChatsPage from "../../pages/chats/ChatsPage";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "../../pages/profile/Profile";
import Error404Page from "./error404/Error404Page";

export const MAP_PATH = '/map';
export const PROFILE_PATH = '/profile';
export const CHATS_PATH = '/chats';

type RoutesProps = {

}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PROFILE_PATH}/>}/>

            <Route path={MAP_PATH} render={() => <div style={{height: '90vh'}}>map</div>}/>

            <Route path={PROFILE_PATH} render={() => <Profile/>}/>

            <Route path={CHATS_PATH + '/:id'} render={() => <ChatsPage/>}/>
            <Route path={CHATS_PATH} render={() => <ChatsPage/>}/>

            <Route render={() => <Error404Page/>}/>
        </Switch>
    );
};

export default Routes;
