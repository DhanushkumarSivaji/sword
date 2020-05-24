import React, {Component} from 'react'
import {connect} from 'react-redux'
import TableBody from '@material-ui/core/TableBody';
import {StyledTableRow, StyledTableCell} from './StyledTable'

class TableBodyView extends Component {

	// createData = (name, age, joindate, country, gender, skills) => {
	// 	return { name, age, joindate, country, gender, skills };
	// }

	createData = (name, calories, fat, carbs, protein) => {
		return { name, calories, fat, carbs, protein };
	}

	rows = [
		this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		this.createData('Eclair', 262, 16.0, 24, 6.0),
		this.createData('Cupcake', 305, 3.7, 67, 4.3),
		this.createData('Gingerbread', 356, 16.0, 49, 3.9),
	];

	renderTableRow = () => {
		return (
			this.rows.map((row) => (
				<StyledTableRow key={row.name}>
					<StyledTableCell component="th" scope="row">
						{row.name}
					</StyledTableCell>
					<StyledTableCell align="right">{row.calories}</StyledTableCell>
					<StyledTableCell align="right">{row.fat}</StyledTableCell>
					<StyledTableCell align="right">{row.carbs}</StyledTableCell>
					<StyledTableCell align="right">{row.protein}</StyledTableCell>
				</StyledTableRow>
			))
			
		)
	}

	render() {
		console.log(this.props)
		return (
			<TableBody>
				{this.renderTableRow()}
			</TableBody>
		)
	}
}

const mapStateToProps = state => {
	return {
		activeTab: state.activeTab
	}
}

export default connect(mapStateToProps)(TableBodyView)