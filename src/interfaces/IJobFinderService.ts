import { Job } from '@/models'
import { IJobFinderFilter } from './IJobFinderFilter'

export interface IJobFinderService {
  job: Job
  maxListSize?: number
  offset?: number
  filter?: IJobFinderFilter
}
