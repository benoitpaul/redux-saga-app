import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

export default function configureStore() {
    let store = createStore(rootReducer);
    return store;
}