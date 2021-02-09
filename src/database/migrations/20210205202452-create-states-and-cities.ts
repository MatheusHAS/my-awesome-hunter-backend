import { DataTypes, QueryInterface } from 'sequelize'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('states', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(40),
      },
      name_prefix: {
        allowNull: false,
        type: DataTypes.STRING(25),
      },
      subdivision: {
        allowNull: false,
        type: DataTypes.STRING(2),
        unique: true,
      },
    })

    await queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(90),
      },
      state_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'states',
          key: 'id',
        },
      },
      latitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      longitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('states')
    await queryInterface.dropTable('cities')
  },
}
