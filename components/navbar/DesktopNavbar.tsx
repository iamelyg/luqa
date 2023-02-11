import React, { useState, useEffect } from "react";
import { Image, Flex, Button, HStack, useColorMode, useColorModeValue, chakra, Icon } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { DrawerExample } from '@/pages/tienda/components/Cart';

import { INFORMATION } from '@/app/constants';

const DesktopNavbar: React.FC = () => {
    const [visible, setVisible] = useState<Boolean>(true);

    const { colorMode, toggleColorMode } = useColorMode();

    const shadow = useColorModeValue('lg', 'sm');

    useEffect(() => {
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;

        window.addEventListener('scroll', function (e) {

            // Get the new Value
            currentScrollPosition = window.pageYOffset;

            //Subtract the two and conclude
            if (previousScrollPosition - currentScrollPosition < 0) {
                setVisible(false);
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                setVisible(true);
            }

            // Update the previous value
            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    console.log('visble', visible)


    return (
        <chakra.header position={visible ? 'sticky' : 'relative'} top={0} zIndex={1} shadow={shadow} >
            <Flex w="100%" px="6" py="5" justify="space-between">
                <HStack gap={6}>
                    <Link href='/'>
                        <Image src={Logo.src} h={50} w={150} />
                    </Link>
                    <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
                        {INFORMATION.menu.map((item, i) => (
                            <Link key={i} href={item.slug}>
                                {item.label}
                            </Link>
                        ))}
                    </HStack>
                </HStack>
                <HStack>
                    <Button colorScheme='brand' onClick={toggleColorMode} variant='ghost' leftIcon={<Icon as={colorMode === 'light' ? BsMoonStars : BsSun} w={5} h={5} />}>
                        {colorMode === 'light' ? 'Oscuro' : 'Claro'}
                    </Button>
                    <DrawerExample />
                </HStack>

            </Flex>
        </chakra.header>
    );
}

export default DesktopNavbar;