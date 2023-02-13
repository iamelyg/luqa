import { Product } from "@/src/product/types";

export type StoreContextType = {
  state: {
    cart: Product[];
    addingToCart: boolean;
    wasAdded: boolean;
  }
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};
