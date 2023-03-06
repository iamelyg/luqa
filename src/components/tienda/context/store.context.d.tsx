
import { Product } from '@/src/product/types';
import { useContext, createContext, useState } from 'react';
import { StoreContextType, ProductInCart } from './types';

const TodoContext = createContext<StoreContextType | null>(null);

interface Props {
    children: React.ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {
    const [cart, setCart] = useState<ProductInCart[]>([]);

    const addToCart = (product: Product) => {
        setCart(state => state.concat({ item: product, quantity: 1 }))
    }

    const removeFromCart = (id: string) => {
        setCart(state => state.filter(product => product.item.id !== id))
    }

    const addProduct = (id: string) => {
        console.log('agregar products')
    }

    const removeProduct = (id: string) => {
        console.log('quitar products')
    }

    const state = { cart }

    return <TodoContext.Provider value={{
        state,
        addToCart, removeFromCart,
        addProduct, removeProduct,
    }}>{children}</TodoContext.Provider>;
};

const useStoreContext = () => {
    const storeContext = useContext(TodoContext) as StoreContextType;

    // if (!storeContext) {
    //     throw new Error(
    //         "useCurrentUser has to be used within <useStoreContext.Provider>"
    //     );
    // }

    return storeContext;
};

export { StoreProvider, useStoreContext }