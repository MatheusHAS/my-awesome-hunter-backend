import { DataTypes, QueryInterface } from 'sequelize'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      city_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'cities',
          key: 'id',
        },
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      experience: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('candidates')
  },
}
