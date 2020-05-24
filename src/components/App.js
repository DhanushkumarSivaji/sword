import React, {Component} from 'react'
import {connect} from 'react-redux'
import Tabs from './Tabs'
// import EmployeeListFilter from './EmployeeListFilter'
import { fetchEmployees } from '../actions/employees-actions';
import '../styles/styles.css'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchEmployees())
  }

  render() {
    return (
      <div className="App">
				<Tabs />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		employees: state.employees
	}
}

export default connect(mapStateToProps)(App)