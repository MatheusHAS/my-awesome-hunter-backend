import { QueryInterface, DataTypes } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('jobs_technologies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      job_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'jobs',
          key: 'id',
        },
      },
      technology_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'technologies',
          key: 'id',
        },
      },
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('jobs_technologies')
  },
}
