import React, {Component} from 'react'
import {connect} from 'react-redux'
import TableBody from '@material-ui/core/TableBody';
import {StyledTableRow, StyledTableCell} from './StyledTable'
import {createData1, createData2, createData3, getDate} from '../utils/utils'

class TableBodyView extends Component {

	// rows = [
	// 	createData1('Frozen yoghurt', 159, 6.0, 24, 4.0,45),
	// 	createData1('Ice cream sandwich', 237, 9.0, 37, 4.3,55),
	// 	createData1('Eclair', 262, 16.0, 24, 6.0,66),
	// 	createData1('Cupcake', 305, 3.7, 67, 4.3,66),
	// 	createData1('Gingerbread', 356, 16.0, 49, 3.9,66),
	// ];
	rows = []

	createRowArr = () => {
		// this.createRow()
		const {employees, activeTab} = this.props
		for (let i=0; i<employees.length; i++) {
			const val = Object.values(employees[i])
			this.rows.push(createData1(val))
		}
	}

	createRow = () => {
		const {employees, activeTab} = this.props
		console.log('empl: ', employees)
		if (activeTab === 1) {
			employees.map((employee) => {
				const val = Object.values(employee).toString()
				this.rows.push(createData1(val))
			})
		} 
		//else if (activeTab === 2) {
		// 	let newEmp = []
		// 	employees.map((employee) => {
		// 		Object.keys(employee).map((key) => {
		// 			if (key === 'name' || key === 'skills') {
		// 				newEmp.push(employee[key])
		// 			}
		// 		})
		// 		const val = newEmp.toString()
		// 		this.rows.push(createData2(val))
		// 	})
		// } else {
		// 	let newEmp = []
		// 	employees.map((employee) => {
		// 		Object.keys(employee).map((key) => {
		// 			if (key === 'name' || key === 'gender') {
		// 				newEmp.push(employee[key])
		// 			}
		// 		})
		// 		const val = newEmp.toString()
		// 		this.rows.push(createData3(val))
		// 	})
		// }
	}

	renderStyleTabelCell = () => {
		let values = []
		let rows = []
		const {employees, activeTab} = this.props
		for (let i=0; i<employees.length; i++) {
			delete employees[i].id
			const value = Object.values(employees[i])
			values.push(value)
		}

		if (activeTab === 1) {
			return values.map((val) => {
				let row = createData1(val)
				return(
					<StyledTableRow key={row.name}>
						<StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
						<StyledTableCell align="right">{row.age}</StyledTableCell>
						<StyledTableCell align="right">{getDate(row.joindate)}</StyledTableCell>
						<StyledTableCell align="right">{row.country}</StyledTableCell>
						<StyledTableCell align="right">{row.gender}</StyledTableCell>
						<StyledTableCell align="right">{row.skills}</StyledTableCell>
					</StyledTableRow>
				)
			})
		} else if (activeTab === 2) {
			return values.map((val) => {
				let row = createData2(val)
				return(
					<StyledTableRow key={row.name}>
						<StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
						<StyledTableCell>{row.skills}</StyledTableCell>
					</StyledTableRow>
				)
			})
		} else {
			return values.map((val) => {
				let row = createData3(val)
				return(
					<StyledTableRow key={row.name}>
						<StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
						<StyledTableCell>{row.gender}</StyledTableCell>
					</StyledTableRow>
				)
			})
		}
	}

	render() {
		return (
			<TableBody>
				{this.renderStyleTabelCell()}
			</TableBody>
		)
	}
}

const mapStateToProps = state => {
	return {
		employees: eval(state.employees),
		activeTab: state.activeTab
	}
}

export default connect(mapStateToProps)(TableBodyView)