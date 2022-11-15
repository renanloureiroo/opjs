import { Request, Response } from 'express';
import { Order } from '../../models/Order';

async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({
        createdAt: 1,
      })
      .populate('products.product');

    return res.json(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { listOrders };
