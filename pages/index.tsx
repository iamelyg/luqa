import Image from 'next/image';
import { useMediaQuery } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';
import { GetStaticProps } from 'next';

import fongex2proM from '../src/images/home/auricular-hifi-fonge-x2pro-m.png';
import fongex2pro from '../src/images/home/auricular-hi-fi-fonge-x2-pro.png';
import soundpeatsM from '../src/images/home/audifonos-soundpeats-m.png';
import soundpeats from '../src/images/home/audifonos-soundpeats.png';
import air3proM from '../src/images/home/audifono-air3-pro-m.png';
import air3pro from '../src/images/home/audifono-air3-pro.png';

import Market from '@/src/components/tienda';

import { getProductList } from '@/api/product';
import { Product } from '@/src/product/types';

interface Props {
  products: Product[]
}

const IndexRoute: React.FC<Props> = ({ products }) => {
  return <>
    <MainCarousel />
    <Market products={products} />
  </>;
}

export default IndexRoute;


export const getStaticProps: GetStaticProps = async () => {

  const products = await getProductList();

  return {
    props: {
      products,
    },
    // cada cuánto tiempo iene que ir la petición al servidor a actualizar la infos
    revalidate: 5
  };
}

const MainCarousel = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 600px)', { ssr: true, fallback: false });

  return <Carousel autoPlay={true} showArrows={false} showStatus={false} interval={3000} infiniteLoop>
    <Image style={{ borderRadius: '1.5rem', aspectRatio: isLargerThan800 ? '16/9' : '9/16' }}
      src={isLargerThan800 ? fongex2pro : fongex2proM}
      alt="auricular hifi Fonge x2 pro "
    />
    <Image style={{ borderRadius: '1.5rem', aspectRatio: isLargerThan800 ? '16/9' : '9/16' }}
      src={isLargerThan800 ? soundpeats : soundpeatsM}
      alt="auricular hifi Fonge x2 pro "
    />
    <Image style={{ borderRadius: '1.5rem', aspectRatio: isLargerThan800 ? '16/9' : '9/16' }}
      src={isLargerThan800 ? air3pro : air3proM}
      alt="auricular hifi Fonge x2 pro "
    />
  </Carousel>
}
