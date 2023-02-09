import React from "react";
import { Image, Flex, Button, HStack, chakra, Icon, Text, VStack, ListItem, ListIcon, UnorderedList, Stack, Container } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { BsMoonStars, BsSun } from 'react-icons/bs';

import { DrawerExample } from '@/pages/tienda/components/Cart';

import { INFORMATION } from '@/app/constants';

const Footer: React.FC = () => {
    return (
        <chakra.footer bg='brand.800' color='whiteAlpha.900' >
            <Container max-width='container.xl' padding={10}>
                <HStack justifyContent='baseline' gap={8}>
                    {INFORMATION.footer.map((menu) => <VStack key={menu.title} >
                        <Text>{menu.title}</Text>
                        <UnorderedList listStyleType='none'>
                            {menu.submenu.map(sub => <ListItem><Link href={sub.slug}>{sub.label}</Link></ListItem>)}
                        </UnorderedList>
                    </VStack>)}
                    <Stack>
                        <Text>Conversa con uno de nuestros especialistas</Text>
                        <Text>josehuarcaya@luqa.pe</Text>
                        <Text>+5198765431</Text>
                    </Stack>
                </HStack>
            </Container>
        </chakra.footer>
    );
}

export default Footer;