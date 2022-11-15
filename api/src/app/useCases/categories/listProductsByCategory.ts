import { Request, Response } from 'express';
import { Product } from '../../models/Product';

async function listProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;
  try {
    const products = await Product.find().where('category').equals(categoryId);

    return res.json(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { listProductsByCategory };
