import { Model, DataTypes } from 'sequelize'
import Database from '@/database'

class Technology extends Model {
  public id!: number
  public name!: string

  static associate(models: any) {}
}

Technology.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: Database.connection,
    modelName: 'Technology',
    timestamps: false,
  }
)

export default Technology
