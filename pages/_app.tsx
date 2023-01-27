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
        boxShadow='md'
        marginY={4}
        padding={4}
        maxWidth='container.xl'>
        <Component {...pageProps} />
      </Container>
      <MobileDrawer />
    </ChakraProvider>
  )
}

export default App