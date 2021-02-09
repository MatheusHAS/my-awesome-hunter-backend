import { Table, Model, DataType, Column, PrimaryKey } from 'sequelize-typescript'

@Table({
  modelName: 'Technology',
  timestamps: false,
})
class Technology extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @Column(DataType.STRING)
  public name!: string
}

export default Technology
export { Technology }
