import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { ICreateOrderDTO } from './dtos/createOrderDTO';

async function createOrder(req: Request, res: Response) {
  try {
    const { table, products }: ICreateOrderDTO = req.body;
    const product = await Order.create({
      table,
      products,
    });

    return res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { createOrder };
