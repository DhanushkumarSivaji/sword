import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {StyledTableCell} from './StyledTable'

class TableHeadView extends Component {

	renderStyledTable = () => {
		const {activeTab} = this.props
		if (activeTab === 1) {
			return (
				<Fragment>
					<StyledTableCell>Name</StyledTableCell>
					<StyledTableCell align="right">Age</StyledTableCell>
					<StyledTableCell align="right">Join Date</StyledTableCell>
					<StyledTableCell align="right">Country</StyledTableCell>
					<StyledTableCell align="right">Gender</StyledTableCell>
					<StyledTableCell align="right">Skills</StyledTableCell>
				</Fragment>
			)
		} else if (activeTab === 2) {
			return (
				<Fragment>
					<StyledTableCell>Name</StyledTableCell>
					<StyledTableCell>Skills</StyledTableCell>
				</Fragment>
			)
		} else {
			return (
				<Fragment>
					<StyledTableCell>Name</StyledTableCell>
					<StyledTableCell>Gender</StyledTableCell>
				</Fragment>
			)
		}
	}

	render() {
		return (
			<TableHead>
				<TableRow>
					{this.renderStyledTable()}
				</TableRow>
			</TableHead>
		)
	}
}

const mapStateToProps = state => {
	return {
		activeTab: state.activeTab
	}
}

export default connect(mapStateToProps)(TableHeadView)