import { ACTIVE_TAB } from "./ActionTypes"

export const activeTab = activeTab => {
	return {
		type: ACTIVE_TAB,
		payload: activeTab
	}
}