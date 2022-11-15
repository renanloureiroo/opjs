type IngredientType = {
  name: string
  icon: string
}

interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  ingredients: IngredientType[]
  imagePath: string;
  categoryId: string;
}

export { ICreateProductDTO };
