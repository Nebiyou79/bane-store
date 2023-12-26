import { Product } from "../product/Product";

export type Catagory = {
  createdAt: Date;
  id: string;
  name: string;
  products?: Array<Product>;
  updatedAt: Date;
};
