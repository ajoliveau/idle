// -- C O N S T A N T S
export const SWITCH_MISSION = 'SWITCH_MISSION';
export const NEXT_MISSION = 'NEXT_MISSION';
export const PREVIOUS_MISSION = 'PREVIOUS_MISSION';
export const NEXT_TARGET = 'NEXT_TARGET';
export const PREVIOUS_TARGET = 'PREVIOUS_TARGET';

// -- A C T I O N S

// Switch to another rocket
export const switchMission = ( mission ) => {
    return {
        type: SWITCH_MISSION,
        payload: {
            mission: mission
        }
    };
};

export const nextMission = ( mission ) => {
    return {
        type: NEXT_MISSION,
    };
};

export const previousMission = ( mission ) => {
    return {
        type: PREVIOUS_MISSION,
    };
};

export const nextTarget = ( target ) => {
    return {
        type: NEXT_TARGET,
    };
};

export const previousTarget = ( target ) => {
    return {
        type: PREVIOUS_TARGET,
    };
};
