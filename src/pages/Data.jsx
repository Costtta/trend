import { Box, Container, Input, Typography } from "@mui/material"


const Data = () => {
    return (
        <Box component={'section'}>
            <Container>
                <Box textAlign={'center'}>
                    <Typography variant="h2" fontSize={{md: 50, xs: 30}} fontWeight={800} textTransform={'capitalize'} paddingTop={'2rem'}>Your customer data for the order</Typography>
                    <Typography fontSize={{md: 20, xs: 16}} paddingTop={'1rem'}>Bringing Your Style Home</Typography>
                </Box>
                <Typography variant="h3" fontSize={{md: 24, xs: 16}} fontWeight={600} paddingTop={'2.5rem'} paddingBottom={'4.4rem'} textTransform={'uppercase'}>Delivery address</Typography>
                <form action="">
                    <Input placeholder="City" sx={{width: '100%', '&::after': {borderBottom: '2px solid black !important'}}} required/>
                    <Input placeholder="Street Name" sx={{width: '100%', marginBlock: '1rem', '&::after': {borderBottom: '2px solid black !important'}}} required/>
                    <Input placeholder="Building Number" sx={{width: '100%', '&::after': {borderBottom: '2px solid black !important'}}} required/>
                </form>
            </Container>
        </Box>
    )
}

export default Data
