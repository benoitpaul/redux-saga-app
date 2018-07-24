import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import blogSaga from '../blog/saga';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(blogSaga);
    return store;
}