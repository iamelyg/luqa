import { useState } from 'react';
import { Button, HStack, Text, useToast } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useStoreContext } from '../../context/store.context.d';

interface Props {
    id: string
}

const Quantity: React.FC<Props> = ({ id }) => {

    const { addProduct, removeProduct} = useStoreContext();

    return <HStack>
        <Button onClick={() => removeProduct(id)}>
            -
        </Button>
        <Text>4</Text>
        <Button onClick={() => addProduct(id)}>+</Button>
    </HStack>
}

export default Quantity;