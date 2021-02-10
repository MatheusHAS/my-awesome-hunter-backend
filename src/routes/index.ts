import { Express, Request, Response } from 'express'
import { HealthCheckRouter, CandidateRouter, CityRouter, StateRouter, TechnologyRouter, JobRouter } from '@/routes/api'

const setupRoutes = (app: Express) => {
  app.use('/', HealthCheckRouter())
  app.use('/api/v1', [CandidateRouter(), StateRouter(), CityRouter(), TechnologyRouter(), JobRouter()])
  app.use((req: Request, res: Response) => {
    res.status(404).send('Nothing here...')
  })
}

export default setupRoutes
