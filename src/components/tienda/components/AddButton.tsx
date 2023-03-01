import { useState } from 'react';
import { Button, Grid, Badge, Stack, Text, Image, Flex, Card, Center, CardBody, CardFooter, Heading, Divider, ButtonGroup, Box } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import { Product } from '@/src/product/types';
import { useStoreContext } from '../context/store.context.d';

interface Props {
    product: Product
}

const AddToCartButton: React.FC<Props> = ({ product }) => {
    const [addingToCart, setAddingToCart] = useState<boolean>(false);

    const { addToCart } = useStoreContext();

    const onClick = ( ) => {
        addToCart(product)
        setAddingToCart(true);
        setTimeout(() => {
            setAddingToCart(false);
        }, 500);
    }

    return <Button isLoading={addingToCart} loadingText='Agregando' onClick={onClick}>
        Agregar al carrito
    </Button>
}

export default AddToCartButton;