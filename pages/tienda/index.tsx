import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { Button, Grid, Link, Stack, Text, Image, Flex, Card, CardHeader, CardBody, CardFooter, Heading, Divider, ButtonGroup } from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import QuickView from "./components/QuickView";

import api from "@/src/product/api";
import { Product } from "@/src/product/types";
import { useStoreContext } from "./context/store.context.d";

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

  return <AnimateSharedLayout type="crossfade">
    <Stack spacing={6}>

      <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
        {products.map(product => <Card maxW='sm' key={product.id}>
          <CardBody>
            <Image
              onClick={() => setSelectedImage(product.image)}
              as={motion.img} cursor='pointer' layoutId={product.image}
              alt={product.title} src={product.image} objectFit='cover' borderTopRadius={10} />
            <Stack mt='6' spacing='3'>
              <Heading size='sm'>{product.title}</Heading>
              <Text color='green.500' fontSize='xl'>{parseCurrency(product.price)}</Text>
              <Text color='gray.500' fontSize='lg' as='del'>{parseCurrency(product.regularPrice)}</Text>
            </Stack>
            <QuickView selectedProduct={product} />
          </CardBody>
          <CardFooter paddingTop={0} gap={1}>
            {/* <Button variant='outline' colorScheme='brand' onClick={() => setCart(state => state.concat(product))}> */}
            <Button variant='outline' colorScheme='brand' onClick={() => addToCart(product)}>
              Agregar al carrito
            </Button>
          </CardFooter>
        </Card>)}
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

  return {
    props: {
      products,
    },
    // cada cuánto tiempo iene que ir la petición al servidor a actualizar la infos
    revalidate: 10
  };
}

export default Market;