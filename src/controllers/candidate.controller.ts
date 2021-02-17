import { Request, Response, NextFunction } from 'express'
import { Candidate } from '@/models'

class CandidateController {
  static async index(req: Request, res: Response, next: NextFunction) {
    return Candidate.findAll()
      .then((data: Candidate[]) => res.json(data))
      .catch(next)
  }
}

export { CandidateController }
export default CandidateController
