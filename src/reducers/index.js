import { combineReducers } from 'redux';

const synopsisNav = (state = [], action) => {
    switch(action.type) {
        case 'ACTIVE_SYNOPSIS_ITEM':
            return {
                active: action.payload.id
            };
        default:
            return state;
    }
}

const reducers = combineReducers({
    synopsisNav
});

export default reducers;