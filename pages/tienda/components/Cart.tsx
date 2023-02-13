import { useMemo } from 'react';
import { Box, HStack, Drawer, IconButton, Heading, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Text, Icon, Flex, Image } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';

import { useStoreContext } from '../context/store.context.d';
import { parseCurrency } from '@/src/utils/utilities';
import { Product } from '@/src/product/types';

const Cart: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { state: { cart } } = useStoreContext();

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
            <Box position='relative'>
                <IconButton aria-label='Search database' onClick={onOpen} colorScheme='brand' variant='ghost' icon={<Icon as={MdOutlineShoppingCart} w={6} h={6} />} />
                <Text as='mark' position='absolute' top={-2} right={-2} bg='brand.300' color='white' fontSize='sm' h={6} w={6} borderRadius={100} display='flex' justifyContent='center' alignItems='center'>
                    {cart.length}
                </Text>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            // size='xl'
            >
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
                            <Button variant='solid' as={Link} onClick={onClose} href='/carrito-de-compra' isDisabled={Boolean(!cart.length)} >
                                Comprar
                            </Button>
                            {/* <Button variant='solid' isDisabled={Boolean(!cart.length)} width='fit-content' colorScheme='brand' onClick={sendMessage}>
                                Enviar Pedido
                            </Button> */}
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