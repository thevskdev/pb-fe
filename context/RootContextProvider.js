import React from 'react';
import { Provider } from 'react-redux';
import storeObj from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppThemeWrapper from '../theme/theme';

function RootContextProvider({ children }) {
    return (
        <div>
            <Provider store={storeObj.store}>
                <PersistGate loading={null} persistor={storeObj.persistor}>
                    <AppThemeWrapper>
                        {children}
                    </AppThemeWrapper>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default RootContextProvider;
