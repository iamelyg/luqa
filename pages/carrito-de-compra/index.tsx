import { useState, Fragment } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/react';

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { StepIndicatorStep } from './components/StepIndicator'

// type UserSubmitForm = {
//     email: string;
//     fullname: string;
//     document: string;
//     phone: string;
//     direction: string;
//     department: string;
//     province: string;
//     district: string;
//     reference: string;
// };

const ShoppingCart: React.FC = () => {
    // const [tabIndex, setTabIndex] = useState<number>(0);
    const [activeTabs, setActiveTabs] = useState<number[]>([0]);
    const [step, setStep] = useState<number>(0)
    const [formData, setFormData] = useState({})

    const onSubmit = () => {
        console.log('formData', formData)
    };


    const handleNextStep = (data: any) => {
        setFormData({ ...formData, ...data })
        // setTabIndex(Number(step));
        setActiveTabs([...activeTabs, step+1]);
        setStep(prevStep => {
            switch (prevStep) {
                case 0:
                    return 1
                case 1:
                    return 2
                default:
                    return prevStep
            }
        })
    }

    return <Fragment>
        <Tabs index={step} onChange={index => setStep(index)} bg='white' w={{ md: 'container.md' }} m='auto' shadow='lg' p={6}>
            <TabList>
                <Tab>
                    <StepIndicatorStep step="1" isActive={step === 0} />
                    {step === 0 ? 'Identificación' : ''}
                </Tab>
                <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 1))}>
                    <StepIndicatorStep step="2" isActive={step === 1} />
                    {step === 1 ? 'Delivery' : ''}
                </Tab>
                <Tab isDisabled={!Boolean(activeTabs.find(tab => tab === 2))}>
                    <StepIndicatorStep step="3" isActive={step === 2} />
                    {step === 2 ? 'Pago' : ''}
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Step1 onNext={handleNextStep} />
                </TabPanel>
                <TabPanel>
                    <Step2 onNext={handleNextStep} />
                </TabPanel>
                <TabPanel>
                    <Step3 onDone={onSubmit} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Fragment>
}

export default ShoppingCart;