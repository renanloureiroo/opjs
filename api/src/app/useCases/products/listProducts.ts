import { Request, Response } from 'express';
import { Product } from '../../models/Product';


async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

}


export { listProducts };
