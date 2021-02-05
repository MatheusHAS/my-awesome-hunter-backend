const { join } = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: join(__dirname, '..', '..', '.env') })

const mockedDatabaseForAllEnvironments = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  define: {
    timestamps: true,
    underscored: true,
  },
}

module.exports = {
  development: mockedDatabaseForAllEnvironments,
  test: mockedDatabaseForAllEnvironments,
  production: mockedDatabaseForAllEnvironments,
}
