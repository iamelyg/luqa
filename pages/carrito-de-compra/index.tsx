import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Card, Text } from '@chakra-ui/react';

const ShoppingCart: React.FC = () => {
    return <Tabs>
        <TabList>
            <Tab>One</Tab>
            <Tab isDisabled>Two</Tab>
            <Tab>Three</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <Card>
                   {
                    inputForm.map((inp, id) => <Input key={id} placeholder={inp.placeholder}/>)
                   }
                </Card>
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
        </TabPanels>
    </Tabs>
}

const inputForm = [{
    label: 'Nombres',
    type: 'text',
    placeholder: 'Ingresa tu nombre'
}, {
    label: 'Apellidos',
    type: 'text',
    placeholder: 'Ingresa tus apellidos'
}, {
    label: 'Correo',
    type: 'email',
    placeholder: 'Ingresa tu correo'
}, {
    label: 'Celular',
    type: 'number',
    placeholder: 'Ingresa tu n° celular'
}]
export default ShoppingCart;