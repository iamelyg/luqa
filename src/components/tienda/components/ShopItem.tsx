import { Badge, Stack, Text, Image, Card, Center, CardBody, CardFooter, Heading, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import QuickView from "./QuickView";

import { Product } from '@/src/product/types';
import { useStoreContext } from '../context/store.context.d';
import { parseCurrency } from '@/src/utils/utilities';
import AddToCartButton from './AddButton';

interface Props {
    product: Product
}

const ShopItem: React.FC<Props> = ({ product }) => {
    const { state: { cart } } = useStoreContext();

    return <Card maxW='sm'>
        <CardBody>
            
            <Center position='relative'>
                <Image
                    //   onClick={() => setSelectedImage(product.image)}
                    as={motion.img} cursor='pointer' layoutId={product.image}
                    alt={product.title} src={Array.isArray(product.image) ? product.image[0] : product.image} objectFit='cover' borderTopRadius={10} />
                <QuickView selectedProduct={product} />
            </Center>
            <Stack mt='6' spacing={4}>
                <Box>
                    <Heading size='sm'>{product.title}</Heading>
                    <Text as='sub' textTransform='uppercase' color='gray.500'>{product.brand || 'luqa'}</Text>
                </Box>
                <Box>
                    <Text color='green.400' fontWeight='bold' fontSize='xl' justifyContent='space-between' display='flex' ><span>Online</span> {parseCurrency(product.price)}</Text>
                    <Text color='gray.500' fontSize='lg' justifyContent='space-between' display='flex' m={0}><span>Regular</span> <del>{parseCurrency(product.regularPrice)}</del></Text>
                </Box>
            </Stack>
        </CardBody>

        <CardFooter paddingTop={0} gap={1} flexDirection='column'>
            <AddToCartButton product={product} />
            {/* {Boolean(cart.includes(product)) && <Badge colorScheme='green' fontSize='1rem'>&#10003; Agregado</Badge>} */}
        </CardFooter>
    </Card>
}

export default ShopItem;