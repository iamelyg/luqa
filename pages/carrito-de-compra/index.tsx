import { useState } from 'react';
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
        setTabIndex(index);
        setActiveTabs([...activeTabs, index]);

        console.log(JSON.stringify(data, null, 2));
    };


    console.log('errors', errors)
    return <Tabs index={tabIndex} onChange={index => setTabIndex(index)} bg='white' w={{ md: 'container.md' }} m='auto' shadow='lg' p={6}>
        <TabList>
            <Tab>Identificación</Tab>
            <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 1))}>Delivery</Tab>
            <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 2))}>Pago</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                {
                    INFORMATION.cart.identification.map((inp, id) => <Box key={id} marginY={5}>
                        <Text mb='8px'>{inp.label}</Text>
                        <Input {...register(inp.name as any)} placeholder={inp.placeholder} />
                    </Box>)
                }
                <Button onClick={handleSubmit(onSubmit(1))}>Siguiente</Button>
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
                <Button onClick={handleSubmit(onSubmit)}>Siguiente</Button>

            </TabPanel>
        </TabPanels>
    </Tabs>
}

export default ShoppingCart;