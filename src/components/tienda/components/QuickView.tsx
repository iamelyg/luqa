import { useDisclosure, Button, Icon, Center, Text, Grid, VStack, Modal, ModalOverlay, Image, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, HStack } from '@chakra-ui/react';
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

	return (
		<>
			<Button onClick={onOpen} variant='ghost' position='absolute' h={10} w={10} bottom={1} right={1}><Icon w={5} h={5} as={BsEye} /></Button>
			<Modal size='xl' colorScheme='brand' scrollBehavior='inside' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
				<ModalOverlay backdropFilter='blur(5px)' />
				<ModalContent w={{ base: '90%', md: '80%' }} maxWidth='container.xl' maxH='95%'>
					<ModalCloseButton />
					<ModalBody >
						<Grid gridGap={6} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
							<Center alignItems='center'>
								<Carousel showStatus={false} showThumbs={true} infiniteLoop={true}>
									{/* {selectedProduct.image.map(url => <Image
										alt={selectedProduct.title} src={url} objectFit='cover' borderRadius={10} />
									)} */}
									<Image
										alt={selectedProduct.title} src={selectedProduct.image} objectFit='cover' borderRadius={10} />
									<Image
										alt={selectedProduct.title} src={selectedProduct.image} objectFit='cover' borderRadius={10} />
								</Carousel>
							</Center>
							<VStack alignItems='initial'>
								<ModalHeader>{selectedProduct.title}</ModalHeader>
								<Text>{parse(selectedProduct.description)}</Text>
								<HStack justifyContent='space-between' color='green'>
									<Text fontWeight='bold'>Online</Text>
									<Text fontWeight='bold' >{parseCurrency(selectedProduct.price)}</Text>
								</HStack>
								<HStack justifyContent='space-between' color='gray.300'>
									<Text>Regular</Text>
									<Text as='del'>{parseCurrency(selectedProduct.regularPrice)}</Text>
								</HStack>
								<ModalFooter>
									<AddToCartButton product={selectedProduct} />
									<Button variant='ghost'>Comprar ahora</Button>
								</ModalFooter>
							</VStack>
						</Grid>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default QuickView;