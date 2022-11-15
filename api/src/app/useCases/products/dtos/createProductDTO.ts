type IngredientType = {
  name: string;
  icon: string;
};

interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  ingredients: IngredientType[];
  image: string;
  category: string;
}

export { ICreateProductDTO };
