import { QueryInterface } from 'sequelize'

const options = {
  view_name: 'jobs_view',
  query: `
    SELECT 
      j.id,
      j.is_remote,
      j.experience_min,
      j.experience_max,
      j.city_id,
      c2."name" as city_name,
      s."name" as state_name,
      s.subdivision,
      c2.latitude,
      c2.longitude,
      j.created_at,
      j.updated_at
    FROM jobs j
      LEFT JOIN cities c2 ON c2.id = j.city_id 
      LEFT JOIN states s ON s.id = c2.state_id;
  `,
}

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(`CREATE OR REPLACE VIEW ${options.view_name} AS ${options.query}`)
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.query(`DROP VIEW ${options.view_name}`)
  },
}
