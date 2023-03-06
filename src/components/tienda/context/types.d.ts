import { Product } from "@/src/product/types";

export interface ProductInCart {
  item: Product,
  quantity: number,
}


export type StoreContextType = {
  state: {
    cart: ProductInCart[];
  }
  addToCart: (product: Product) => void;
  removeFromCart: (product: string) => void;
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
};
