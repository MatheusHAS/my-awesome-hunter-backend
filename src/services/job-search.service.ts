import { Job, Candidate, City, CandidatesTechnologies, Technology } from '@/models'
import { FindOptions, Sequelize } from 'sequelize'
import { IJobFinderFilter, IJobFinderService } from '@/interfaces'

class JobSearchService {
  private job: Job = null
  private maxListSize: number = 100
  private offset: number = 0
  private filter: IJobFinderFilter

  constructor(options: IJobFinderService) {
    const { job, maxListSize, offset, filter } = options
    if (job) this.job = job
    if (maxListSize) this.maxListSize = maxListSize
    if (offset) this.offset = offset
    if (filter && Object.keys(filter).length > 0) this.filter = filter
  }

  async getCandidates() {
    const candidates = await Candidate.findAll(this.getOptions())
    return this.orderCandidates(candidates)
  }

  private orderCandidates(candidates: Candidate[]) {
    let result = candidates
    console.log(this.filter)
    result = result.filter((cand: Candidate) => {
      let hasTechs = true
      let hasExperienceTime = true
      if (this.filter) {
        if (this.filter.techs) {
          const techsCount = cand.technologies.filter(({ technology_id }: any) =>
            this.filter.techs.includes(technology_id)
          )
          if (techsCount.length <= 0) {
            hasTechs = false
          }
        }
        if (this.filter.experience_min || this.filter.experience_max) {
          const min = this.filter.experience_min || 0
          const max = this.filter.experience_max || 0
          if (cand.experience < min || cand.experience > max) {
            hasExperienceTime = false
          }
        }
      }
      return hasTechs && hasExperienceTime
    })
    return result
  }

  private getOptions(): FindOptions {
    return {
      attributes: [
        'id',
        'name',
        'experience',
        [
          Sequelize.literal(
            `
                (
                  SELECT CAST(COUNT(1) as INT)
                  FROM jobs_technologies AS jt
                  WHERE jt.job_id = ${this.job.id}
                )
                `
          ),
          'job_techs_count',
        ],
        [
          Sequelize.literal(
            `
                (
                  SELECT CAST(COUNT(1) as INT)
                  FROM candidates_technologies AS ct
                  WHERE ct.candidate_id = "Candidate"."id" AND ct.technology_id IN (
                    SELECT jt.technology_id
                    FROM jobs_technologies AS jt
                    WHERE jt.job_id = ${this.job.id}
                  )
                )
                `
          ),
          'candidate_tech_count',
        ],
      ],
      limit: this.maxListSize,
      offset: this.offset,
      // order: [[Sequelize.col('experience'), 'DESC']],
      // order: [[Sequelize.fn('calculate_distance', 0, 0, this.job.city.latitude, this.job.city.longitude, 'M'), 'ASC']],
      include: [
        {
          model: City,
          attributes: ['latitude', 'longitude'],
        },
        {
          model: CandidatesTechnologies,
          // include: [Technology],
          attributes: ['technology_id'],
        },
      ],
    }
  }
}

export default JobSearchService
export { JobSearchService }
