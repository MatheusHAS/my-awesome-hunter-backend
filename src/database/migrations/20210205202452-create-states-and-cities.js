const Tables = {
  STATES: 'states',
  CITIES: 'cities',
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(Tables.STATES, {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })

    await queryInterface.createTable(Tables.CITIES, {
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
          model: Tables.CITIES,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(Tables.STATES)
    await queryInterface.dropTable(Tables.CITIES)
  },
}
