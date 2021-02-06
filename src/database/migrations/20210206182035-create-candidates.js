module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cities',
          key: 'id',
        },
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      experience: {
        allowNull: false,
        type: Sequelize.ENUM,
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
    await queryInterface.dropTable('candidates')
  },
}
