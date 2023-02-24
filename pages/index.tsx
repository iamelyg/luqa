import Image from 'next/image';
import { Grid, useMediaQuery } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import fongex2pro from '../src/images/home/auricular-hifi-fonge-x2pro-m.png';
import fongex2proD from '../src/images/home/auricular-hi-fi-fonge-x2-pro.png';
import soundpeats from '../src/images/home/audifonos-soundpeats.png';
import air3pro from '../src/images/home/audifono-air3-pro.png';

const IndexRoute: React.FC = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', { ssr: true, fallback: false });

  return <>
    <Image style={{ borderRadius: '1.5rem' }}
      src={isLargerThan800 ? fongex2proD : fongex2pro}
      alt="auricular hifi Fonge x2 pro "
    // width={500} automatically provided
    // height={500} automatically provided
    // blurDataURL="data:..." automatically provided
    // placeholder="blur" // Optional blur-up while loading
    />
    <MainCarousel />
  </>;
}

export default IndexRoute;

const MainCarousel = () => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', { ssr: true, fallback: false });

  return <Carousel>
    <div>
      <Image style={{ borderRadius: '1.5rem' }}
        src={isLargerThan800 ? fongex2proD : fongex2pro}
        alt="auricular hifi Fonge x2 pro "
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />
    </div>
    <div>
      <Image
        src={soundpeats}
        alt="auricular hifi Fonge x2 pro "
      />
    </div>
    <div>
      <Image
        src={air3pro}
        alt="auricular hifi Fonge x2 pro "
      />
    </div>
  </Carousel>
}
