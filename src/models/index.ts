'use strict'

import fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize'
import { Options, DataTypes } from 'sequelize/types'
import ConfigJSON from '@/config/database'

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config: Options = ConfigJSON[env]
const db = {
  sequelize: null,
  Sequelize: null,
}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(path.join(__dirname, file))(sequelize, DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
