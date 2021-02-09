import { Router } from 'express'

export const HealthCheckRouter = () =>
  Router().get('/hc', (req, res) => {
    res.status(200).send("i'm alive")
  })
