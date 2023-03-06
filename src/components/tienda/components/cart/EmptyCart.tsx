import { VStack, Text, Icon } from '@chakra-ui/react';
import { BsCartX } from 'react-icons/bs';

const EmptyCart: React.FC = () => {
    return <VStack flex={1} justifyContent='center'>
        <Icon as={BsCartX} w={60} h={60} color='blackAlpha.500' />
        <Text>No hay productos en tu carrito </Text>
    </VStack>
}

export default EmptyCart;