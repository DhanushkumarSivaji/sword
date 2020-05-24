import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EmployeeListFilter from './EmployeeListFilter';
import EmployeeTable from './EmployeeTable';

function TabPanel(props) {
	const { value, index } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && (
				<Fragment>
					<EmployeeListFilter />
					<EmployeeTable />
				</Fragment>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

export default TabPanel