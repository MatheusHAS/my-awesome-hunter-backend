const faker = require('faker')
faker.setLocale('pt_BR')

const challangeJson = require('../src/data/code_challenge.json')
const cities = require('../src/data/cities.json')

const fs = require('fs')

const Regex = {
  findCityGroup: /(?<cidade>.+)\s-\s(.+)/,
}

const getCityIdByCityName = (name) => {
  const city = cities.find((city) => city.name.toLowerCase() === name.toLowerCase())
  if (city) {
    return cities.indexOf(city) + 1
  }
  return 0
}

const result = challangeJson.candidates.map((candidate) => {
  const { id, city, experience } = candidate
  let city_id = 0
  const result = Regex.findCityGroup.exec(city)
  if (result && result.groups) {
    const { cidade } = result.groups
    city_id = getCityIdByCityName(cidade)
  }
  return {
    id,
    city_id,
    experience,
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
  }
})

fs.writeFileSync('candidates.json', JSON.stringify(result))
