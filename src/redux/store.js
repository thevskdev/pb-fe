import { applyMiddleware, compose, createStore }  from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import reduxPersist from './reduxPersist';
import { watcherSaga } from './sagas/watcherSaga';

// react saga setup
const sagaMiddleware =  createSagaMiddleware();

// redux setup
const initMiddleware = [ sagaMiddleware ];
let composeEnhancer = compose;

if (typeof window !== 'undefined') {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(applyMiddleware(...initMiddleware));

const {
    persistedReducer,
} = reduxPersist({
    rootReducer,
});

const store = createStore(persistedReducer, {}, middleware);
const persistor = persistStore(store);
const storeObj = { store, persistor };

// start watcher for redux saga
sagaMiddleware.run(watcherSaga);

export default storeObj;
