import { Request, Response } from 'express';
import { Order } from '../../models/Order';

async function cancelOrder(req: Request, res: Response): Promise<Response> {
  try {
    const { orderId } = req.params;

    await Order.findByIdAndDelete(orderId);

    return res.status(204);
  } catch (err) {
    return res.status(500).json({
      status: 'error',
    });
  }
}

export { cancelOrder };
