import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getSkills, getOptions, getCountries} from '../utils/utils'
// import useStyles from './FilterStyles'
import {textFilter, skillFilter} from '../actions/filter-actions'

// const EmployeeListFilter = () => {
// 	const classes = useStyles()
// 	const [skill, setSkill] = React.useState('Advisor');
// 	const [country, setCountry] = React.useState('Kings Landing');
// 	const [filterText, setFilterText] = React.useState('')

// 	let employees = useSelector(state => state.employees)
// 	let text = useSelector(state => state.filter.text)
// 	employees = eval(employees) // convert array of json obj to js obj

// 	const skills = getSkills(employees)
// 	const skillsOptions = getOptions(skills)

// 	const countries = getCountries(employees)
// 	const countriesOptions = getOptions(countries)

// 	const handleTextChange = event => {

// 	}

// 	const handleSkillChange = (event) => {
//     setSkill(event.target.value)
// 	}
	
// 	const handleCountryChange = (event) => {
//     setCountry(event.target.value)
//   }

// 	return (
// 		<form className={classes.inputStyle} noValidate autoComplete="off">
// 			<TextField 
// 				id="standard-basic" 
// 				label="Search employee"
// 				value={filterText} 
// 				onChange={this.handleTextChange}
// 			/>
// 			<TextField
// 					id="select-skill"
// 					select
// 					label="Skills"
// 					value={skill}
// 					onChange={handleSkillChange}
// 					helperText="Please select a skill set"
// 				>
// 					{skillsOptions.map((skill) => (
// 						<MenuItem key={skill.value} value={skill.value}>
// 							{skill.value}
// 						</MenuItem>
// 					))}
// 				</TextField>
// 				<TextField
// 					id="select-country"
// 					select
// 					label="Country"
// 					value={country}
// 					onChange={handleCountryChange}
// 					helperText="Please select a country"
// 				>
// 					{countriesOptions.map((country) => (
// 						<MenuItem key={country.value} value={country.value}>
// 							{country.value}
// 						</MenuItem>
// 					))}
// 				</TextField>
// 		</form>
// 	)
// }

const useStyles = theme => ({
	inputStyle: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	selectStyle: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	}
});

class EmployeeListFilter extends Component {

	state = {
		skill: 'Advisor',
		country: 'Kings Landing',
		filterText: ''
	}

	// classes = useStyles

	skills = getSkills(this.props.employees)
	skillsOptions = getOptions(this.skills)

	countries = getCountries(this.props.employees)
	countriesOptions = getOptions(this.countries)

	handleTextChange = event => {
		this.props.dispatch(textFilter(event.target.value))
	}

	handleSkillChange = (event) => {
		console.log('ev: ', event.target.value)
    this.props.dispatch(skillFilter(event.target.value))
	}
	
	handleCountryChange = (event) => {
    // setCountry(event.target.value)
	}
	
	render() {
		// console.log(this.classes.inputStyle)
		console.log('ppp:', this.props)
		return (
			<form className={this.props.classes.root} noValidate autoComplete="off">
				<TextField 
					id="standard-basic" 
					label="Search employee"
					value={this.props.filters.text} 
					onChange={this.handleTextChange}
				/>
				 <TextField
					id="select-skill"
					select
					label="Skills"
					value={this.props.filters.skill}
					onChange={this.handleSkillChange}
					helperText="Please select a skill set"
				>
					{this.skillsOptions.map((skill) => (
						<MenuItem key={skill.value} value={skill.value}>
							{skill.value}
						</MenuItem>
					))}
				</TextField>
				{/*<TextField
					id="select-country"
					select
					label="Country"
					value={country}
					onChange={handleCountryChange}
					helperText="Please select a country"
				>
					{countriesOptions.map((country) => (
						<MenuItem key={country.value} value={country.value}>
							{country.value}
						</MenuItem>
					))}
				</TextField> */}
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		employees: eval(state.employees),
		filters: state.filters
	}
}

const classComp = withStyles(useStyles)(EmployeeListFilter)

export default connect(mapStateToProps)(classComp)

