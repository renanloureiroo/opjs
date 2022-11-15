type ProductType = {
  product: string;
  quantity: number;
};

interface ICreateOrderDTO {
  products: ProductType[];
  table: string;
}
export { ICreateOrderDTO };
