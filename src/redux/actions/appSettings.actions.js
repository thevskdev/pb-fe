import types from '../types';

const setAppTheme = (bool) => ({
    type: types.appSettings.SET_THEME,
    payload: bool,
});

const appSettingsActions = {
    setAppTheme,
};

export default appSettingsActions;
