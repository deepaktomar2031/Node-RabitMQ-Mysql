import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import { Product } from './entity/Product'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.TYPEORM_HOST!,
  port: Number(process.env.TYPEORM_PORT!),
  username: process.env.TYPEORM_USERNAME!,
  password: process.env.TYPEORM_PASSWORD!,
  database: process.env.TYPEORM_DATABASE!,
  synchronize: true,
  logging: false,
  entities: [User, Product],
})
