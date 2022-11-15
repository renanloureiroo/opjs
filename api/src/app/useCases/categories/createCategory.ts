import { Request, Response } from 'express';
import { Category } from '../../models/Category';

interface IRequest {
  name: string;
  icon: string;
}

async function createCategories(req: Request, res: Response): Promise<Response> {
  try {
    const { name, icon }: IRequest = req.body;
    const category = await Category.create({
      name,
      icon
    });
    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json({
      error: 'Falha ao criar categoria!'
    });
  }


}


export { createCategories };
