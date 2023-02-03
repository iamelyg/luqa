import React from "react";
import { Image, Flex, Button, HStack, useColorMode, useColorModeValue, chakra, Icon } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { DrawerExample } from '@/pages/tienda/components/Cart';

import { INFORMATION } from '@/app/constants';

const DesktopNavbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const bg = useColorModeValue('white', 'gray.800')
    const shadow = useColorModeValue('lg', 'sm')
    return (
        <chakra.header position={{ base: 'relative', md: 'sticky' }} top={0} zIndex={1} bg={bg} shadow={shadow} >
            <Flex
                w="100%"
                px="6"
                py="5"
                justify="space-between"
            >
                <HStack gap={6}>
                    <Link href='/'>
                        <Image src={Logo.src} h={50} w={150} />
                    </Link>
                    <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                        {INFORMATION.menu.map((item, i) => (
                            <Link key={i} href={item.slug} >
                                {item.label}
                            </Link>
                        ))}
                    </HStack>
                </HStack>
                <HStack>
                    <Button colorScheme='brand' onClick={toggleColorMode} h={10} w={10} variant='ghost'>
                        <Icon as={colorMode === 'light' ? BsMoonStars : BsSun} w={5} h={5} />
                        {/* {colorMode === 'light' ? <Icon as={BsMoonStars} w={10} h={10}/> : <Icon as={BsSunFill}/>} */}
                    </Button>
                    <DrawerExample />
                </HStack>

            </Flex>
        </chakra.header>
    );
}

export default DesktopNavbar;