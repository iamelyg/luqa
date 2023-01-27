import { Product } from "@/product/types";

export type StoreContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};
