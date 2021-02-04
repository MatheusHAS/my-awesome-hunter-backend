import express from 'express'
import routes from '@/routes'

class AppController {
  express = null
  constructor() {
    this.express = express()
    this.middlewares()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(routes)
  }
}

export default new AppController().express
