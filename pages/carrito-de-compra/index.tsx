import { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Input, Text, Box, Button } from '@chakra-ui/react';

import { INFORMATION } from '@/src/utils/constants';

const ShoppingCart: React.FC = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [activeTabs, setActiveTabs] = useState<number[]>([0]);

    const onClickNext = (index: number) => {
        setTabIndex(index);
        setActiveTabs([...activeTabs, index]);
    }

    return <Tabs index={tabIndex} onChange={index => setTabIndex(index)} bg='white' w='container.md' m='auto' shadow='lg' p={6}>
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
                        <Input placeholder={inp.placeholder} />
                    </Box>)
                }
                <Button onClick={() => onClickNext(1)}>Siguiente</Button>
            </TabPanel>
            <TabPanel>
                {
                    INFORMATION.cart.location.map((inp, id) => <Box key={id} marginY={5}>
                        <Text mb='8px'>{inp.label}</Text>
                        <Input placeholder={inp.placeholder} />
                    </Box>)
                }
                <Button onClick={() => onClickNext(2)}>Siguiente</Button>
            </TabPanel>
            <TabPanel>3</TabPanel>
        </TabPanels>
    </Tabs>
}

export default ShoppingCart;