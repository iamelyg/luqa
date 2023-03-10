import { Flex, Text } from '@chakra-ui/react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

export const StepIndicatorStep = ({ step, isActive }: { step: string, isActive: boolean }) => {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            w={6}
            h={6}
            borderRadius="full"
            bg={isActive ? 'blue.500' : 'gray.200'}
            color="white"
        >
            {isActive ? <IoIosCheckmarkCircleOutline size="24px" /> : <Text>{step}</Text>}
        </Flex>
    )
}
