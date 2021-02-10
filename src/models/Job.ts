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
  HasMany,
} from 'sequelize-typescript'
import { City, JobsTechnologies } from '@/models'

@Table({
  modelName: 'Job',
  timestamps: true,
})
class Job extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @ForeignKey(() => City)
  @Column(DataType.INTEGER)
  public city_id!: number

  @Column(DataType.INTEGER)
  public experience_min!: number

  @Column(DataType.INTEGER)
  public experience_max!: number

  @Column(DataType.BOOLEAN)
  public is_remote!: boolean

  @CreatedAt
  public readonly created_at!: Date

  @UpdatedAt
  public readonly updated_at!: Date

  @BelongsTo(() => City)
  public city: City

  @HasMany(() => JobsTechnologies)
  public technologies: JobsTechnologies[]
}

export default Job
export { Job }
