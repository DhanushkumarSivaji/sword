export const getCountries = employees => {
	const countries = []
	for (let i=0; i<employees.length; i++) {
			countries.push(employees[i].country)
	}
	
	let uniqCountry = [...new Set(countries)]
	return uniqCountry.sort()
}

export const getSkills = employees => {
	let skills = []
	for (let i=0; i<employees.length; i++) {
			skills.push(employees[i].skills)
	}
	skills = skills.flat(Infinity)
	let uniqueSkills = [...new Set(skills)]
	return uniqueSkills.sort()
}

export const getOptions = arr => arr.map(item => ({value : item}))

export const createData1 = (val) => {
	return { 
		name: val[0], 
		age: val[1], 
		joindate: val[2], 
		country: val[3],
		gender: val[4], 
		skills: val[5]
	}
}

export const createData2 = (val) => {
  return { 
		name: val[0], 
		skills: val[5] 
	}
}

export const createData3 = (val) => {
	return { 
		name: val[0], 
		gender: val[4] 
	}
}

export const getDate = (timestamp) => {
	const d = new Date(timestamp)
	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	const year = d.getFullYear()
	const month = months[d.getMonth()]
	const date = d.getDate()
	return `${month} ${date}, ${year}`	
}

export const selectList = (employees, filters) => {
	const {text, skill, gender} = filters

	return employees.filter((employee) => {
		const textMatch = employee.name.toLowerCase().includes(text.toLowerCase())
		const skillMatch = employee.skills.includes(skill)
		const genderMatch = employee.gender.includes(gender)
		return textMatch && skillMatch
	})
}