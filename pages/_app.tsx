import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import DesktopNavbar from '@/components/navbar/DesktopNavbar';
import MobileDrawer from '@/components/navbar/Mobile';

import theme from '@/theme';
import TodoProvider from './tienda/StoreProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <TodoProvider>
        <DesktopNavbar />
        <Container
          marginY={4}
          padding={4}
          maxWidth='container.xl'>
          <Component {...pageProps} />
        </Container>
        <MobileDrawer />
      </TodoProvider>
    </ChakraProvider>
  )
}

export default App