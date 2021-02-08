import { Column, Model, DataType, Table, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { State } from '@/models'
@Table({
  modelName: 'City',
  timestamps: false,
})
class City extends Model {
  @PrimaryKey
  @Column(DataType.NUMBER)
  public id: number

  @Column(DataType.STRING)
  public name: string

  @ForeignKey(() => State)
  @Column(DataType.NUMBER)
  public state_id: number

  @Column(DataType.FLOAT)
  public latitude: number

  @Column(DataType.FLOAT)
  public longitude: number

  @BelongsTo(() => State, 'state_id')
  public state: State

  // static associate(models: any) {
  //   this.belongsTo(models.State, { foreignKey: 'state_id' })
  // }
}

// City.associate(Database.connection.models)

export default City
export { City }
