import { useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import { Product } from '@/src/product/types';
import { useStoreContext } from '../context/store.context.d';

interface Props {
    product: Product
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
    const toast = useToast();

    const [addingToCart, setAddingToCart] = useState<boolean>(false);

    const { addToCart } = useStoreContext();

    const onClick = () => {
        addToCart(product)
        setAddingToCart(true);
        setTimeout(() => {
            setAddingToCart(false);
        }, 500);

        toast({
            title: 'Auricular agregado a tu carrito.',
            description: product.title,
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    }

    return <Button isLoading={addingToCart} loadingText='Agregando' onClick={onClick}>
        Agregar al carrito
    </Button>
}

export default AddToCartButton;