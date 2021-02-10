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
  HasMany,
} from 'sequelize-typescript'
import { City, CandidatesTechnologies } from '@/models'

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
  public experience!: number

  @CreatedAt
  public readonly created_at!: Date

  @UpdatedAt
  public readonly updated_at!: Date

  @BelongsTo(() => City)
  public city: City

  @HasMany(() => CandidatesTechnologies)
  public technologies: CandidatesTechnologies[]
}

export default Candidate
export { Candidate }
