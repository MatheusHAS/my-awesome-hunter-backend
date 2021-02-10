import request, { Response } from 'supertest'
import db from '@/database'
import app from '@/app'
import { Candidate } from '@/models'
import candidatesList from '@/data/candidates.json'

describe('Candidate routes', () => {
  beforeAll(async () => {
    await db.connection.authenticate()
  })

  it('Should return a list of candidates', async () => {
    await request(app)
      .get('/api/v1/candidates')
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
        const jsonListData: Candidate[] = JSON.parse(JSON.stringify(response.body))
        const [firstCandidateApi] = jsonListData
        const [firstCandidate] = candidatesList
        expect(firstCandidateApi.id).toBe(firstCandidate.id)
        expect(firstCandidateApi.city_id).toBe(firstCandidate.city_id)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
