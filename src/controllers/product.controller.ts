import { Request, Response } from 'express'
import { AppDataSource } from '@src/data-source'
import { Product } from '@src/entity/Product'
import { HTTP_STATUS, message, LogErrorMessage } from '@src/utils'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product()
    product.title = 'John'
    product.image = 'Doe'
    product.likes = 0
    const result = await AppDataSource.manager.save(product)
    console.log('Product has been created!')
    //   app.post('/api/products', async (req: Request, res: Response) => {
    //     const product = await productRepository.create(req.body);
    //     const result = await productRepository.save(product)
    //     channel.sendToQueue('product_created', Buffer.from(JSON.stringify(result)))
    return res.send(result)
    // })
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    //   app.get('/api/products/:id', async (req: Request, res: Response) => {
    //     const product = await productRepository.findOne(req.params.id)
    //     return res.send(product)
    // })
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    // app.get('/api/products', async (req: Request, res: Response) => {
    //   const products = await productRepository.find()
    //   res.json(products)
    // })
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    //   app.put('/api/products/:id', async (req: Request, res: Response) => {
    //     const product = await productRepository.findOne(req.params.id)
    //     productRepository.merge(product, req.body)
    //     const result = await productRepository.save(product)
    //     channel.sendToQueue('product_updated', Buffer.from(JSON.stringify(result)))
    //     return res.send(result)
    // });
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    //   app.delete('/api/products/:id', async (req: Request, res: Response) => {
    //     const result = await productRepository.delete(req.params.id)
    //     channel.sendToQueue('product_deleted', Buffer.from(req.params.id))
    //     return res.send(result)
    // })
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}

export const increaseLikes = async (req: Request, res: Response) => {
  try {
    //   app.post('/api/products/:id/like', async (req: Request, res: Response) => {
    //     const product = await productRepository.findOne(req.params.id)
    //     product.likes++
    //     const result = await productRepository.save(product)
    //     return res.send(result)
    // })
  } catch (error: unknown) {
    console.log(LogErrorMessage(error))
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      successful: false,
      message: message.Something_went_wrong,
    })
  }
}
