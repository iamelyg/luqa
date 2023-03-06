import { Product } from "@/src/product/types";

export type StoreContextType = {
  state: {
    cart: Product[];
  }
  addToCart: (product: Product) => void;
  removeFromCart: (product: string) => void;
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
};
