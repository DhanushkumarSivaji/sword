import {combineReducers} from 'redux'
import employeesReducer from './employees-reducer'
import activeTabReducer from './tab-reducers'
import filterReducer from './filter-reducer'

export default combineReducers({
    employees: employeesReducer,
    activeTab: activeTabReducer,
    filters: filterReducer
})