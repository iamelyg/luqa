import { useState, Fragment } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Text, Box, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { INFORMATION } from '@/src/utils/constants';

type UserSubmitForm = {
    email: string;
    fullname: string;
    document: string;
    phone: string;
    direction: string;
    department: string;
    province: string;
    district: string;
    reference: string;
};

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Correo es obligatorio').email('Correo inválido'),
    fullname: Yup.string().required('Nombre y apellido es obligatorio'),
    phone: Yup.string().required('Celular es requerido').length(9, 'Debe ser 9 caracteres'),
    direction: Yup.string().required('Dirección es obligatoria'),
    department: Yup.string().required('Departamento es obligatorio'),
    province: Yup.string().required('Provincia es obligatorio'),
    district: Yup.string().required('Distrito es obligatorio'),
    reference: Yup.string().required('Referencia es obligatorio'),
});

const ShoppingCart: React.FC = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [activeTabs, setActiveTabs] = useState<number[]>([0]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (index: number) => (data: UserSubmitForm) => {
        console.log('INEEX', index)
        setFormData({ ...formData, ...data })
        setTabIndex(index);
        setActiveTabs([...activeTabs, index]);

        console.log('data', JSON.stringify(data, null, 2));
    };

    const [step, setStep] = useState<Step>('1')
    const [formData, setFormData] = useState({ name: '', email: '' })

    const handleNextStep = (data: any) => {
        setFormData({ ...formData, ...data })
        setStep(prevStep => {
            switch (prevStep) {
                case '1':
                    return '2'
                case '2':
                    return '3'
                default:
                    return prevStep
            }
        })
    }

    console.log('errors', errors)
    return <Fragment>
        <Tabs index={tabIndex} onChange={index => setTabIndex(index)} bg='white' w={{ md: 'container.md' }} m='auto' shadow='lg' p={6}>
            <TabList>
                <Tab>Identificación</Tab>
                <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 1))}>Delivery</Tab>
                <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 2))}>Pago</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Step1 onNext={handleNextStep} />
                </TabPanel>
                <TabPanel>
                    {
                        INFORMATION.cart.location.map((inp, id) => <Box key={id} marginY={5}>
                            <Text mb='8px'>{inp.label}</Text>
                            <Input placeholder={inp.placeholder} />
                        </Box>)
                    }
                    <Button onClick={handleSubmit(onSubmit(2))}>Siguiente</Button>
                </TabPanel>
                <TabPanel>
                    <Button onClick={handleSubmit(onSubmit(3))}>Siguiente</Button>

                </TabPanel>
            </TabPanels>
        </Tabs>
        <Stack direction="row" justifyContent="center">
            <StepIndicator step={step} />
        </Stack>
    </Fragment>
}

export default ShoppingCart;



// import { useState } from 'react'
import { Container, Stack } from '@chakra-ui/react'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { StepIndicator } from './components/StepIndicator'

type Step = '1' | '2' | '3'

// export default function Home() {
//        const [step, setStep] = useState<Step>('1')
//   const [formData, setFormData] = useState({ name: '', email: '' })

//   const handleNextStep = (data: any) => {
//     setFormData({ ...formData, ...data })
//     setStep(prevStep => {
//       switch (prevStep) {
//         case '1':
//           return '2'
//         case '2':
//           return '3'
//         default:
//      return prevStep
//       }
//     })
//   }

//   const handleReset = () => {
//     setStep('1')
//     setFormData({ name: '', email: '' })
//   }

//   return (
//     <Container maxW="container.sm">
//       <Stack spacing={8}>
//         {step === '1' && <Step1 onNext={handleNextStep} />}
//         {step === '2' && <Step2 onNext={handleNextStep} />}
//         {step === '3' && <Step3 onDone={handleReset} />}
//         <Stack direction="row" justifyContent="center">
//           <StepIndicator step={step} />
//         </Stack>
//       </Stack>
//     </Container>
//   )
// }
