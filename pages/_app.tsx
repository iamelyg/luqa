import { ChakraProvider, Container, Image, VStack } from '@chakra-ui/react';
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
        <VStack>
          <Image src='https://via.placeholder.com/150'borderRadius={9999}/>
        </VStack>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default App