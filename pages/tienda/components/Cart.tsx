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
    Icon,

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
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
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