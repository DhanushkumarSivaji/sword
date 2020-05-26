import React, {Component} from 'react'
import {connect} from 'react-redux'
import TableBody from '@material-ui/core/TableBody';
import {StyledTableRow, StyledTableCell} from './StyledTable'
import {createData1, createData2, createData3, getDate, selectList} from '../selectors/selectors'

class TableBodyView extends Component {

	renderStyleTabelCell = () => {
		let values = []
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
	const employees = eval(state.employees)
	return {
		employees: selectList(employees, state.filters),
		activeTab: state.activeTab
	}
}

export default connect(mapStateToProps)(TableBodyView)