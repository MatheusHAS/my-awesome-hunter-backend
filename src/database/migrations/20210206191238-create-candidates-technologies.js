module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('candidates_technologies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'candidates',
          key: 'id',
        },
      },
      technology_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'technologies',
          key: 'id',
        },
      },
      is_main_tech: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('candidates_technologies')
  },
}
