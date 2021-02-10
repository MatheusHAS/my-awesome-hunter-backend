import { City } from '@/models'
import request, { Response } from 'supertest'
import db from '@/database'
import app from '@/app'
import citiesList from '@/data/cities.json'

describe('Cities routes', () => {
  beforeAll(async () => {
    await db.connection.authenticate()
  })

  it('should return list of cities', async () => {
    await request(app)
      .get('/api/v1/cities')
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
        const jsonListData: City[] = JSON.parse(JSON.stringify(response.body))
        const [firstCityApi] = jsonListData
        const [firstCity] = citiesList
        expect(firstCityApi.id).toBe(1)
        expect(firstCityApi.name).toBe(firstCity.name)
        expect(firstCityApi.state_id).toBe(firstCity.state_id)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
