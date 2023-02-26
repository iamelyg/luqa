import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import DesktopNavbar from '@/src/components/navbar/DesktopNavbar';
import MobileDrawer from '@/src/components/navbar/Mobile';
import Footer from '@/src/components/footer/Footer';

import theme from '@/theme';
import { StoreProvider } from './tienda/context/store.context.d';
import { useRouter } from 'next/router';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <StoreProvider>
        {pathname !== '/carrito-de-compra' && <DesktopNavbar />}
        <Container
          marginY={4}
          padding={4}
          maxWidth='container.xl'>
          <Component {...pageProps} />
        </Container>
        <Footer/>
        <MobileDrawer />
      </StoreProvider>
    </ChakraProvider>
  )
}

export default App