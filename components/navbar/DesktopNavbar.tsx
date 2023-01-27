import { Image, Flex, Button, HStack, Icon, useColorMode, useColorModeValue, chakra } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import React from "react";
import Link from 'next/link';
import { MdOutlineShoppingBag } from 'react-icons/md';
import styled from '@emotion/styled';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools'

import { INFORMATION } from '@/app/constants';



const DesktopNavbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // const bg = useColorModeValue('red.500', 'red.200');
    const bg = useColorModeValue('white', 'gray.800')
    const shadow = useColorModeValue('lg', 'sm')
    return (
        <chakra.header position={{ base: 'relative', md: 'sticky' }} top={0} zIndex={1} bg={bg} shadow={shadow} >
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
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
                <HStack>
                    <Button onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                    <Button variant='ghost' h={68} w={68} borderRadius={999}>
                        <Icon as={MdOutlineShoppingBag} w={9} h={9} />
                    </Button>
                </HStack>

            </Flex>
        </chakra.header>
    );
}

export default DesktopNavbar;