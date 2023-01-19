import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { Button, Grid, Link, Stack, Text } from "@chakra-ui/react";

import api from "@/product/api";
import { Product } from "@/product/types";

interface Props {
  products: Product[]
}

const parseCurrency = (value: number): String => value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN'})

const IndexRoute: React.FC<Props> = ({ products }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const text = useMemo(() => cart
    .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`), '')
    .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`)
    , [cart])

  return <Stack>
    <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
      {products.map(product => <Stack backgroundColor='gray.100' key={product.id}>
        <Text>{product.title}</Text>
        <Text>{parseCurrency(product.price)}</Text>
        <Button
          onClick={() => setCart(state => state.concat(product))}
          colorScheme='blue'>Agregar</Button>
      </Stack>)}
    </Grid>
    {Boolean(cart.length) && <Button isExternal href={`https://wa.me/51940049419?text=${encodeURIComponent(text)}`} as={Link} colorScheme='whatsapp'>Ver carrito ({cart.length} productos)</Button>}
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