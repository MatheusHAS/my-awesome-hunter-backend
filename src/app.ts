import { join } from 'path'
import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
import lusca from 'lusca'
import setupRoutes from '@/routes'
import cors from 'cors'

dotenv.config({ path: join(__dirname, '..', '.env') })

class AppController {
  express = null
  constructor() {
    this.express = express()
    this.middlewares()
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: true }))
    this.express.use(lusca.xssProtection(true))
    this.express.use(
      cors({
        origin: '*',
        optionsSuccessStatus: 200,
      })
    )
    setupRoutes(this.express)
  }
}

export default new AppController().express
