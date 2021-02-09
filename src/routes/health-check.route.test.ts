import request from 'supertest'
import app from '@/app'

describe('Health check route ', () => {
  it('When the service is online should return OK', async () => {
    await request(app).get('/hc').expect(200, "i'm alive")
  })
})
