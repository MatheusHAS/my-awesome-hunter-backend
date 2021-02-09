import { QueryInterface } from 'sequelize'

// I use this function: https://www.geodatasource.com/developers/postgresql

const fnParameters = [
  {
    type: 'FLOAT',
    name: 'lat1',
    direction: 'IN',
  },
  {
    type: 'FLOAT',
    name: 'lon1',
    direction: 'IN',
  },
  {
    type: 'FLOAT',
    name: 'lat2',
    direction: 'IN',
  },
  {
    type: 'FLOAT',
    name: 'lon2',
    direction: 'IN',
  },
  {
    type: 'VARCHAR',
    name: 'units',
    direction: 'IN',
  },
]

module.exports = {
  up: async (queryInterface: any) => {
    await queryInterface.createFunction(
      'calculate_distance',
      fnParameters,
      'FLOAT',
      'plpgsql',
      `
        IF lat1 = lat2 OR lon1 = lon2
            THEN RETURN dist;
        ELSE
            radlat1 = pi() * lat1 / 180;
            radlat2 = pi() * lat2 / 180;
            theta = lon1 - lon2;
            radtheta = pi() * theta / 180;
            dist = sin(radlat1) * sin(radlat2) + cos(radlat1) * cos(radlat2) * cos(radtheta);

            IF dist > 1 THEN dist = 1; END IF;

            dist = acos(dist);
            dist = dist * 180 / pi();
            dist = dist * 60 * 1.1515;

            IF units = 'K' THEN dist = dist * 1.609344; END IF;
            IF units = 'N' THEN dist = dist * 0.8684; END IF;

            RETURN dist;
        END IF;
      `,
      [],
      {
        variables: [
          { type: 'FLOAT', name: 'dist', default: 0 },
          { type: 'FLOAT', name: 'radlat1' },
          { type: 'FLOAT', name: 'radlat2' },
          { type: 'FLOAT', name: 'theta' },
          { type: 'FLOAT', name: 'radtheta' },
        ],
      }
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropFunction('calculate_distance', fnParameters)
  },
}
