import request, { Response } from 'supertest'
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
      .get(`/api/v1/jobs/${job.id}/candidates`)
      .then((response: Response) => {
        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThan(1)
      })
  })

  afterAll(async () => {
    await db.connection.close()
  })
})
