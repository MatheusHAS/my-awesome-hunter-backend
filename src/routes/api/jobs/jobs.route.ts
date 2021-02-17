import { Router } from 'express'
import { JobController } from '@/controllers'

export const JobRouter = () =>
  Router().get('/jobs', JobController.index).get('/jobs/:job_id/candidates', JobController.getCandidatesByJobId)
