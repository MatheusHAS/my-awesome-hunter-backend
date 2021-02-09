import request from 'supertest'
import app from '@/app'
import db from '@/database'

describe('Testing express server', () => {
  beforeAll(async () => {
    db.connection.authenticate()
  })

  it('Connection is up when server is up', async () => {
    expect(db.connection.authenticate()).toBeTruthy()
  })
  it('Unknown url should return 404', async () => {
    await request(app).get('/my-unknown-url-here').expect(404)
  })

  afterAll(async () => {
    db.connection.close()
  })
})
