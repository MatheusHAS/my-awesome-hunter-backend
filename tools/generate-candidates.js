const faker = require('faker')
faker.setLocale('pt_BR')

const challangeJson = require('../src/data/code_challenge.json')
const cities = require('../src/data/cities.json')

const fs = require('fs')

const Regex = {
  findCityGroup: /(?<city>.+)\s-\s(.+)/,
  findExperienceGroup: /((\d+){0,2}-)?(?<experience>\d+){0,2}/,
}

const getCityIdByCityName = (cityFullName) => {
  const result = Regex.findCityGroup.exec(cityFullName)
  if (result && result.groups) {
    const { city } = result.groups
    const cityFind = cities.find((cityItem) => cityItem.name.toLowerCase() === city.toLowerCase())
    if (cityFind) {
      return cities.indexOf(cityFind) + 1
    }
  }
  return 0
}

const getExperienceTime = (experienceTime) => {
  const result = Regex.findExperienceGroup.exec(experienceTime)
  if (result && result.groups) {
    const { experience } = result.groups
    return parseInt(experience)
  }
  return 0
}

const result = challangeJson.candidates.map((candidate) => {
  const { id, city, experience } = candidate
  const city_id = getCityIdByCityName(city)
  return {
    id,
    city_id,
    experience: getExperienceTime(experience),
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
  }
})

fs.writeFileSync('candidates.json', JSON.stringify(result))
