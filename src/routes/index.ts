import express, { Router } from 'express'

const routes: Router = express.Router()

routes.get('/', (req, res) => {
  return res.send({ test: true })
})

export default routes
