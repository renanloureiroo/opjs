import { Request, Response } from 'express';
import { Product } from '../../models/Product';
import { ICreateProductDTO } from './dtos/createProductDTO';

async function createProduct(req: Request, res: Response) {
  try {
    const {
      name,
      price,
      category,
      description,
      ingredients,
    }: ICreateProductDTO = req.body;

    const imagePath = req.file?.path;

    if (!imagePath) {
      return res.status(400).json({
        message: 'Please upload a valid image',
      });
    }

    if (!name) {
      return res.status(400).json({
        message: 'Product name is required',
      });
    }

    if (!price) {
      return res.status(400).json({
        message: 'Product price is required',
      });
    }

    if (!category) {
      return res.status(400).json({
        message: 'Category id is required',
      });
    }

    if (!description) {
      return res.status(400).json({
        message: 'Description is required',
      });
    }

    if (!ingredients) {
      return res.status(400).json({
        message: 'Ingredients are required',
      });
    }

    const ingredientsFormatted = JSON.parse(ingredients);
    const product = await Product.create({
      name,
      price,
      category,
      description,
      ingredients: ingredientsFormatted,
      imagePath,
    });

    return res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export { createProduct };
