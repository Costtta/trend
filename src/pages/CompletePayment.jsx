import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Footer from '../components/Footer'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import { Container, Divider, useTheme } from '@mui/material';
import SignInUp from '../components/SignIn';
import Thanks from './Thanks';
import Payment from './Payment';
import Data from './Data';
import Report from './Report';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = ['LOG IN', 'DATA', 'PAYMENT', 'REVIEW'];

const CompletePayment = () => {

    // mui manipulation
    const theme = useTheme()
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    // switch between components in every step
    const stepContent = () => {
        switch (activeStep) {
            case 0:
                return <SignInUp />
            case 1:
                return <Data />
            case 2:
                return <Payment />
            case 3:
                return <Report />
            default:
                return <Typography variant='h2'>Loading</Typography>
        }
    }


    return (
        <>
            <NavBar />
            <Box sx={{ width: '100%' }}>
                <Container>
                    <Stepper activeStep={activeStep} sx={{ marginBottom: '0.5rem'}}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            const completed = index < activeStep;
                            return (
                                <Step key={label} {...stepProps} sx={{backgroundColor: '#DAFFDB', borderRadius: '80px'}} completed={completed}>
                                    <StepLabel icon={completed? <CheckCircleIcon sx={{color: '#1EC815'}} /> : <RadioButtonUncheckedIcon sx={{color: 'black'}}/>} sx={{color: 'red'}} {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <Divider />
                {/* payment completed page 4 */}
                {activeStep === steps.length ? (
                    <Thanks />
                ) : (
                    <>
                        {stepContent()}
                        <Box sx={{ textAlign: 'center', py: 10 }}>
                            <Button onClick={handleNext} sx={{ textTransform: 'capitalize', display: activeStep === 0 ? 'inline-flex' : 'inline-flex', backgroundColor: theme.palette.warning.main, color: 'white', width: '100%', borderRadius: '18px' }}>
                                {activeStep === steps.length - 1 ? 'Buy Now' : 'Next'}
                            </Button>
                        </Box>
                    </>
                )}
                <Footer />
                </Container>
            </Box>
        </>
    );
}

export default CompletePayment;