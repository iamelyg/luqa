import { Product } from "@/product/types";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};

export type StoreContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
};
