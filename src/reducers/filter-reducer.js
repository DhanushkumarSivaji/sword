import { TEXT_FILTER, SKILL_FILTER, COUNTRY_FILTER, GENDER_FILTER } from '../actions/ActionTypes'

const initialState = {
	text: '',
	skill: '',
	country: '',
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
		case COUNTRY_FILTER:
			return {
				...state,
				country: action.payload
			}
		case GENDER_FILTER:
			return {
				...state,
				gender: action.payload
			}
		default:
			return state
	}
}