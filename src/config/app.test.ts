import request from 'supertest'
import app from '@/config/app'

describe('Testing express server', () => {
  it('Unknown url should return 404', async () => {
    await request(app).get('/my-unknown-url-here').expect(404)
  })
})
