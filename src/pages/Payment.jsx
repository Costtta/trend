import { Box, Container, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import visa from '../assets/visa logo.webp'
import masterCard from '../assets/Mastercard logo.webp'
import paypal from '../assets/Paypal.webp'

const Payment = () => {
    return (
        <Box component={'section'}>
            <Container>
                <Box textAlign={'center'}>
                    <Typography variant="h2" fontSize={{md: 50, xs: 30}} fontWeight={800} textTransform={'capitalize'} paddingTop={'2rem'}>Your customer data for the order</Typography>
                    <Typography fontSize={{md: 20, xs: 16}} paddingTop={'1rem'}>Bringing Your Style Home</Typography>
                </Box>
                <Box>
                    <Typography variant="h3" textTransform={'uppercase'} fontSize={24} fontWeight={600} paddingTop={'5rem'}>Payment method</Typography>
                    <FormControl sx={{ width: '100%', paddingTop: '8rem' }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Card Payment"
                            name="radio-buttons-group"
                        >
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormControlLabel value="Card Payment" control={<Radio />} label="Card Payment" />
                                <Box display={'flex'} alignItems={'center'}>
                                    <img src={visa} alt="" />
                                    <img src={masterCard} alt="" />
                                </Box>
                            </Box>
                            <Divider />
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                                <Box>
                                    <img src={paypal} alt="" />
                                </Box>
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Container>
        </Box>
    )
}

export default Payment;
