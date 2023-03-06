import { useMemo } from 'react';
import { Box, HStack, Drawer, IconButton, Select, Heading, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Text, Icon, Flex, Image, VStack } from '@chakra-ui/react';
import { MdOutlineShoppingCart, MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';

import { useStoreContext } from '../../context/store.context.d';
import { parseCurrency } from '@/src/utils/utilities';
import Quantity from './Quantity';
import { ProductInCart } from '../../context/types';


interface Props {
    product: ProductInCart,
}


const ProductInCart: React.FC<Props> = ({ product: { item, quantity } }) => {
    const { image, title, price, regularPrice, brand, id } = item
    const { removeFromCart } = useStoreContext();

    return <HStack gap={4} justifyContent='space-between' alignItems='center' mb={5}>
        <Image src={image[0]} w={20} borderRadius='1rem' alt={title} />
        <VStack flex={1} alignItems='flex-start'>
            <HStack alignItems='flex-start' justifyContent='space-between' w='100%'>
                <Box>
                    <Text as='sub' textTransform='uppercase' color='darkAlpha.500'>{brand || 'luqa'}</Text>
                    <Heading size='xs' as='h6' fontWeight='semibold' color='darkAlpha.600'>{title}</Heading>
                </Box>
                <IconButton onClick={() => removeFromCart(id)} aria-label='Eliminar del carrito' variant='ghost' icon={<Icon as={MdDeleteOutline} w={6} h={6} />} />
                {/* <RemoveFromCartButton  /> */}
            </HStack>
            <HStack justifyContent='space-between' w='100%' mt={4}>
                <Select placeholder='Cantidad' w='5rem'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </Select>
                <Quantity id={id} quantity={quantity} />
                <Box>
                    <Text as='del' color='gray.500'>{parseCurrency(regularPrice)}</Text>
                    <Text color='green.600' fontWeight='bold'>{parseCurrency(price)}</Text>
                </Box>
            </HStack>
        </VStack>
    </HStack>
}

export default ProductInCart;