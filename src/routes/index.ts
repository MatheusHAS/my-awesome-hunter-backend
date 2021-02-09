import { Express, Request, Response } from 'express'
import { HealthCheckRouter } from '@/routes/health-check.route'
import { CandidateRouter } from '@/routes/candidates.route'
import { CityRouter } from '@/routes/cities.route'
import { StateRouter } from '@/routes/states.route'
import { TechnologyRouter } from '@/routes/technologies.route'

const setupRoutes = (app: Express) => {
  app.use('/', HealthCheckRouter())
  app.use('/api/v1', [CandidateRouter(), StateRouter(), CityRouter(), TechnologyRouter()])
  app.use((req: Request, res: Response) => {
    res.status(404).send('Nothing here...')
  })
}

export default setupRoutes
