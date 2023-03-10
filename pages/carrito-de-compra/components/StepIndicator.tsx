import { Flex, Text } from '@chakra-ui/react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

type Props = {
    step: '1' | '2' | '3'
    //   step: Step
}

export const StepIndicator = ({ step }: Props) => {
    return (
        <Flex alignItems="center">
            <StepIndicatorStep step="1" isActive={step === '1'} />
            <StepIndicatorSeparator />
            <StepIndicatorStep step="2" isActive={step === '2'} />
            <StepIndicatorSeparator />
            <StepIndicatorStep step="3" isActive={step === '3'} />
        </Flex>
    )
}

const StepIndicatorStep = ({ step, isActive }: { step: string, isActive: boolean }) => {
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

const StepIndicatorSeparator = () => {
    return (
        <Flex
            flexGrow={1}
            h={1}
            bg="gray.200"
            my={2}
        />
    )
}
