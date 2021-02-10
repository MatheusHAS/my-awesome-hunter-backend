import { Router, Request, Response, NextFunction } from 'express'
import { Technology } from '@/models'

export const TechnologyRouter = () =>
  Router().get('/technologies', (req: Request, res: Response, next: NextFunction) => {
    Technology.findAll()
      .then((techList: Technology[]) => res.json(techList))
      .catch(next)
  })
