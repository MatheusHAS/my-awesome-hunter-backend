import app from '@/app'
import db from '@/database'
;(async () => {
  await db.connection.authenticate()

  app.listen(process.env.PORT || 3000)
})()
