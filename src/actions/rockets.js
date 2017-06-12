// -- C O N S T A N T S

export const SWITCH_ROCKET = 'SWITCH_ROCKET';

// -- A C T I O N S


export const switchRocket = ( rocket ) => {
    return {
        type: SWITCH_ROCKET,
        payload: {
        	rocket: rocket
        }
    };
};
