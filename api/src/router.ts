import multer from 'multer';
import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { options } from './shared/configs/multer';

const router = Router();

const upload = multer(options);

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List Products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// Get products by category
// TODO: create get products by categoryId
router.get('/categories/:categoryId/products', (req, res) => {
  return res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
  return res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  return res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  return res.send('OK');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req, res) => {
  return res.send('OK');
});

export { router };
