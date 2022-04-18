import {combineReducers} from 'redux';
import { createStore } from 'redux';
import authReducer from './features/reducer/authReducer';
const rootReducer = combineReducers({
    auth:authReducer
})
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;