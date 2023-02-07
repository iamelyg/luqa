import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Card, Text, VStack, Box } from '@chakra-ui/react';

import { INFORMATION } from '@/src/app/constants';

const ShoppingCart: React.FC = () => {
    return <Tabs bg='white' w='container.md' m='auto' shadow='lg' p={6}>
        <TabList>
            <Tab>Identificación</Tab>
            <Tab>Delivery</Tab>
            <Tab isDisabled>Three</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                {
                    INFORMATION.cart.identification.map((inp, id) => <Box key={id} marginY={5}>
                        <Text mb='8px'>{inp.label}</Text>
                        <Input placeholder={inp.placeholder} />
                    </Box>)
                }
            </TabPanel>
            <TabPanel>
            {
                    INFORMATION.cart.location.map((inp, id) => <Box key={id} marginY={5}>
                        <Text mb='8px'>{inp.label}</Text>
                        <Input placeholder={inp.placeholder} />
                    </Box>)
                }
            </TabPanel>
            <TabPanel>3</TabPanel>
        </TabPanels>
    </Tabs>
}

export default ShoppingCart;