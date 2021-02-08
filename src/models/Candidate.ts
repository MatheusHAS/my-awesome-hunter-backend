import {
  Column,
  Table,
  Model,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  AllowNull,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript'
import { City, CandidatesTechnologies } from '@/models'
import Technology from './Technology'

@Table({
  modelName: 'Candidate',
  timestamps: true,
})
class Candidate extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @AllowNull
  @Column(DataType.STRING)
  public name!: string

  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  public city_id!: number

  @Column(DataType.STRING)
  public experience!: string

  @CreatedAt
  public readonly created_at!: Date

  @UpdatedAt
  public readonly updated_at!: Date

  @BelongsTo(() => City)
  public city: City

  @HasMany(() => CandidatesTechnologies)
  public technologies: CandidatesTechnologies[]

  // static associate(models: any) {
  //   this.belongsTo(models.City, { foreignKey: 'city_id' })
  //   // this.()
  //   console.log(models)
  //   // this.hasMany(models.CandidateTechnology, {
  //   //   as: 'technologies',
  //   // })
  //   // this.belongsToMany(models.CandidateTechnology, {
  //   //   through: 'candidates_technologies',
  //   // })
  //   // this.belongsTo(models.Technology)
  // }
}

export default Candidate
export { Candidate }
