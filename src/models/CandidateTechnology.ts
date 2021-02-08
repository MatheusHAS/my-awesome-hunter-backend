import { Model, DataTypes } from 'sequelize'
import Database from '@/database'

class CandidateTechnology extends Model {
  public id!: number
  public candidate_id!: number
  public technology_id!: number

  static associate(models: any) {
    this.belongsTo(models.Candidate, { foreignKey: 'candidate_id' })
    this.belongsTo(models.Technology, { foreignKey: 'technology_id' })
  }
}

CandidateTechnology.init(
  {
    candidate_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'candidates',
        key: 'id',
      },
    },
    technology_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'technologies',
        key: 'id',
      },
    },
  },
  {
    sequelize: Database.connection,
    modelName: 'CandidatesTechnology',
    timestamps: false,
  }
)

CandidateTechnology.associate(Database.connection.models)

export default CandidateTechnology
