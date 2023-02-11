import { INFORMATION } from "@/app/constants";
import { Flex, Text, chakra } from "@chakra-ui/react";
import styled from '@emotion/styled';
import Link from 'next/link';
import { motion } from "framer-motion"

import useShowMenu from "./useShowMenu";
import { DrawerExample } from "@/pages/tienda/components/Cart";

const MobileMenu: React.FC = () => {
    const { visible } = useShowMenu(true);

    return <chakra.header as={motion.header} initial={{ translateY: 40 }} whileInView={{ translateY: 0 }} exit={{ translateY: 10 }}
        display={{ base: "flex", sm: "none" }} margin={3} padding={2}
        borderRadius='1.2rem' position={visible ? 'fixed' : 'relative'} bottom={0} left={0} right={0} gap={4} justifyContent='center'>
        {INFORMATION.menu.map((item, i) => (
            <Flex key={i} href={item.slug} as={Link}
                borderRadius='.5rem'
                direction='column'
                alignItems='center'
                padding={1}
                _hover={{
                    background: "white",
                    color: "primary.500",
                }}>
                <IconLuqa className={`fa-solid ${item.icon}`} />
                <Text fontSize='xs'>{item.label}</Text>
            </Flex>
        ))}
         <DrawerExample />
    </chakra.header>
}

const IconLuqa = styled.i`
  font-size: 1.5rem;
`

export default MobileMenu;