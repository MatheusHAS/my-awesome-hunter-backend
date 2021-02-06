module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('technologies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('technologies')
  },
}
