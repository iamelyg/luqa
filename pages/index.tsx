import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { Button, Grid, Link, Stack, Text, Box, Flex } from "@chakra-ui/react";

import api from "@/product/api";
import { Product } from "@/product/types";

interface Props {
  products: Product[]
}

const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })

const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const text = useMemo(() => cart
    .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), '')
    .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
    , [cart])

  return <Stack spacing={6}>
    <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
      {products.map(product => <Stack spacing={3} backgroundColor='gray.100' borderRadius={10} padding={4} key={product.id}>
        <Stack spacing={1}>
          <Text>{product.title}</Text>
          <Text color='green.500' fontSize='sm' fontWeight='500'>{parseCurrency(product.price)}</Text>
        </Stack>
        <Button
          onClick={() => setCart(state => state.concat(product))}
          colorScheme='primary'
          size='sm'
          variant='ghost'>Agregar</Button>
      </Stack>)}
    </Grid>
    {Boolean(cart.length) && <Flex position='sticky' bottom={4} justifyContent='center' >
      <Button isExternal href={`https://wa.me/51940049419?text=${encodeURIComponent(text)}`} as={Link} width='fit-content' colorScheme='whatsapp'>Ver carrito ({cart.length} productos)</Button>
    </Flex>}
  </Stack>;
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

export default IndexRoute;