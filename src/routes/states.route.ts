import { Router, Request, Response, NextFunction } from 'express'
import { State } from '@/models'

export const StateRouter = () =>
  Router().get('/states', (req: Request, res: Response, next: NextFunction) => {
    State.findAll()
      .then((stateList: State[]) => res.json(stateList))
      .catch(next)
  })
