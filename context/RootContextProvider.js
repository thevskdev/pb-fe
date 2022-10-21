import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeObj from 'src/redux/store';
import AppThemeWrapper from '../theme';

function RootContextProvider({ children ,appProps}) {
    return (
        <div>
            <Provider store={storeObj.store}>
                <PersistGate loading={null} persistor={storeObj.persistor}>
                {() => (
                        <AppThemeWrapper appProps={appProps}>
                            {children}
                        </AppThemeWrapper>
                )}
                </PersistGate>
            </Provider>
        </div>
    );
}

export default RootContextProvider;
