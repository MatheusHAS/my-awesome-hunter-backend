import express, { Router } from 'express'
import { State, City } from '@/models'

const routes: Router = express.Router()

routes.get('/', async (req, res) => {
  const result = await City.findOne({
    where: {
      state_id: 1,
    },
    include: State,
  })
  console.log('result', result)
  return res.send(result)
})

export default routes
