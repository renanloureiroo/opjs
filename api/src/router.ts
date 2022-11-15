import { Router } from 'express';

const router = Router();

// List categories
router.get('/categories', (req, res) => {
  return res.send('OK');
});

// Create category
router.post('/categories', (req, res) => {
  return res.send('OK');
});

// List Products
router.get('/products', (req, res) => {
  return res.send('OK');
});

// Create products
router.post('/products', (req, res) => {
  return res.send('OK');
});

// Get products by category
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
