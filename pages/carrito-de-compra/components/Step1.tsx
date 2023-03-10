import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Text, Box } from '@chakra-ui/react'
import { INFORMATION } from '@/src/utils/constants'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment } from 'react';

type FormData = {
    email: string;
    fullname: string;
    document: string;
    phone: string;
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Correo es obligatorio').email('Correo inválido'),
    fullname: Yup.string().required('Nombre y apellido es obligatorio'),
    phone: Yup.string().required('Celular es requerido').length(9, 'Debe ser 9 caracteres'),
});

type Props = {
    onNext: (data: FormData) => void
}

export const Step1 = ({ onNext }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(validationSchema) })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        onNext(data)
    }

    return <Fragment>
        {
            INFORMATION.cart.identification.map((inp, id) => <FormControl key={inp.name} isInvalid={errors[inp.name as keyof typeof errors] ? true : undefined}>
                <FormLabel>{inp.label}</FormLabel>
                <Input {...register(inp.name as any)} placeholder={inp.placeholder} />
                <FormErrorMessage>{errors[inp.name as keyof typeof errors]?.message}</FormErrorMessage>
            </FormControl>)
        }
        <Button onClick={handleSubmit(onSubmit)}>Next</Button>
    </Fragment>
}