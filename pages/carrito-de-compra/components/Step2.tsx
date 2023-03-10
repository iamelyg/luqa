import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { INFORMATION } from '@/src/utils/constants'

type FormData = {
    email: string
}

type Props = {
    onNext: (data: FormData) => void
}

export const Step2 = ({ onNext }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    console.log('errors', errors)

    const onSubmit: SubmitHandler<FormData> = (data) => {
        onNext(data)
    }

    return (
        <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Step 2</Text>
            {
                INFORMATION.cart.location.map((inp, id) =><FormControl key={inp.name} isInvalid={errors[inp.name as keyof typeof errors] ? true : undefined}>
                <FormLabel>{inp.label}</FormLabel>
                <Input {...register(inp.name as any)} placeholder={inp.placeholder} />
                <FormErrorMessage>{errors[inp.name as keyof typeof errors]?.message}</FormErrorMessage>
            </FormControl>)
            }
            <Button onClick={handleSubmit(onSubmit)}>Next</Button>
        </Stack>
    )
}
