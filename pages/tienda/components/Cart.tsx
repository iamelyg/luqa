import { useMemo } from 'react';
import { Box, HStack, Drawer, Heading, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Text, Icon, Flex, Image } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { useStoreContext } from '../context/store.context.d';
import { parseCurrency } from '@/src/utils/utilities';
import { Product } from '@/src/product/types';

const Cart: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { cart } = useStoreContext();

    const productList = useMemo(() => cart
        .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), '')
        .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
        , [cart])

    const text = `*Hola*, quiero pagar mi pedido \n\n`;

    const sendMessage = () => {
        window.open(`https://wa.me/51940049419?text=${encodeURIComponent(text.concat(productList))}`, '_blank', 'noopener,noreferrer')
        console.log('hola')
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme='brand' variant='ghost' h={68} w={68} borderRadius={999} >
                <Icon as={MdOutlineShoppingCart} w={9} h={9} />
            </Button>
            <Text>{cart.length} Productos</Text>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Tu carrito</DrawerHeader>
                    <DrawerBody>
                        {cart.map(prod => <ProductInCart key={prod.id} {...prod} />)}
                    </DrawerBody>
                    <DrawerFooter gap={5} flexDirection='column'>
                        <HStack justifyContent='space-between'>
                            <Text>Total</Text>
                            <Text color='green.500' fontWeight='bold'>{parseCurrency(cart.reduce((total, item) => total + item.price, 0))}</Text>
                        </HStack>
                        <Box>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Seguir comprando
                            </Button>
                            <Button variant='solid' isDisabled={Boolean(!cart.length)} width='fit-content' colorScheme='brand' onClick={sendMessage}>
                                Enviar Pedido
                            </Button>
                        </Box>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const ProductInCart: React.FC<Product> = ({ image, title, price, regularPrice, brand }) => {
    return <HStack gap={4} justifyContent='space-between' alignItems='start' mb={5}>
        <Image src={image} w={20} borderRadius='1rem'/>
        <Box flex={1}>
            <Heading size='xs' as='h6'>{title}</Heading>
            <Text as='sub' textTransform='uppercase' color='gray.500'>{brand || 'luqa'}</Text>
        </Box>
        <Box>
            <Text color='green.600' fontWeight='bold'>{parseCurrency(price)}</Text>
            <Text as='del' color='gray.500'>{parseCurrency(regularPrice)}</Text>
        </Box>
    </HStack>
}

export default Cart; 