import { Catagory as TCatagory } from "../api/catagory/Catagory";

export const CATAGORY_TITLE_FIELD = "name";

export const CatagoryTitle = (record: TCatagory): string => {
  return record.name?.toString() || String(record.id);
};
