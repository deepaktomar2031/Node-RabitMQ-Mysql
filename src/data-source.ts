import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entity/User'
import { Product } from './entity/Product'

export const AppDataSource = new DataSource({
  type: 'mysql',
  url: process.env.DATABASE_URL!,
  synchronize: true,
  logging: false,
  entities: [User, Product],
})
