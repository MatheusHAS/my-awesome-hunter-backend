import { Router } from 'express'
import { CandidateController } from '@/controllers'

export const CandidateRouter = () => Router().get('/candidates', CandidateController.index)
