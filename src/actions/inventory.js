// -- C O N S T A N T S

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';

// -- A C T I O N S


export const addResource = ( resource, count ) => {
    return {
        type: ADD_RESOURCE,
        payload: {
            resource: resource,
        	count: count
        }
    };
};

export const removeResource = ( resource, count ) => {
    return {
        type: REMOVE_RESOURCE,
        payload: {
            resource: resource,
            count: count
        }
    };
};