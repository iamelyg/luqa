import { useDisclosure, Button, Center, Text, Grid, VStack, Modal, ModalOverlay, Image, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, HStack } from '@chakra-ui/react';

import { Product } from '@/src/product/types';

interface Props {
    selectedProduct: Product
}

const QuickView: React.FC<Props> = ({ selectedProduct }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Vista rápida</Button>
            <Modal size='xl' colorScheme='brand' scrollBehavior='inside' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                <ModalOverlay backdropFilter='blur(5px)' />
                <ModalContent w={{ base: '90%', md: '80%' }} maxWidth='container.xl' maxH='95%'>
                    <ModalCloseButton />
                    <ModalBody >
                        <Grid gridGap={6} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
                            <Center alignItems='center'>
                                <Image
                                    alt={selectedProduct.title} src={selectedProduct.image} objectFit='cover' borderRadius={10} />
                            </Center>
                            <VStack alignItems='initial'>
                                <ModalHeader>{selectedProduct.title}</ModalHeader>
                                <Text>{selectedProduct.description}</Text>
                                <HStack justifyContent='space-between'>
                                    <Text fontWeight='bold'>online</Text>
                                    <Text fontWeight='bold'>{selectedProduct.price}</Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text>Regular</Text>
                                    <Text>{selectedProduct.regularPrice}</Text>
                                </HStack>
                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Agregar al carrito
                                    </Button>
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