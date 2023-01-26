import { INFORMATION } from "@/app/constants";
import { Flex, Icon, Image, Link, useTheme  } from "@chakra-ui/react";

export default function MobileMenu() {
    const theme = useTheme();
    

    console.log('theme', theme.colors);
    return <Flex
        display={{ base: "flex", md: "none" }} bgColor='blue.900' margin={3} padding={2}
        borderRadius='1.2rem' position='sticky' bottom={4} gap={4} justifyContent='center'>
        {INFORMATION.menu.map((item, i) => (
            <Flex key={i} href={item.slug} as={Link}
                borderRadius='.5rem'
                color='whiteAlpha.900'
                padding={1}
                _hover={{
                    background: "white",
                    color: "teal.500",
                }}>
                <Image src={`${item.icon}size=${28}&color=${theme.colors.white.slice(1)}`}/>
                <Image src={`${item.icon}size=${28}&color=${'ffffff'}`}/>
                <i className="fa-regular fa-store"></i>
                <i className="fa-solid fa-store"></i>
            </Flex>
        ))}
    </Flex>
}