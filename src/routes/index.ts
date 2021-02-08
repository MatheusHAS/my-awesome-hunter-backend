import express, { Router } from 'express'
import { City, State, Technology, Candidate, CandidatesTechnologies } from '@/models'

const routes: Router = express.Router()

// routes.get('/city', async (req, res) => {
//   const result = await City.findAll({
//     include: State,
//   })
//   return res.send(result)
// })

// routes.get('/tech', async (req, res) => {
//   const result = await Technology.findAll()
//   return res.send(result)
// })

// routes.get('/candidates', async (req, res) => {
//   const result = await Candidate.findAll({
//     include: [
//       City,
//       {
//         model: CandidatesTechnologies,
//         include: [Technology],
//       },
//     ],
//   })
//   return res.send(result)
// })

export default routes
