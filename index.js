import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { auth } from './auth.js'
import { toNodeHandler, fromNodeHeaders } from 'better-auth/node'

dotenv.config()
const app = express()
const port = process.env.PORT || 3001
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)
app.all('/api/auth/{*any}', toNodeHandler(auth))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/me', async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers)
  })
  return res.json(session)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
