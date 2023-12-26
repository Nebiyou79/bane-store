import { ProductCreateNestedManyWithoutCatagoriesInput } from "./ProductCreateNestedManyWithoutCatagoriesInput";

export type CatagoryCreateInput = {
  name: string;
  products?: ProductCreateNestedManyWithoutCatagoriesInput;
};
