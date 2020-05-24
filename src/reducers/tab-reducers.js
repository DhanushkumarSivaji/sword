import { ACTIVE_TAB } from "../actions/ActionTypes";

export default (state = 1, action) => {
	switch(action.type) {
		case ACTIVE_TAB:
			return action.payload
		default:
			return state
	}
}