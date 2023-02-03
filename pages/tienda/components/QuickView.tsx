import { useDisclosure, Button, Text, Modal, ModalOverlay, Image, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

import { Product } from '@/product/types';

interface Props {
    selectedProduct: Product
}

const QuickView: React.FC<Props> = ({ selectedProduct }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal size='xl' colorScheme='brand' scrollBehavior='inside' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                <ModalOverlay backdropFilter='blur(5px)' />
                <ModalContent w={{ base: '90%', md: '80%' }} maxWidth='container.xl'>
                    <ModalHeader>{selectedProduct.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            alt={selectedProduct.title} src={selectedProduct.image} objectFit='cover' borderRadius={10} />
                        <Text >{selectedProduct.description}</Text>
                        <Text fontWeight='bold'>{selectedProduct.price}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Agregar al carrito
                        </Button>
                        <Button variant='ghost'>Comprar ahora</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default QuickView;