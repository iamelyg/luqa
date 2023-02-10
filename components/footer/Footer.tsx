import React from "react";
import { Image, Flex, Button, HStack, chakra, Icon, Text, VStack, ListItem, IconButton, UnorderedList, Stack, Container, Input } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';

import { DrawerExample } from '@/pages/tienda/components/Cart';

import { INFORMATION } from '@/app/constants';

const Footer: React.FC = () => {
    return (
        <chakra.footer bg='brand.800' color='whiteAlpha.900' >
            <Container max-width='container.xl' padding={10}>
                <Text>Sé el primero en conocer lo nuevo de Luqa</Text>
                <HStack>
                    <Input
                        placeholder="Ingresa tu correo"
                        size="md"
                        type="email"
                    />
                    <IconButton aria-label='Search database' colorScheme='brand' icon={<Icon as={FaPaperPlane} w={6} h={6} />} />
                </HStack>


                <HStack justifyContent='baseline' gap={8} alignItems='start'>
                    {INFORMATION.footer.map((menu) => <VStack key={menu.title} >
                        <Text>{menu.title}</Text>
                        <UnorderedList listStyleType='none'>
                            {menu.submenu.map(sub => <ListItem key={sub.slug}><Link href={sub.slug}>{sub.label}</Link></ListItem>)}
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