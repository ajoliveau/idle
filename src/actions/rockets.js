// -- C O N S T A N T S
export const SWITCH_ROCKET = 'SWITCH_ROCKET';
export const NEXT_ROCKET = 'NEXT_ROCKET';
export const PREVIOUS_ROCKET = 'PREVIOUS_ROCKET';
export const LAUNCH_ROCKET = 'LAUNCH_ROCKET';

// -- A C T I O N S

// Switch to another rocket
export const switchRocket = ( rocket ) => {
    return {
        type: SWITCH_ROCKET,
        payload: {
        	rocket: rocket
        }
    };
};

export const nextRocket = ( rocket ) => {
    return {
        type: NEXT_ROCKET,
    };
};

export const previousRocket = ( rocket ) => {
    return {
        type: PREVIOUS_ROCKET,
    };
};

// Launch the current rocket
export const launchRocket = ( ) => {
    return {
        type: LAUNCH_ROCKET,
    };
};
