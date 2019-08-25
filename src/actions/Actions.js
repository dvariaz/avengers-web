import { ACTIVE_SYNOPSIS_ITEM } './ActionTypes';

const activeSynopsisItem = (id) => {
    return {
        type: ACTIVE_SYNOPSIS_ITEM,
        payload: {
            id
        }
    };
};

module.exports = {
    activeSynopsisItem
}