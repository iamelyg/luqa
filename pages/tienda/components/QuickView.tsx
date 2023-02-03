import {
    useDisclosure, Button, Text, Modal, ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

import { Product } from '@/product/types';

interface Props {
    selectedProduct: Product
}

const QuickView: React.FC<Props> = ({ selectedProduct }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal size='xl' blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
                <ModalOverlay backdropFilter='blur(5px)' />
                <ModalContent >
                    <ModalHeader>{selectedProduct.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
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