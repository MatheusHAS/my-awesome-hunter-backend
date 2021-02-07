import { QueryInterface, DataTypes } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('candidates_technologies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'candidates',
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
      is_main_tech: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('candidates_technologies')
  },
}
