// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config()
import 'reflect-metadata'
import express, { Express } from 'express'
import { routes } from '@src/routes/routes'
import { LogErrorMessage } from '@src/utils'
import { SwaggerDocs } from '@docs/swagger/swagger'
import { PORT } from '@src/constants/constants'
import { AppDataSource } from '@src/data-source'
import { User } from '@src/entity/User'

export const app: Express = express()
export const PortNum = process.env.PORT! || PORT
// export let db: any

// const connectToDatabase = async () => {
//   db = await createConnection()
// }
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
  SwaggerDocs(app, Number(PortNum))
}

const start = async () => {
  try {
    AppDataSource.initialize()
      .then(async () => {
        console.log('Database connected!')

        await listenPort(Number(PortNum))
        createSwaggerDocs()
        userBodyParser()
        await createRoutes()
        // Example: Create a new user
        const user = new User()
        user.firstName = 'John'
        user.lastName = 'Doe'

        await AppDataSource.manager.save(user)
        console.log('User has been saved.')
      })
      .catch((error) => console.log(error))

    // await connectToDatabase()
    // await listenPort(Number(PortNum))
    // createSwaggerDocs()
    // userBodyParser()
    // await createRoutes()
  } catch (error) {
    console.log(LogErrorMessage(error))
  }
}

export default {
  start,
}
