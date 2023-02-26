import Image from 'next/image';
import { Grid, useMediaQuery } from "@chakra-ui/react";
import { Carousel } from 'react-responsive-carousel';

import fongex2proM from '../src/images/home/auricular-hifi-fonge-x2pro-m.png';
import fongex2pro from '../src/images/home/auricular-hi-fi-fonge-x2-pro.png';
import soundpeatsM from '../src/images/home/audifonos-soundpeats-m.png';
import soundpeats from '../src/images/home/audifonos-soundpeats.png';
import air3proM from '../src/images/home/audifono-air3-pro-m.png';
import air3pro from '../src/images/home/audifono-air3-pro.png';

const IndexRoute: React.FC = () => {
  return <>
    {/* <Image style={{ borderRadius: '1.5rem' }}
      src={isLargerThan800 ? fongex2proD : fongex2pro}
      alt="auricular hifi Fonge x2 pro "
    // width={500} automatically provided
    // height={500} automatically provided
    // blurDataURL="data:..." automatically provided
    // placeholder="blur" // Optional blur-up while loading
    /> */}
    <MainCarousel />
  </>;
}

export default IndexRoute;

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
