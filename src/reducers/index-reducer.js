import {combineReducers} from 'redux'
import employeesReducer from './employees-reducer'
import activeTabReducer from './tab-reducers'

export default combineReducers({
    employees: employeesReducer,
    activeTab: activeTabReducer
})