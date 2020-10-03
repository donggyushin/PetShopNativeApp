import {applyMiddleware, createStore} from 'redux';

import RootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(RootReducer, composeEnhancers);

export type StoreType = ReturnType<typeof RootReducer>;

export default store;
