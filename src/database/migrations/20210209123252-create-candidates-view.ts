import { QueryInterface } from 'sequelize'

const options = {
  view_name: 'candidates_view',
  query: `
    SELECT 
      c.id AS user_id,
      c.name,
      c.experience,
      c.created_at,
      c.updated_at,
      c.city_id,
      c2."name" as city_name,
      s."name" as state_name,
      s.subdivision,
      c2.latitude,
      c2.longitude 
    FROM candidates c
      INNER JOIN cities c2 ON c2.id = c.city_id 
      INNER JOIN states s ON s.id = c2.state_id 
    ORDER BY c.experience, s.id;
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
