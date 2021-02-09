const challangeJson = require('../src/data/code_challenge.json')
const technologies = require('../src/data/technologies.json')

const fs = require('fs')

const Regex = {
  findCityGroup: /(?<cidade>.+)\s-\s(.+)/,
}

const getTechnologieIdByName = (name) => {
  const techFind = technologies.find((tech) => tech.name.toLowerCase() === name.toLowerCase())
  if (techFind) {
    return technologies.indexOf(techFind) + 1
  }
  return 0
}

const technologiesListToAdd = []

challangeJson.candidates.map((candidate) => {
  const { id, technologies } = candidate
  technologies.map((tech) => {
    const { name, is_main_tech } = tech
    const technology_id = getTechnologieIdByName(name.trim())
    if (technology_id === 0) {
      console.log(technology_id)
      console.log(name)
    }

    technologiesListToAdd.push({
      candidate_id: id,
      technology_id,
      is_main_tech,
    })
  })
})

fs.writeFileSync('candidates-technologies.json', JSON.stringify(technologiesListToAdd))
