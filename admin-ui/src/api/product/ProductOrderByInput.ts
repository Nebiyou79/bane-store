import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  catagoryId?: SortOrder;
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  title?: SortOrder;
  titlePrice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
