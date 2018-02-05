import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { accountReducer, zoneReducer, commentReducer } from '../reducers/';

let store;

export default {

	configureStore: () => {
		const reducers = combineReducers({
			zoneStore: zoneReducer,
			commentStore: commentReducer,
			accountStore: accountReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}