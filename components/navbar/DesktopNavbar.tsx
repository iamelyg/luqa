import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import React from "react";
// import * as NextLink from 'next/link'
import Link from 'next/link'


import MobileDrawer from './Mobile';


const data = [{ label: 'Inicio' }]


const CTA = "Get Started"
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


                <Image src={Logo.src} h="50px" />

                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                    {data.map((item, i) => (
                        <Link key={i} href='/hola' >
                            {item.label}
                        </Link>
                    ))}
                </HStack>
                <Button href={`/hola`} as={Link} width='fit-content' colorScheme='whatsapp'>Ver carrito</Button>

            </Flex>
        </chakra.header>
    );
}