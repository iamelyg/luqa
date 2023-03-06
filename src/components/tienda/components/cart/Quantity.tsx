import { HStack, Text, IconButton, Icon } from '@chakra-ui/react';
import { useStoreContext } from '../../context/store.context.d';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface Props {
    id: string,
    quantity: number,
}

const Quantity: React.FC<Props> = ({ id, quantity }) => {
    const { addProduct, removeProduct, removeFromCart } = useStoreContext();

    return <HStack>
        <IconButton onClick={() => quantity === 1 ? removeFromCart(id) : removeProduct(id)} aria-label='Quitar un producto en carrito' size='xs' icon={<Icon as={AiOutlineMinus} />} />
        <Text>{quantity}</Text>
        <IconButton onClick={() => addProduct(id)} aria-label='Agregar un producto en carrito' size='xs' icon={<Icon as={AiOutlinePlus} />} />
    </HStack>
}

export default Quantity;