import { createStore, combineReducers } from 'redux';

//Reducers
import routing from './routing/reducers';

const rootReducer = combineReducers({ routing });

const initialState = {
    routing: {
        current: null
    }
}

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;