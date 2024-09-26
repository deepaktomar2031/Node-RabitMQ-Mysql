import { Router } from 'express'
import {
  healthCheck,
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  increaseLikes,
} from '@src/controllers'

/**
 * Handle all routes
 * @param router
 */
export const routes = (router: Router) => {
  // Health check
  router.get('/api/health', healthCheck)

  // create product
  router.post('/api/product', createProduct)

  // get all products
  router.get('/api/products', getProducts)

  // get product by id
  router.get('/api/product/:id', getProductById)

  // update product
  router.put('/api/product/:id', updateProduct)

  // delete product
  router.delete('/api/product/:id', deleteProduct)

  // increase likes
  router.put('/api/product/:id/like', increaseLikes)
}
