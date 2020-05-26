import React, { Component } from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getSkills, getOptions, getCountries} from '../selectors/selectors'
import {textFilter, skillFilter, countryFilter, genderFilter} from '../actions/filter-actions'
import Button from '@material-ui/core/Button';

class EmployeeListFilter extends Component {

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
				<TextField
					id="select-skill"
					select
					label="Skills"
					value={this.props.filters.skill}
					onChange={this.handleSkillChange}
					helperText="Please select a skill"
					hidden={this.props.activeTab === 3 ? true : false}
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
					hidden = {this.props.activeTab !== 1 ? true : false} 
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
					hidden={this.props.activeTab !== 3 ? true : false }
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
	return {
		employees,
		filters: state.filters,
		activeTab: state.activeTab
	}
}

export default connect(mapStateToProps)(EmployeeListFilter)

