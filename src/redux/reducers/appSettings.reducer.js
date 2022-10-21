import types from '../types';

const INIT_STATE = {
    is_dark_mode: false,
}

const appSettingsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.appSettings.SET_THEME:
            return {
                ...state,
                is_dark_mode: action.payload,
            };
        default:
            return state;
    }
};

export default appSettingsReducer;
