import { Image, Flex, Button, HStack, chakra, Icon } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import React from "react";
import Link from 'next/link';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { INFORMATION } from '@/app/constants';

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
                <Button variant='ghost' h={68} w={68} borderRadius={999}>
                    <Icon as={MdOutlineShoppingBag} w={9} h={9} />
                </Button>

            </Flex>
        </chakra.header>
    );
}