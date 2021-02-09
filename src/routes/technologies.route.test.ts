import { Technology } from '@/models'
import request, { Response } from 'supertest'
import db from '@/database'
import app from '@/app'
import technologiesList from '@/data/technologies.json'

describe('Technology routes', () => {
  beforeAll(async () => {
    await db.connection.authenticate()
  })

  it('should return list of technologies', async () => {
    await request(app)
      .get('/api/v1/technologies')
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
        const jsonListData: Technology[] = JSON.parse(JSON.stringify(response.body))
        const [firstTechApi] = jsonListData
        const [firstTech] = technologiesList
        expect(firstTechApi.id).toBe(1)
        expect(firstTechApi.name).toBe(firstTech.name)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
