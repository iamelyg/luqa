import { Image, Flex, Button, HStack, chakra, Link } from '@chakra-ui/react';
import Logo from '../../public/vercel.svg';
import React from "react";

import MobileDrawer from './Mobile';


const data = [{ label: 'home' }]


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
                <Image src={Logo.src} h="50px" />

                <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                    {data.map((item, i) => (
                        <Link key={i}>
                            <Button variant="nav"> {item.label} </Button>
                        </Link>
                    ))}
                </HStack>
                <HStack>
                    <Button>
                        {CTA}
                    </Button>
                    <MobileDrawer/>
                </HStack>

            </Flex>
        </chakra.header>
    );
}