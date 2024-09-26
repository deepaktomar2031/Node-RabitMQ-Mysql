import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  title: string

  @Column({ type: 'varchar' })
  image: string

  @Column({ type: 'varchar', default: 0 })
  likes: number
}

// export const product: Product = new Product()
