// import { Model, DataTypes } from 'sequelize'
import { Table, Model, DataType, Column, PrimaryKey } from 'sequelize-typescript'

@Table({
  modelName: 'State',
  timestamps: false,
})
class State extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @Column(DataType.STRING)
  public name!: string

  @Column(DataType.STRING)
  public name_prefix!: string

  @Column(DataType.STRING)
  public subdivision!: string
}

export default State
export { State }
