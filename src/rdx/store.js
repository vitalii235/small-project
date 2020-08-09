import { createStore, compose, applyMiddleware } from "redux"
import persistReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(persistReducer, compose(applyMiddleware(thunk), devTools))
export const persistor = persistStore(store)

