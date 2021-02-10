import { Router, Request, Response, NextFunction } from 'express'
import { Candidate } from '@/models'

export const CandidateRouter = () =>
  Router().get('/candidates', (req: Request, res: Response, next: NextFunction) => {
    Candidate.findAll()
      .then((candidatesList: Candidate[]) => res.json(candidatesList))
      .catch(next)
  })
