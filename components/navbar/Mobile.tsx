import { Flex, Icon, Link } from "@chakra-ui/react";
import { CiShop } from 'react-icons/ci';

const data = [
    { label: 'Inicio', slug: '/' },
    { label: 'Tienda', slug: '/tienda' },
    { label: 'atención al cliente', slug: '/atencion-cliente' },
]

export default function MobileMenu() {
    return <Flex
        display={{ base: "flex", md: "none" }} bgColor='blue.900' margin={3} padding={2}
        borderRadius='1.2rem' position='sticky' bottom={4} gap={4} justifyContent='center'>
        {data.map((item, i) => (
            <Flex key={i} href={item.slug} as={Link}
                borderRadius='.5rem'
                color='whiteAlpha.900'
                padding={1}
                _hover={{
                    background: "white",
                    color: "teal.500",
                }}>
                <Icon as={CiShop} h='2.2rem' w='2.2rem' />
            </Flex>
        ))}
    </Flex>
}