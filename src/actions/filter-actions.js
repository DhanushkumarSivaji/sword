import { TEXT_FILTER, SKILL_FILTER, GENDER_FILTER, COUNTRY_FILTER } from "./ActionTypes"

export const textFilter = (text = '') => {
	return {
		type: TEXT_FILTER,
		payload: text
	}
}

export const skillFilter = (skill = '') => {
	return {
		type: SKILL_FILTER,
		payload: skill
	}
}

export const countryFilter = (country = '') => {
	return {
		type: COUNTRY_FILTER,
		payload: country
	}
}


export const genderFilter = (gender = '') => {
	return {
		type: GENDER_FILTER,
		payload: gender
	}
}