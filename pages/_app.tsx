import { ChakraProvider, Container, Heading, Image, VStack } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileDrawer from '@/components/navbar/Mobile';

import theme from '@/theme';
import { INFORMATION } from '@/app/constants';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DesktopNavbar />
      <Container
        backgroundColor='white'
        boxShadow='md'
        marginY={4}
        padding={4}
        maxWidth='container.xl'>
        <VStack>
          <Image src={INFORMATION.logo} borderRadius={9999} />
          <Heading>{INFORMATION.title}</Heading>
        </VStack>
        <Component {...pageProps} />
      </Container>
      <MobileDrawer />
    </ChakraProvider>
  )
}

export default App