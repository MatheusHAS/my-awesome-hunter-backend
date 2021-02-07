import { Model, DataTypes } from 'sequelize'
import Database from '@/database'

class City extends Model {
  public id!: number
  public name!: string
  public state_id!: number
  public latitude!: number
  public longitude!: number

  static associate(models: any) {
    this.belongsTo(models.State, { foreignKey: 'state_id' })
  }
}

City.init(
  {
    name: DataTypes.STRING,
    state_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'states',
        key: 'id',
      },
    },
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  },
  {
    sequelize: Database.connection,
    modelName: 'City',
    timestamps: false,
  }
)

City.associate(Database.connection.models)

export default City
