import { CatagoryWhereInput } from "./CatagoryWhereInput";
import { CatagoryOrderByInput } from "./CatagoryOrderByInput";

export type CatagoryFindManyArgs = {
  where?: CatagoryWhereInput;
  orderBy?: Array<CatagoryOrderByInput>;
  skip?: number;
  take?: number;
};
