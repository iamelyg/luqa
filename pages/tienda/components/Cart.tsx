import { useState, useRef } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button, Text,
    Input,
    Icon, Flex, Image

} from '@chakra-ui/react';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useStoreContext } from '../context/store.context.d';

export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cart } = useStoreContext();

    return (
        <>
            <Button onClick={onOpen} colorScheme='brand' variant='ghost' h={68} w={68} borderRadius={999} >
                <Icon as={MdOutlineShoppingBag} w={9} h={9} />
            </Button>
            <Text>{cart.length} Productos</Text>

            <Drawer
                isOpen={isOpen}
                placement='bottom'
                onClose={onClose}
                size='xl'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Tu carrito</DrawerHeader>

                    <DrawerBody>
                        {cart.map(prod => <Flex key={prod.id}>
                            <Image src={prod.image} w={20}/>
                            <Text>{prod.title}</Text>
                            <Text>{prod.price}</Text>
                        </Flex>)}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}