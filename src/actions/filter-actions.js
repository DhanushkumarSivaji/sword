import { TEXT_FILTER, SKILL_FILTER, GENDER_FILTER } from "./ActionTypes"

export const textFilter = (text = '') => {
	return {
		type: TEXT_FILTER,
		payload: text
	}
}

export const skillFilter = (option = '') => {
	return {
		type: SKILL_FILTER,
		payload: option
	}
}

export const genderFilter = (option = '') => {
	return {
		type: GENDER_FILTER,
		payload: option
	}
}