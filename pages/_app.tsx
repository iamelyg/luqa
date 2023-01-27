import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileDrawer from '@/components/navbar/Mobile';

import theme from '@/theme';
import { StoreProvider } from './tienda/context/store.context.d';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider>
        <DesktopNavbar />
        <Container
          marginY={4}
          padding={4}
          maxWidth='container.xl'>
          <Component {...pageProps} />
        </Container>
        <MobileDrawer />
      </StoreProvider>
    </ChakraProvider>
  )
}

export default App