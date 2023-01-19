import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '@/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Container
      backgroundColor='white'
      boxShadow='md'
      marginY={4}
      padding={4}
      maxWidth='container.xl'>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default App