module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('states', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      name_prefix: {
        allowNull: false,
        type: Sequelize.STRING(25),
      },
      subdivision: {
        allowNull: false,
        type: Sequelize.STRING(2),
        unique: true,
      },
    })

    await queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      state_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cities',
          key: 'id',
        },
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('states')
    await queryInterface.dropTable('cities')
  },
}
