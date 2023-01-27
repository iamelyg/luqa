import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileDrawer from '@/components/navbar/Mobile';

import theme from '@/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <DesktopNavbar />
      <Container
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