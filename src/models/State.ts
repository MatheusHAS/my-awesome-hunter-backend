import { Sequelize } from 'sequelize/types'

export default (sequelize: Sequelize, DataTypes: any) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING,
    name_prefix: DataTypes.STRING,
    subdivision: DataTypes.STRING,
  })
  return State
}
