import { Request, Response, NextFunction } from 'express'
import { City } from '@/models'

class CityController {
  static async index(req: Request, res: Response, next: NextFunction) {
    return City.findAll()
      .then((data: City[]) => res.status(200).send(data))
      .catch(next)
  }
}

export { CityController }
export default CityController
