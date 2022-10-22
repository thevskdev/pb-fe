// colors
import React from 'react';
import { CacheProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import appSettingsSelectors from 'src/redux/selectors/appSettings.selector';
import {
    createTheme, ThemeProvider,
} from '@mui/material/styles';

export const themeAssets = {
    radius: '10px',
};


function AppThemeWrapper({ children }) {
    // const { emotionCache = clientSideEmotionCache } = appProps;

    const isDarkMode = useSelector(appSettingsSelectors?.getThemeState);

    // theme of app
    const currentTheme = isDarkMode ? 'dark' : 'light';
    // font-family
    const fonts = [ 'Poppins', 'sans-serif' ].join(', ');

    const primaryMainColor = isDarkMode ? '#0A1929' : '#F3AA4E';

    const sidebarThemeBgColor = isDarkMode ? '#0A1929' : '#f79f9ffc';

    const fontThemeColor =  isDarkMode ? '#FFFFFF' : '#ffffff';
    const iconThemeColor =  isDarkMode ? '#FFFFFF' : '#FFFFFF';
    const selectedItemNavColor = isDarkMode ? '#f4a52b' : '#3c290ce8';
    const themeBackgroundColor = isDarkMode ? '#464646' : '#000000';
    const themeColor = {

        primary: {
            // light: will be calculated from palette.primary.main,
            main: primaryMainColor,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
            light: fontThemeColor,
            dark: fontThemeColor,
            bgBackground: themeBackgroundColor,
        },
        secondary: {
            light: fontThemeColor,
            dark: fontThemeColor,
            main: fontThemeColor,
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // textField
        textFieldInputBackgroundColor: '#282828',
        helperTextWarningColor: '#e71919',

        // typography styles

        typographyStyles: {
            typographyFontColor: fontThemeColor,
        },

        // button colors
        buttonColors: {
            btnBgColor: '#fb8c00',
            btnTxtColor: '#212121',
            btnHoverBgColor: '#f57c00',
        },
        // side nav item colors
        sidenavItemsColors: {
            selectedNavItem: selectedItemNavColor,
        },
        // sidebar colors
        sidebarStyles: {
            bgColor: sidebarThemeBgColor,
        },

        // icon colors
        iconStyles: {
            iconColor: iconThemeColor,
        },

    };
    const globalTheme = React.useMemo(
        () => createTheme({
            typography: {
                caption: {
                    fontFamily: fonts,
                },
                fontFamily: fonts,
            },
            palette: {
                mode: currentTheme,
                ...themeColor,
                ...themeAssets,
                text: {
                    primary: fontThemeColor,
                    secondary: fontThemeColor,
                },
            },
        }),
        [ currentTheme, fonts ],
    );

    return (
        <ThemeProvider theme={globalTheme}>
            <div id="theme" className={`theme-${ currentTheme }`}>
                {children}
            </div>
        </ThemeProvider>
    );
}

export default AppThemeWrapper;
