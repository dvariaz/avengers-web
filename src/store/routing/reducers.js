export const SET_CURRENT_SECTION = 'SET_CURRENT_SECTION';

export default function(state = [], action) {
    switch(action.type) {
        case SET_CURRENT_SECTION:
            return {
                current: action.payload.section
            };
        default:
            return state;
    }
}