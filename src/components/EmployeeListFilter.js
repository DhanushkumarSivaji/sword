import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {getSkills, getOptions, getCountries} from '../utils/utils'
// import useStyles from './FilterStyles'
import {textFilter, skillFilter, countryFilter, genderFilter} from '../actions/filter-actions'
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	  }
});

class EmployeeListFilter extends Component {

	// classes = useStyles
	// employees = eval(this.props.employees)
	// skills = getSkills(this.props.employees)
	// skillsOptions = getOptions(this.skills)

	// countries = getCountries(this.props.employees)
	// countriesOptions = getOptions(this.countries)

	handleTextChange = event => {
		this.props.dispatch(textFilter(event.target.value))
	}

	handleSkillChange = (event) => {
		this.props.dispatch(skillFilter(event.target.value))
	}
	
	handleCountryChange = (event) => {
    this.props.dispatch(countryFilter(event.target.value))
	}

	handleGenderChange = event => {
		this.props.dispatch(genderFilter(event.target.value))
	}
	
	handleClearFilter = (event) => {
		this.props.dispatch(textFilter(''))
		this.props.dispatch(skillFilter(''))
		this.props.dispatch(countryFilter(''))
		this.props.dispatch(genderFilter(''))
	}

	render() {
		const skills = getSkills(this.props.employees)
		const skillsOptions = getOptions(skills)
		const countries = getCountries(this.props.employees)
		const countriesOptions = getOptions(countries)
		const genderOptions = ['Male', 'Female']

		return (
			<form noValidate autoComplete="off">
				<TextField 
					id="standard-basic" 
					label="Search employee"
					value={this.props.filters.text} 
					onChange={this.handleTextChange}
				/>
				{/* <FormControl className={this.props.classes.formControl}>
				<InputLabel id="demo-simple-select-helper-label">Skill</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					// value={age}
					// onChange={handleChange}
					>
					{this.skillsOptions.map((skill) => (
						<MenuItem key={skill.value} value={skill.value}>
							{skill.value}
						</MenuItem>
					))}
				</Select> 
				<FormHelperText>Some important helper text</FormHelperText>
				</FormControl> */}
				 <TextField
					id="select-skill"
					select
					label="Skills"
					value={this.props.filters.skill}
					onChange={this.handleSkillChange}
					helperText="Please select a skill"
				>
					{skillsOptions.map((skill) => (
						<MenuItem key={skill.value} value={skill.value}>
							{skill.value}
						</MenuItem>
					))}
				</TextField>
				 <TextField
					id="select-country"
					select
					label="Country"
					value={this.props.filters.country}
					onChange={this.handleCountryChange}
					helperText="Please select a country"
				>
					{countriesOptions.map((country) => (
						<MenuItem key={country.value} value={country.value}>
							{country.value}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="select-gender"
					select
					label="Gender"
					value={this.props.filters.gender}
					onChange={this.handleGenderChange}
					helperText="Please select a gender"
				>
					{genderOptions.map((gender) => (
						<MenuItem key={gender} value={gender}>
							{gender}
						</MenuItem>
					))}
				</TextField>
				<Button variant="contained" onClick={this.handleClearFilter}>Clear Filter</Button>
			</form>
		)
	}
}

const mapStateToProps = state => {
	const employees = eval(state.employees)
	console.log('filters: ', state.filters)
	return {
		employees,
		filters: state.filters
	}
}

// const classComp = withStyles(useStyles)(EmployeeListFilter)

export default connect(mapStateToProps)(EmployeeListFilter)

