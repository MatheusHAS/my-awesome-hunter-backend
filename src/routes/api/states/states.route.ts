import { Router } from 'express'
import { StateController } from '@/controllers'

export const StateRouter = () => Router().get('/states', StateController.index)
