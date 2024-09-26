// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config()
import 'reflect-metadata'
import express, { Express } from 'express'
import { routes } from '@src/routes/routes'
import { LogErrorMessage } from '@src/utils'
import { SwaggerDocs } from '@docs/swagger/swagger'
import { PORT } from '@src/constants/constants'
import { AppDataSource } from '@src/data-source'

export const app: Express = express()
export const PortNum = Number(process.env.PORT!) || PORT

const connectToDatabase = async () => {
  AppDataSource.initialize().then(async () => {
    console.log('Database connected!')
  })
}

const listenPort = (PORT: number) => {
  app.listen(PORT, () => console.log(`Server is up & running on http://localhost:${PortNum}`))
}

const userBodyParser = () => {
  app.use(express.json())
}

const createRoutes = async () => {
  routes(app)
}

const createSwaggerDocs = () => {
  SwaggerDocs(app, PortNum)
}

const start = async () => {
  try {
    await connectToDatabase()
    await listenPort(PortNum)
    createSwaggerDocs()
    userBodyParser()
    await createRoutes()
  } catch (error) {
    console.log(LogErrorMessage(error))
  }
}

export default {
  start,
}
