import {applyMiddleware, combineReducers, createStore,} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { takeEvery } from 'redux-saga/effects';
import  thunkMiddleware from "redux-thunk"
import {profileReducer} from "../../pages/profile/bll/profileReducer";
import {chatsReducer} from "../../pages/chats/bll/chatsReducer";

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,

});

function* appSaga() {
    // yield takeEvery(SIGN_IN_REQUEST, SignInRequestSaga);
}

const sagaMiddleware = createSagaMiddleware();

// creating store
export const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, thunkMiddleware),
);

export type AppStoreType = ReturnType<typeof reducers>

// running all sagas
sagaMiddleware.run(appSaga);

// @ts-ignore
window.store = store; // for dev
