import { Sequelize } from 'sequelize/types'

export default (sequelize: Sequelize, DataTypes: any) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    state_id: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  })
  return City
}
