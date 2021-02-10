import { Router, Request, Response, NextFunction } from 'express'
import { IJobFinderFilter } from '@/interfaces'
import { JobFinderService } from '@/services'
import { City, Job } from '@/models'

export const JobRouter = () =>
  Router().get('/jobs/:job_id/candidates', async (req: Request, res: Response, next: NextFunction) => {
    const JobId: number = parseInt(req.params.job_id)
    if (JobId > 0) {
      const jobItem: Job = await Job.findOne({
        where: {
          id: JobId,
        },
        include: [City],
      })
      if (jobItem) {
        const filter: IJobFinderFilter = {}
        console.log(req.query)
        const { techs, experience_min, experience_max } = req.query
        if (techs) {
          filter.techs = techs
            .toString()
            .split(',')
            .map((tech) => parseInt(tech))
        }
        if (experience_min) {
          filter.experience_min = parseInt(experience_min as string)
        }
        if (experience_max) {
          filter.experience_max = parseInt(experience_max as string)
        }
        const jobFinder = new JobFinderService({
          job: jobItem,
          filter,
        })
        const result = await jobFinder.getCandidates()
        return res.send(result)
      }
    }
    return res.status(404).send({ notFound: true })
  })
