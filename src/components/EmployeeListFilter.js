import React from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getSkills, getOptions, getCountries} from '../utils/utils'


const useStyles = makeStyles((theme) => ({
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
}));

const EmployeeListFilter = () => {
	const classes = useStyles()
	const [skill, setSkill] = React.useState('Advisor');
	const [country, setCountry] = React.useState('Kings Landing');

	let employees = useSelector(state => state.employees)
	employees = eval(employees) // convert array of json obj to js obj

	const skills = getSkills(employees)
	const skillsOptions = getOptions(skills)
	
	const countries = getCountries(employees)
	const countriesOptions = getOptions(countries)

	const handleSkillChange = (event) => {
    setSkill(event.target.value);
	}
	
	const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }

	return (
		<form className={classes.inputStyle} noValidate autoComplete="off">
			<TextField id="standard-basic" label="Search employee" />
			<TextField
					id="select-skill"
					select
					label="Skills"
					value={skill}
					onChange={handleSkillChange}
					helperText="Please select a skill set"
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
					value={country}
					onChange={handleCountryChange}
					helperText="Please select a country"
				>
					{countriesOptions.map((country) => (
						<MenuItem key={country.value} value={country.value}>
							{country.value}
						</MenuItem>
					))}
				</TextField>
		</form>
	)
}

export default EmployeeListFilter

