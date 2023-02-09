import { useMemo } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, Link,
    Button, Text,
    Icon, Flex, Image
} from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { useStoreContext } from '../context/store.context.d';

const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

export function DrawerExample() {
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
            <Button onClick={onOpen} colorScheme='brand' variant='ghost' leftIcon={<Icon as={MdOutlineShoppingCart} w={5} h={5} />}>
                {cart.length} Productos
            </Button>

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
                        {cart.map(prod => <Flex key={prod.id}>
                            <Image src={prod.image} w={20} />
                            <Text>{prod.title}</Text>
                            <Text>{prod.price}</Text>
                        </Flex>)}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Seguir comprando
                        </Button>
                        <Button variant='solid' isDisabled={Boolean(!cart.length)} width='fit-content' colorScheme='brand' onClick={sendMessage}>
                            {/* <Link isExternal href={`https://wa.me/51940049419?text=${encodeURIComponent(text)}`}>Enviar</Link> */}
                            Enviar
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}