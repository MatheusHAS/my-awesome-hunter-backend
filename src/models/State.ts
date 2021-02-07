import { Model, DataTypes } from 'sequelize'
import Database from '@/database'

class State extends Model {
  public id!: number
  public name!: string
  public name_prefix!: string
  public subdivision!: string
}

State.init(
  {
    name: DataTypes.STRING,
    name_prefix: DataTypes.STRING,
    subdivision: DataTypes.STRING,
  },
  {
    sequelize: Database.connection,
    modelName: 'State',
    timestamps: false,
  }
)

export default State
