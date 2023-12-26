import { ProductUpdateManyWithoutCatagoriesInput } from "./ProductUpdateManyWithoutCatagoriesInput";

export type CatagoryUpdateInput = {
  name?: string;
  products?: ProductUpdateManyWithoutCatagoriesInput;
};
