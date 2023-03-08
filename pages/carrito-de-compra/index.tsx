import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Text, Box, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { INFORMATION } from '@/src/utils/constants';

type UserSubmitForm = {
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
        .required('Username is required')
        .min(6, 'Username must be at least 6 characters')
        .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
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

    const onSubmit =  (index: number) => (data: UserSubmitForm) => {
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
                        <Input {...register(inp.name as any)}  placeholder={inp.placeholder} />
                    </Box>)
                }
                {/* <Box marginY={5}>
                    <Text mb='8px'>Nombre</Text>
                    <Input {...register('fullname')} placeholder='Ingresa tu nombre' />
                </Box> */}

                <Button onClick={handleSubmit(onSubmit(1))}>Siguiente</Button>
                {/* <Button onClick={() => onClickNext(1)}>Siguiente</Button> */}
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
            <TabPanel>3</TabPanel>
        </TabPanels>
    </Tabs>
}

export default ShoppingCart;