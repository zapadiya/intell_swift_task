import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";

import global from './global';
import user from './user';
import pet from './pet';

const config = {
	key: "root",
	debug: true,
	storage: AsyncStorage,
};

const AppReducers = combineReducers({
	global,
	user,
	pet
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

const pReducer = persistReducer(config, rootReducer);

export default pReducer;

