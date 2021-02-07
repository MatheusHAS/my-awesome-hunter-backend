import Sequelize from 'sequelize'
import databaseConfig from '@/config/database'

type IEnvironment = 'development' | 'test' | 'production'

class Database {
  public connection: Sequelize.Sequelize
  public environment: IEnvironment

  constructor() {
    this.environment = (process.env.NODE_ENV as IEnvironment) || 'development'
    this.init()
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig[this.environment.toString()])
  }
}

const database: Database = new Database()

export default database
