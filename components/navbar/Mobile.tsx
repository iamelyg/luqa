import { useRef } from 'react';
import {
    useDisclosure, Flex, Box, Button, VStack, Icon, HStack, Link, Drawer, DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Input, Image
} from "@chakra-ui/react";

const data = [{ label: 'home' }]


export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
        <Flex display={{ base: "flex", md: "none" }}>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <Image src='https://icongr.am/fontawesome/navicon.svg?size=24&color=currentColor' />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
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
        </Flex>
    );
};