import { Request, Response } from 'express';
import { Order } from '../../models/Order';

async function getOrderById(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.json(order);
  } catch (err) {
    return res.status(400).json({
      status: 'error',
    });
  }
}

export { getOrderById };
