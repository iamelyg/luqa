import React from "react";
import { Image, Flex, Button, HStack, useColorMode, useColorModeValue, chakra, Icon } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { motion } from "framer-motion"

import Cart from '@/pages/tienda/components/Cart';
import useShowMenu from "./useShowMenu";

import { INFORMATION } from '@/src/app/constants';

const DesktopNavbar: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const shadow = useColorModeValue('lg', 'sm');

    const { visible} = useShowMenu(true);

    return (
        <chakra.header className='main' as={motion.header} initial={{ translateY: -40 }} whileInView={{ translateY: 0 }} exit={{ translateY: -10 }}
            position={visible ? 'sticky' : 'relative'} top={0} zIndex={1} shadow={shadow}  display={{ base: "none", sm: "flex" }}>
            <Flex w="100%" px="6" py="5" justify="space-between">
                <HStack gap={6}>
                    <Link href='/'>
                        <Image src={Logo.src} h={50} w={150} />
                    </Link>
                    <HStack as="nav" spacing="5">
                        {INFORMATION.menu.map((item, i) => (
                            <Button  as={Link} key={i} href={item.slug}>
                                {item.label}
                            </Button>
                        ))}
                    </HStack>
                </HStack>
                <HStack>
                    <Button colorScheme='brand' onClick={toggleColorMode} variant='ghost' leftIcon={<Icon as={colorMode === 'light' ? BsMoonStars : BsSun} w={5} h={5} />}>
                        {colorMode === 'light' ? 'Oscuro' : 'Claro'}
                    </Button>
                    <Cart />
                </HStack>

            </Flex>
        </chakra.header>
    );
}

export default DesktopNavbar;