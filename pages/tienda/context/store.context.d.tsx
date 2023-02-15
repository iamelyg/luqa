
import { Product } from '@/src/product/types';
import { useContext, createContext, useState } from 'react';
import { StoreContextType } from './types';

const TodoContext = createContext<StoreContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart(state => state.concat(product))
    }

    const removeFromCart = (id: string) => {
        console.log('eliminar', id)
    }

    const state = { cart }
    
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