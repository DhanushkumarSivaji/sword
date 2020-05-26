import { TEXT_FILTER, SKILL_FILTER } from '../actions/ActionTypes'

const initialState = {
	text: '',
	skill: '',
	gender: ''
}

export default (state = initialState, action) => {
	switch(action.type) {
		case TEXT_FILTER:
			return {
				...state,
				text: action.payload
			}
		case SKILL_FILTER:
			return {
				...state,
				skill: action.payload
			}
		default:
			return state
	}
}