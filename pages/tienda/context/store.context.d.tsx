
import { Product } from '@/src/product/types';
import { useContext, createContext, useState } from 'react';
import { StoreContextType } from './types';

const TodoContext = createContext<StoreContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [addingToCart, setAddingToCart] = useState<boolean>(false);
    const [wasAdded, setWasAdded] = useState<boolean>(false);

    const addToCart = (product: Product) => {
        setCart(state => state.concat(product))
        setAddingToCart(true);
        setTimeout(() => {
            setAddingToCart(false);
            setWasAdded(true);
        }, 500);
    }

    const removeFromCart = (product: Product) => {

    }

    const state = { cart, addingToCart, wasAdded }
    
    return <TodoContext.Provider value={{
        state,
        addToCart, removeFromCart
    }}>{children}</TodoContext.Provider>;
};

const useStoreContext = () => {
    const currentUserContext = useContext(TodoContext) as StoreContextType;

    if (!currentUserContext) {
        throw new Error(
            "useCurrentUser has to be used within <CurrentUserContext.Provider>"
        );
    }

    return currentUserContext;
};

export { StoreProvider, useStoreContext }