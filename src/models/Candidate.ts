import { Model, DataTypes } from 'sequelize'
import Database from '@/database'

class Candidate extends Model {
  public id!: number
  public name!: string
  public city_id!: number
  public experience!: string
  public created_at!: Date
  public updated_at!: Date

  static associate(models: any) {
    this.belongsTo(models.City, { foreignKey: 'city_id' })
    // this.()
    console.log(models)
    // this.hasMany(models.CandidateTechnology, {
    //   as: 'technologies',
    // })
    // this.belongsToMany(models.CandidateTechnology, {
    //   through: 'candidates_technologies',
    // })
    // this.belongsTo(models.Technology)
  }
}

Candidate.init(
  {
    name: DataTypes.STRING,
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cities',
        key: 'id',
      },
    },
    experience: {
      type: DataTypes.ENUM,
      values: [
        '0-1 years',
        '1-2 years',
        '2-3 years',
        '3-4 years',
        '4-5 years',
        '5-6 years',
        '6-7 years',
        '7-8 years',
        '8-9 years',
        '9-10 years',
        '10-11 years',
        '11-12 years',
        '12+ years',
      ],
    },
    // technologies: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'candidates_technologies',
    //     key: 'candidate_id',
    //   },
    // },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    sequelize: Database.connection,
    modelName: 'Candidate',
    timestamps: true,
  }
)

Candidate.associate(Database.connection.models)

export default Candidate
