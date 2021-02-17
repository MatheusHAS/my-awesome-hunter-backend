import { Router } from 'express'
import { TechnologyController } from '@/controllers'

export const TechnologyRouter = () => Router().get('/technologies', TechnologyController.index)
