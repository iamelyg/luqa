import { Image, Flex, Button, HStack, chakra, Icon } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import React from "react";
import Link from 'next/link';
import { MdOutlineShoppingBag } from 'react-icons/md';


import MobileDrawer from './Mobile';


const data = [
    { label: 'Inicio', slug: '/' },
    { label: 'Tienda', slug: '/tienda' },
    { label: 'atención al cliente', slug: '/atencion-cliente' },
]


export default function DesktopNavbar() {
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <MobileDrawer />
                <Link href='/'>
                    <Image src={Logo.src} h={50} w={150} />
                </Link>
                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                    {data.map((item, i) => (
                        <Link key={i} href={item.slug} >
                            {item.label}
                        </Link>
                    ))}
                </HStack>
                <Button variant='ghost' h={68} w={68} borderRadius={999}>
                    <Icon as={MdOutlineShoppingBag} w={9} h={9} />
                </Button>

            </Flex>
        </chakra.header>
    );
}