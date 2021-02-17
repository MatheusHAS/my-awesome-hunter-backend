import { Router } from 'express'
import { CityController } from '@/controllers'

export const CityRouter = () => Router().get('/cities', CityController.index)
