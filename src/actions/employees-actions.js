import { FETCH_EMPLOYEES } from "./ActionTypes"
import axios from "axios"

export const fetchEmployees = () => async dispatch => {
  const resp = await axios.get('./data.json')
  dispatch ({
    type: FETCH_EMPLOYEES,
    payload: resp.data
  })
}
