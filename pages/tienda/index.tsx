import { useMemo, useState } from 'react';
import { GetStaticProps } from 'next';
import { Button, Grid, Link, Stack, Text, Image, Flex, Card, Center, CardBody, CardFooter, Heading, Divider, ButtonGroup, Box } from '@chakra-ui/react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

import ShopItem from './components/ShopItem';

import { getProductList } from '@/api/product';
import api from '@/src/product/api';
import { Product } from '@/src/product/types';
import { useStoreContext } from './context/store.context.d';

interface Props {
  products: Product[]
}

const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

const Market: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { addToCart } = useStoreContext();

  const text = useMemo(() => cart
    .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), '')
    .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
    , [cart])

  return <AnimateSharedLayout type='crossfade'>
    <Stack spacing={6}>
      <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
        {products.map(product => <ShopItem product={product} key={product.id} />)}
      </Grid>
      {Boolean(cart.length) && <AnimatePresence>
        <Flex as={motion.div} animate={{ scale: 1 }} initial={{ scale: 0 }} exit={{ scale: 0 }}
          position='sticky' bottom={4} justifyContent='center' >
          <Button isExternal href={`https://wa.me/51940049419?text=${encodeURIComponent(text)}`} as={Link} width='fit-content' colorScheme='whatsapp'>Ver carrito ({cart.length} productos)</Button>
        </Flex>
      </AnimatePresence>}
    </Stack>
    <AnimatePresence>
      {selectedImage && <Flex
        as={motion.div}
        layoutId={selectedImage}
        onClick={() => setSelectedImage('')}
        key='backdrop'
        backgroundColor='rgba(0,0,0,.5)'
        height='100%'
        width='100%'
        justifyContent='center'
        left={0}
        top={0}
        zIndex={2}
        position='fixed'
        alignItems='center'>
        <Image key='image' src={selectedImage} />
      </Flex>}
    </AnimatePresence>
  </AnimateSharedLayout>;
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  await getProductList();

  return {
    props: {
      products,
    },
    // cada cuánto tiempo iene que ir la petición al servidor a actualizar la infos
    revalidate: 5
  };
}

export default Market;