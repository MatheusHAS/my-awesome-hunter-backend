import { DataTypes, QueryInterface } from 'sequelize'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      city_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'cities',
          key: 'id',
        },
      },
      is_remote: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      experience_min: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      experience_max: {
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
    await queryInterface.dropTable('jobs')
  },
}
