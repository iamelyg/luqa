import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="es">
      <Head >
        <Script src="https://kit.fontawesome.com/2746a1f4a5.js" crossOrigin="anonymous"></Script>
      </Head>
      <body>
        <ColorModeScript initialColorMode='dark' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
