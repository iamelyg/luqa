import { GetStaticProps } from 'next';

import { getProductList } from '@/api/product';
import { Product } from '@/src/product/types';
import Market from '@/src/components/tienda';

interface Props {
  products: Product[]
}

const MarketPage: React.FC<Props> = ({ products }) => {
  return <Market products={products} />

}

export const getStaticProps: GetStaticProps = async () => {
  // const products = await api.list();

  const products = await getProductList();

  return {
    props: {
      products,
    },
    // cada cuánto tiempo iene que ir la petición al servidor a actualizar la infos
    revalidate: 5
  };
}

export default MarketPage;