import { Request, Response, NextFunction } from 'express'
import { State } from '@/models'

class StateController {
  static async index(req: Request, res: Response, next: NextFunction) {
    return State.findAll()
      .then((data: State[]) => res.json(data))
      .catch(next)
  }
}

export { StateController }
export default StateController
