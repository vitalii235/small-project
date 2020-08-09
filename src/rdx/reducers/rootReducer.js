import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    reducer:mainReducer
})
const persistConfig = {
    'key': 'root',
    storage,
    'whitelist': ['reducer']
}
export default persistReducer(persistConfig, rootReducer)