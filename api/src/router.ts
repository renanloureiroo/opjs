import multer from 'multer';
import { Router } from 'express';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { options } from './shared/configs/multer';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { getOrderById } from './app/useCases/orders/getOrderById';

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
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

router.get('/orders/:id', getOrderById);

// Create order
router.post('/orders', createOrder);

// Get order by id

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  return res.send('OK');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req, res) => {
  return res.send('OK');
});

export { router };
