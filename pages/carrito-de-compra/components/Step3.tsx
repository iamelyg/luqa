import { Button, Stack, Text } from '@chakra-ui/react'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

type Props = {
    onDone: () => void
}

export const Step3 = ({ onDone }: Props) => {
    return (
        <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Step 3</Text>
            <Text>Thank you for completing the wizard!</Text>
            <Button onClick={onDone}>Done</Button>
        </Stack>
    )
}
