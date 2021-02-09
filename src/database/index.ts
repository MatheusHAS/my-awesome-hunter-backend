import { Sequelize } from 'sequelize-typescript'
import databaseConfig from '@/config/database'
import { City, State, Technology, Candidate, CandidatesTechnologies } from '@/models'

type IEnvironment = 'development' | 'test' | 'production'

class Database {
  public connection: Sequelize
  public environment: IEnvironment

  constructor() {
    this.environment = (process.env.NODE_ENV as IEnvironment) || 'development'
    this.init()
  }

  init(): void {
    this.connection = new Sequelize({
      ...databaseConfig[this.environment.toString()],
      models: [City, State, Technology, Candidate, CandidatesTechnologies],
    })
  }
}

const database: Database = new Database()

export default database
