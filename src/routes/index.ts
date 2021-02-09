import { Express } from 'express'
import { HealthCheckRouter } from '@/routes/health-check.route'
import { CandidateRouter } from '@/routes/candidates.route'

const setupRoutes = (app: Express) => {
  app.use('/', HealthCheckRouter())
  app.use((req, res) => {
    res.status(404).send('Nothing here...')
  })
}

export default setupRoutes
