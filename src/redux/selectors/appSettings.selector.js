const getThemeState = (state) => state?.appSettings.is_dark_mode;

const appSettingsSelectors = {
    getThemeState,
};

export default appSettingsSelectors;
