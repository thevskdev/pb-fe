import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeObj from 'src/redux/store';
import AppThemeWrapper from '../theme';
import createEmotionCache from 'utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';

function RootContextProvider({ children ,appProps}) {
    const clientSideEmotionCache = createEmotionCache()
    const {  emotionCache = clientSideEmotionCache } = appProps;
    return (
        <div>
        <CacheProvider value={emotionCache}>
            <Provider store={storeObj.store}>
                <PersistGate loading={null} persistor={storeObj.persistor}>
                        <AppThemeWrapper appProps={appProps}>
                            {children}
                        </AppThemeWrapper>
                </PersistGate>
            </Provider>
            </CacheProvider>
        </div>
    );
}

export default RootContextProvider;
