import request, { Response } from 'supertest'
import { Candidate } from '@/models'
import db from '@/database'
import app from '@/app'
import jobsList from '@/data/jobs.json'
const [job] = jobsList

describe('Jobs routes', () => {
  beforeAll(async () => {
    await db.connection.authenticate()
  })

  it(`Should return a list of candidates to job ID ${job.id}`, async () => {
    await request(app)
      .get(`/api/v1/jobs/${job.id}/candidates?techs=1,2,3&experience_min=0&experience_max=2`)
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
        const jsonListData: Candidate[] = JSON.parse(JSON.stringify(response.body))
        const [candidate] = jsonListData
        expect(candidate.experience).toBeGreaterThan(0)
        expect(candidate.experience).toBeLessThanOrEqual(2)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
