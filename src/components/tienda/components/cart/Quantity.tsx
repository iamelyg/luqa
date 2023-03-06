import { useState } from 'react';
import { Button, HStack, Text, useToast } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useStoreContext } from '../../context/store.context.d';

interface Props {
    id: string,
    quantity: number,
}

const Quantity: React.FC<Props> = ({ id, quantity }) => {

    const { addProduct, removeProduct } = useStoreContext();

    return <HStack>
        <Button onClick={() => removeProduct(id)}>
            -
        </Button>
        <Text>{quantity}</Text>
        <Button onClick={() => addProduct(id)}>+</Button>
    </HStack>
}

export default Quantity;