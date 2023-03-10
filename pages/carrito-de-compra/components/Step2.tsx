import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { INFORMATION } from '@/src/utils/constants';

type FormData = {
    direction: string;
    department: string;
    province: string;
    district: string;
    reference: string;
}

const validationSchema = Yup.object().shape({
    direction: Yup.string().required('Dirección es obligatoria'),
    department: Yup.string().required('Departamento es obligatorio'),
    province: Yup.string().required('Provincia es obligatorio'),
    district: Yup.string().required('Distrito es obligatorio'),
    reference: Yup.string().required('Referencia es obligatorio'),
});


type Props = {
    onNext: (data: FormData) => void
}

export const Step2 = ({ onNext }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        onNext(data)
    }

    return (
        <Stack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">Step 2</Text>
            {
                INFORMATION.cart.location.map((inp, id) => <FormControl key={inp.name} isInvalid={errors[inp.name as keyof typeof errors] ? true : undefined}>
                    <FormLabel>{inp.label}</FormLabel>
                    <Input {...register(inp.name as any)} placeholder={inp.placeholder} />
                    <FormErrorMessage>{errors[inp.name as keyof typeof errors]?.message}</FormErrorMessage>
                </FormControl>)
            }
            <Button onClick={handleSubmit(onSubmit)}>Next</Button>
        </Stack>
    )
}
