import { Request, Response } from 'express';
import { Order } from '../../models/Order';

async function changeOrderStatus(
  req: Request,
  res: Response,
): Promise<Response> {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      return res.status(400).json({
        error: 'Invalid status',
      });
    }
    const order = await Order.findById(orderId);
    console.log(order);

    if (!order) {
      return res.status(404).json({
        error: 'Order not found',
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    return res.status(204).end();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 'error' });
  }
}

export { changeOrderStatus };
