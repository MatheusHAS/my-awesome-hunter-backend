import { Request, Response, NextFunction } from 'express'
import { Technology } from '@/models'

class TechnologyController {
  static async index(req: Request, res: Response, next: NextFunction) {
    return Technology.findAll()
      .then((data: Technology[]) => res.json(data))
      .catch(next)
  }
}

export { TechnologyController }
export default TechnologyController
