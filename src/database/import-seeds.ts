import { QueryInterface, Sequelize } from 'sequelize/types'
import Database from '@/database'
import statesList from '@/data/states.json'
import citiesList from '@/data/cities.json'
import candidatesList from '@/data/candidates.json'

class ImportSeedsController {
  queryInterface: QueryInterface
  connection: Sequelize

  constructor() {
    this.connection = Database.connection
    this.queryInterface = this.connection.getQueryInterface()
  }

  async countRowsByTableName(tableName: string, countField: string = 'id') {
    const [results] = await this.connection.query(`SELECT count(${countField}) FROM ${tableName}`)
    const firstLine: any = results?.shift()
    if (firstLine) {
      return parseInt(firstLine.count)
    }
    return 0
  }

  async runImport(tableName: string, bulkInsertList: any[]) {
    console.log(`\n\n--------- Table: ${tableName.toUpperCase()} ---------`)
    try {
      const count = await this.countRowsByTableName(tableName)
      console.log('Rows count: ', count)
      if (count === 0) {
        console.log(`Importing your list with [${bulkInsertList.length}] items...`)
        await this.queryInterface.bulkInsert(tableName, bulkInsertList)
      } else {
        console.log('Skipped import...')
      }
    } catch (exception) {
      console.error('[importStates][ERROR]: ', exception)
    }
    console.log('-------------------------------\n')
  }

  async run() {
    try {
      console.log('--- STARTING IMPORT SEEDS ---')
      await this.runImport('states', statesList)
      await this.runImport('cities', citiesList)
      await this.runImport('candidates', candidatesList)
      this.connection.close()
      console.log('--- FINISHED ---')
    } catch (exception) {
      console.error('[ERROR]', exception)
    }
  }
}

;(async () => {
  await new ImportSeedsController().run()
})()
