/*
 * Actions
 */
const SET_PIN = 'SET_PIN';

export const RESET_DATA = 'RESET_DATA';

/*
 * Action Creators
 */

export const setPin = pin => ({
    type: SET_PIN,
    pin
});

export const resetData = () => ({
    type: RESET_DATA
});

/*
 * Reducers
 */

const initialUserData = {
    pinCode: ''
};

export const userData = (state = initialUserData, action) => {
    switch (action.type) {
    case SET_PIN:
        return {
            ...state,
            pinCode: action.pin
        };
    default:
        return state;
    }
};