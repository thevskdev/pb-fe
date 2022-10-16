import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => ({
    getItem() {
        return Promise.resolve(null);
    },
    setItem(_key, value) {
        return Promise.resolve(value);
    },
    removeItem() {
        return Promise.resolve();
    },
});

const storage =  typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'appSettings' ],

};
const reduxPersist = ({
    rootReducer,
}) => {
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return {
        persistedReducer,
    };
};

export default reduxPersist;
