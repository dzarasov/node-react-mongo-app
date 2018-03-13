import constants from '../constants/constants';

const initialState = {
	list: [],
	map: {}
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state);
	switch (action.type) {
		case constants.PROFILE_RECEIVED:
			console.log('PROFILE_RECEIVED: ' + JSON.stringify(action.profile));
			updated['list'] = [action.profile];
			const updatedMap = Object.assign({}, state.map);
			updatedMap[action.profile.username] = action.profile;
			updated['map'] = updatedMap;

			return updated;

		default:
			return state
	}
}