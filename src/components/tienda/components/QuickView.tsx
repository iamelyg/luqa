import { useDisclosure, Button, Icon, Center, Text, Grid, Image, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, HStack, useMediaQuery } from '@chakra-ui/react';
import { BsEye } from "react-icons/bs";
import parse from 'html-react-parser';
import { Carousel } from 'react-responsive-carousel';

import { Product } from '@/src/product/types';
import { parseCurrency } from '@/src/utils/utilities';
import AddToCartButton from './AddButton';

interface Props {
	selectedProduct: Product
}

const QuickView: React.FC<Props> = ({ selectedProduct }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLargerThan800] = useMediaQuery('(min-width: 700px)')

	return (
		<>
			<Button onClick={onOpen} variant='ghost' position='absolute' h={10} w={10} bottom={1} right={1}><Icon w={5} h={5} as={BsEye} /></Button>
			<Modal size='xl' colorScheme='brand' scrollBehavior='inside' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
				<ModalOverlay backdropFilter='blur(5px)' />
				<ModalContent w={{ base: '90%', lg: '80%' }} maxWidth='container.xl' maxH='95%'>
					<ModalCloseButton />
					<ModalBody >
						<Grid gridGap={6} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
							{Array.isArray(selectedProduct.images)
								&& <Carousel showStatus={false} showThumbs={isLargerThan800} infiniteLoop={true} thumbWidth={50}>
									{selectedProduct.images.map(((url, id) => <img
										alt={selectedProduct.title} src={url} key={id} style={{ maxWidth: '300px'}} />
									))}
									{/* {selectedProduct.images.map(((url, id) => <Image
										alt={selectedProduct.title} src={url} objectFit='cover' borderRadius={10} key={id} />
									))} */}
								</Carousel>}
							<VStack alignItems='initial'>
								<ModalHeader>{selectedProduct.title}</ModalHeader>
								{parse(selectedProduct.description)}
								<HStack justifyContent='space-between' color='green'>
									<Text fontWeight='bold'>Online</Text>
									<Text fontWeight='bold' >{parseCurrency(selectedProduct.price)}</Text>
								</HStack>
								<HStack justifyContent='space-between' color='gray.300'>
									<Text>Regular</Text>
									<Text as='del'>{parseCurrency(selectedProduct.regularPrice)}</Text>
								</HStack>
								{isLargerThan800 && <ModalFooter>
									<AddToCartButton product={selectedProduct} />
									<Button variant='ghost'>Comprar ahora</Button>
								</ModalFooter>}
							</VStack>
						</Grid>
					</ModalBody>
					{!isLargerThan800 && <ModalFooter>
									<AddToCartButton product={selectedProduct} />
									<Button variant='ghost'>Comprar ahora</Button>
								</ModalFooter>}
				</ModalContent>
			</Modal>
		</>
	)
}

export default QuickView;
