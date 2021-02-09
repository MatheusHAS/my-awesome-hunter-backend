import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript'
import { Technology, Job } from '@/models'

@Table({
  modelName: 'JobsTechnology',
  timestamps: false,
})
class JobsTechnologies extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @ForeignKey(() => Job)
  @Column(DataType.INTEGER)
  public job_id!: number

  @ForeignKey(() => Technology)
  @Column(DataType.INTEGER)
  public technology_id!: number

  @HasOne(() => Technology, 'id')
  public technology: Technology

  @HasOne(() => Job, 'id')
  public job: Job
}

export default JobsTechnologies
export { JobsTechnologies }
