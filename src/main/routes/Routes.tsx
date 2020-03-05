import React from "react";
import ChatsPage from "../../pages/chats/ChatsPage";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "../../pages/profile/Profile";
import Error404Page from "./error404/Error404Page";

export const MAP_PATH = '/map';
export const PROFILE_PATH = '/profile';
export const CHATS_PATH = '/chats';

type RoutesProps = {
    closeNavBar: () => void;
}

const Routes: React.FC<RoutesProps> = ({closeNavBar}) => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PROFILE_PATH}/>}/>

            <Route path={MAP_PATH} render={() => <div>map</div>}/>

            <Route path={PROFILE_PATH} render={() => <Profile closeNavBar={closeNavBar}/>}/>

            <Route path={CHATS_PATH + '/:id'} render={() => <ChatsPage closeNavBar={closeNavBar}/>}/>
            <Route path={CHATS_PATH} render={() => <ChatsPage closeNavBar={closeNavBar}/>}/>

            <Route render={() => <Error404Page closeNavBar={closeNavBar}/>}/>
        </Switch>
    );
};

export default Routes;
