import { Table, Model, DataType, Column, PrimaryKey, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript'
import { Technology, Candidate } from '@/models'

@Table({
  modelName: 'CandidatesTechnology',
  timestamps: false,
})
class CandidatesTechnologies extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  public id!: number

  @ForeignKey(() => Candidate)
  @Column(DataType.INTEGER)
  public candidate_id!: number

  @ForeignKey(() => Technology)
  @Column(DataType.INTEGER)
  public technology_id!: number

  @HasOne(() => Technology, 'id')
  public technology: Technology

  @HasOne(() => Candidate, 'id')
  public candidate: Candidate
}

export default CandidatesTechnologies
export { CandidatesTechnologies }
