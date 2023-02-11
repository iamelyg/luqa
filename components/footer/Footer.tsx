import React from "react";
import { SimpleGrid, Link, Button, HStack, chakra, Icon, Text, VStack, ListItem, IconButton, UnorderedList, Stack, Container, Input, Box } from '@chakra-ui/react';
import Logo from '../../public/logo-luqa-pe.png';
import NextLink from 'next/link';
import { FaPaperPlane } from 'react-icons/fa';


import { INFORMATION } from '@/app/constants';

const Footer: React.FC = () => {
    return (
        <chakra.footer>
            <VStack  gap={10} maxW={{ base: '100%', xl: 'container.xl' }} py={10} m='auto' px={{ base: 5, md: 20 }}>
                <Box w={{ base: '90%', md: '60%', lg: '50%' }}>
                    <Text fontWeight='bold' textAlign='center' mb={3}>Sé el primero en conocer lo nuevo de Luqa</Text>
                    <HStack >
                        <Input
                            placeholder="Ingresa tu correo"
                            size="md"
                            type="email"
                            variant='filled'
                        />
                        <IconButton aria-label='Search database' colorScheme='brand' icon={<Icon as={FaPaperPlane} w={6} h={6} />} />
                    </HStack>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} gap={4}>
                    {INFORMATION.footer.map((menu, id) => <Stack key={id} w={40}>
                        <Text fontSize='md' fontWeight='bold'>{menu.title}</Text>
                        <UnorderedList listStyleType='none'>
                            {menu.submenu.map(sub => <ListItem key={sub.slug} mb={2} _hover={{ color: 'brand.500' }}>
                                <Link as={NextLink} href={sub.slug}>{sub.label}</Link>
                            </ListItem>)}
                        </UnorderedList>
                    </Stack>)}
                    <Stack >
                        <Text fontSize='md' fontWeight='bold'>Conversa con uno de nuestros especialistas</Text>
                        <Text>hola@luqa.pe</Text>
                        <Text>+5198765431</Text>
                        <Button>Llámanos</Button>
                        <Button>Escríbenos a whatsapp</Button>
                    </Stack>

                </SimpleGrid>

            </VStack>
            <HStack bg='brand.700' color='whiteAlpha.800' py={4} justifyContent='center'>
                <Text as='span' fontSize='xs'>© 2023 Luqa, Lima - Perú</Text>
            </HStack>
        </chakra.footer>
    );
}

export default Footer;