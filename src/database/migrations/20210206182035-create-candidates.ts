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
