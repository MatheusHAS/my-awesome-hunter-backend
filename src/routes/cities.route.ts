import { Router, Request, Response, NextFunction } from 'express'
import { City } from '@/models'

export const CityRouter = () =>
  Router().get('/cities', (req: Request, res: Response, next: NextFunction) => {
    City.findAll()
      .then((citiesList: City[]) => res.json(citiesList))
      .catch(next)
  })
