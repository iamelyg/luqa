import React from "react";
import { SimpleGrid, Flex, Button, HStack, chakra, Icon, Text, VStack, ListItem, IconButton, UnorderedList, Stack, Container, Input, Box } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import Link from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';


import { INFORMATION } from '@/app/constants';

const Footer: React.FC = () => {
    return (
        <chakra.footer bg='brand.800' color='whiteAlpha.900' >
            <VStack maxW={{ base: '100%', xl: 'container.xl' }} py={10} m='auto'>
                <Box mb={7}>
                    <Text>Sé el primero en conocer lo nuevo de Luqa</Text>
                    <HStack >
                        <Input
                            placeholder="Ingresa tu correo"
                            size="md"
                            type="email"
                        />
                        <IconButton aria-label='Search database' colorScheme='brand' icon={<Icon as={FaPaperPlane} w={6} h={6} />} />
                    </HStack>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }}>
                    {INFORMATION.footer.map((menu) => <VStack key={menu.title} w={40}>
                        <Text>{menu.title}</Text>
                        <UnorderedList listStyleType='none'>
                            {menu.submenu.map(sub => <ListItem key={sub.slug}><Link href={sub.slug}>{sub.label}</Link></ListItem>)}
                        </UnorderedList>
                    </VStack>)}
                    <Stack >
                        <Text>Conversa con uno de nuestros especialistas</Text>
                        <Text>josehuarcaya@luqa.pe</Text>
                        <Text>+5198765431</Text>
                    </Stack>

                </SimpleGrid>

                {/* <HStack justifyContent='center' gap={8} alignItems='start' wrap='wrap'>
                    {INFORMATION.footer.map((menu) => <VStack key={menu.title} w={40}>
                        <Text>{menu.title}</Text>
                        <UnorderedList listStyleType='none'>
                            {menu.submenu.map(sub => <ListItem key={sub.slug}><Link href={sub.slug}>{sub.label}</Link></ListItem>)}
                        </UnorderedList>
                    </VStack>)}
                    <Stack >
                        <Text>Conversa con uno de nuestros especialistas</Text>
                        <Text>josehuarcaya@luqa.pe</Text>
                        <Text>+5198765431</Text>
                    </Stack>
                </HStack> */}
            </VStack>
        </chakra.footer>
    );
}

export default Footer;