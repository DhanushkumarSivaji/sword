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

export const getOptions = arr => arr.slice(0, -1).map(item => ({value : item}))