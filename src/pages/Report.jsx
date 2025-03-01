import { Box, Button, Container, Divider, Grid2, Typography, useTheme } from "@mui/material";
import masterCard from '../assets/Mastercard logo.webp'
import { useSelector } from "react-redux";

const Report = () => {
    const cart = useSelector(state => state.cart)
    const theme = useTheme()
    return (
        <Box>
            <Container>
                <Box textAlign={'center'}>
                    <Typography variant="h2" fontSize={{ md: 50, xs: 30 }} fontWeight={800} textTransform={'capitalize'} paddingTop={'2rem'}>Your customer data for the order</Typography>
                    <Typography fontSize={{ md: 20, xs: 16 }} paddingTop={'1rem'}>Bringing Your Style Home</Typography>
                </Box>
                <Grid2 container spacing={8}>
                    <Grid2 size={12} paddingTop={9}>
                        <Typography variant="h3" fontSize={24} fontWeight={600} textTransform={'uppercase'}>Review order</Typography>
                        <Typography textTransform={'capitalize'}>Dear customer, please check your information for accuracy.</Typography>
                    </Grid2>
                    <Grid2 size={{ md: 6, xs: 12 }} order={{ md: 1, xs: 2 }}>
                        <Typography variant="h4" fontSize={{md: 24, xs: 17.79}} textTransform={'uppercase'} bgcolor={{md: theme.palette.common.white, xs: theme.palette.grey[500]}}>Your shopping cart ({cart.items.length})</Typography>
                        <Box maxHeight={'545px'} overflow={'auto'} bgcolor={theme.palette.grey[500]} className='custom-scrollbar'>
                            {cart.items.map((index) => {
                                return (
                                    <>
                                        <Box display={'flex'} key={index.id} padding={'1rem'}>
                                            <img src={`http://test-ecomerce.xn--hrt-w-ova.de/${index.productimage[0]?.link}`} alt={index.title} width={'135px'} height={'135px'} style={{ padding: '5px 12px', backgroundColor: theme.palette.common.white, borderRadius: '20px' }} />
                                            <Box>
                                                <Typography>{index.title}</Typography>
                                                <Typography>About the Chair</Typography>
                                                <Typography paddingTop={'56px'}>${index.price}</Typography>
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </>
                                )
                            })}
                        </Box>
                    </Grid2>
                    <Grid2 size={{ md: 6, xs: 12 }} order={{ md: 2, xs: 1 }}>
                        <Grid2 container spacing={4}>
                            <Grid2 size={{ md: 7, xs: 6 }} >
                                <Typography variant="h4" fontSize={{md: 24, xs: 13}} fontWeight={600} textTransform={'uppercase'} paddingBottom={4}>Delivery address</Typography>
                                <Box bgcolor={theme.palette.grey[600]} borderRadius={'23px'} padding={2}>
                                    <Typography fontSize={{md: 20, xs: 15}}>Max Müller <br /> Streetname. <br /> (House number) <br /> 12345 Cityname <br /> Germany</Typography>
                                    <Button sx={{ color: theme.palette.warning.main, fontWeight: '600', marginTop: '1.3rem' }}>Edit</Button>
                                </Box>
                            </Grid2>
                            <Grid2 size={{ md: 5, xs: 6 }}>
                                <Typography variant="h4" fontSize={{md: 24, xs: 13}} fontWeight={600} textTransform={'uppercase'} paddingBottom={4}>Payment</Typography>
                                <Box bgcolor={theme.palette.grey[600]} borderRadius={'23px'} padding={2}>
                                    <Typography fontSize={{md: 20, xs: 15}}>Card Payment</Typography>
                                    <img src={masterCard} alt="master-card-logo" style={{ paddingBlock: '3rem' }} />
                                    <Button sx={{ color: theme.palette.warning.main, fontWeight: '600' }}>Edit</Button>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Divider sx={{ marginBlock: '3rem', display: { md: 'block', xs: 'none' } }} />
                        <Box display={{ md: 'flex', xs: 'none' }} justifyContent={'space-between'}>
                            <Typography>Total</Typography>
                            <Typography>{cart.total}€</Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Report;
