import { Request, Response } from 'express';
import { Category } from '../../models/Category';
import { ICreateCategoryDTO } from './dtos/createCategoryDTO';



async function createCategory(req: Request, res: Response): Promise<Response> {
  try {
    const { name, icon }: ICreateCategoryDTO = req.body;

    if (!name) {
      return res.status(400).json({
        message: 'Category name is required'
      });
    }

    if (!icon) {
      return res.status(400).json({
        message: 'Category icon is required'
      });

    }

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


export { createCategory };
