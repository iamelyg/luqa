import { INFORMATION } from "@/app/constants";
import { Flex, Text } from "@chakra-ui/react";
import styled from '@emotion/styled';
import Link from 'next/link';

import useShowMenu from "./useShowMenu";

const MobileMenu: React.FC = () => {
    const { visible } = useShowMenu(true);

    return <Flex
        display={{ base: "flex", md: "none" }} bgColor='blue.900' margin={3} padding={2}
        borderRadius='1.2rem' position={visible ? 'fixed' : 'relative'} bottom={0} left={0} right={0} gap={4} justifyContent='center'>
        {INFORMATION.menu.map((item, i) => (
            <Flex key={i} href={item.slug} as={Link}
                borderRadius='.5rem'
                color='whiteAlpha.900'
                direction='column'
                alignItems='center'
                padding={1}
                _hover={{
                    background: "white",
                    color: "primary.500",
                }}>
                <IconLuqa className={`fa-solid ${item.icon}`} />
                <Text>{item.label}</Text>
            </Flex>
        ))}
    </Flex>
}

const IconLuqa = styled.i`
  font-size: 1.5rem;
`

export default MobileMenu;