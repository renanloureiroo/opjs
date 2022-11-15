import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { ICreateProductDTO } from './dtos/createProductDTO';

async function createProduct(req: Request, res: Response) {
  try {
    // const {
    //   name,
    //   price,
    //   category,
    //   description,
    //   image,
    //   ingredients,
    // }: ICreateProductDTO = req.body;

    // if (!name) {
    //   return res.status(400).json({
    //     message: 'Product name is required',
    //   });
    // }

    // if (!price) {
    //   return res.status(400).json({
    //     message: 'Product price is required',
    //   });
    // }

    // if (!category) {
    //   return res.status(400).json({
    //     message: 'Category id is required',
    //   });
    // }

    // if (!description) {
    //   return res.status(400).json({
    //     message: 'Description is required',
    //   });
    // }

    // if (!image) {
    //   return res.status(400).json({
    //     message: 'Image path is required',
    //   });
    // }

    // if (!ingredients) {
    //   return res.status(400).json({
    //     message: 'Ingredients are required',
    //   });
    // }

    console.log(req.body);

    return res.status(201).send('OK');
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { createProduct };
