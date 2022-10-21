import { combineReducers } from 'redux';
import appSettingsReducer from './appSettings.reducer';

const rootReducer = combineReducers({
    appSettings: appSettingsReducer,
});

export default rootReducer;
