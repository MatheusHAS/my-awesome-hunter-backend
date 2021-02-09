import { State } from '@/models'
import request, { Response } from 'supertest'
import db from '@/database'
import app from '@/app'
import stateList from '@/data/states.json'

describe('State routes', () => {
  beforeAll(async () => {
    await db.connection.authenticate()
  })

  it('should return list of states', async () => {
    await request(app)
      .get('/api/v1/states')
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
        const jsonListData: State[] = JSON.parse(JSON.stringify(response.body))
        const [firstStateApi] = jsonListData
        const [firstState] = stateList
        expect(firstStateApi.id).toBe(1)
        expect(firstStateApi.name).toBe(firstState.name)
        expect(firstStateApi.subdivision).toBe(firstState.subdivision)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
