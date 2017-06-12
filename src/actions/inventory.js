// -- C O N S T A N T S

export const ADD_CARDBOARD = 'ADD_CARDBOARD';
export const ADD_TAPE = 'ADD_TAPE';

// -- A C T I O N S


export const addCardboard = ( count ) => {
    return {
        type: ADD_CARDBOARD,
        payload: {
        	count: count
        }
    };
};

export const addTape = ( count ) => {
    return {
        type: ADD_TAPE,
        payload: {
        	count: count
        }
    };
};