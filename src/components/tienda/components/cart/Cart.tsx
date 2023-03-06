import { useMemo } from 'react';
import { Box, HStack, Drawer, IconButton, Select, Heading, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Text, Icon, Flex, Image, VStack } from '@chakra-ui/react';
import { MdOutlineShoppingCart, MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';

import ProductInCart from './ProductInCart';

import { useStoreContext } from '../../context/store.context.d';
import { parseCurrency } from '@/src/utils/utilities';

const Cart: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { state: { cart } } = useStoreContext();

	const productList = useMemo(() => cart
		.reduce((message, product) => message.concat(`* ${product.item.title} - ${parseCurrency(product.item.price)}\n`), '')
		.concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.item.price, 0))}`)
		, [cart])

	const text = `*Hola*, quiero pagar mi pedido \n\n`;

	const sendMessage = () => {
		window.open(`https://wa.me/51940049419?text=${encodeURIComponent(text.concat(productList))}`, '_blank', 'noopener,noreferrer')
		console.log('hola')
	}

	return (
		<>
			<Box position='relative'>
				<IconButton aria-label='agregar al carrito' onClick={onOpen} colorScheme='brand' variant='ghost' icon={<Icon as={MdOutlineShoppingCart} w={6} h={6} />} />
				<Text as='mark' position='absolute' top={-2} right={-2} bg='brand.300' color='white' fontSize='sm' h={6} w={6} borderRadius={100} display='flex' justifyContent='center' alignItems='center'>
					{cart.length}
				</Text>
			</Box>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md'>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Tus productos</DrawerHeader>
					<DrawerBody>
						{cart.map(prod => <ProductInCart key={prod.item.id} product={prod} />)}
					</DrawerBody>
					<DrawerFooter gap={5} flexDirection='column' bg='brand.700' color='whiteAlpha.800'>
						<Flex justifyContent='space-between' w='full'>
							<Text>Subtotal</Text>
							<Text fontWeight='bold'>{parseCurrency(cart.reduce((total, prod) => total + prod.item.regularPrice, 0))}</Text>
						</Flex>
						<Flex justifyContent='space-between' w='full'>
							<Text>Descuento</Text>
							<Text fontWeight='bold'>{parseCurrency(cart.reduce((total, prod) => total + (prod.item.price - prod.item.regularPrice), 0))}</Text>
						</Flex>
						<HStack justifyContent='space-between' color='green.500' w='full'>
							<Text>Total</Text>
							<Text fontWeight='bold'>{parseCurrency(cart.reduce((total, prod) => total + prod.item.price, 0))}</Text>
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

export default Cart; 