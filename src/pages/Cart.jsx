import { Box, Button, Container, Divider, Grid2, IconButton, Typography, useTheme } from '@mui/material'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import test from '../assets/Ballons.webp'
import { RiDeleteBin6Line } from "react-icons/ri";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect } from 'react'
import { deleteBtn, fetchCartItems, totalPrice } from '../redux/cartSlice'
import { Link } from 'react-router'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const handleTotalPrice = () => {
        dispatch(totalPrice())
    }
    console.log(cart);

    handleTotalPrice()

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])


    const theme = useTheme();
    console.log(cart);

    return (
        <>
            <NavBar />
            <Box component={'section'} paddingBlock={'60px'}>
                <Container>
                    <Box textAlign={'center'} position={'relative'} className='cart-bg'>
                        <Typography variant='h2' fontSize={{ md: 58, xs: 36 }} fontWeight={'800'}>Your Cart</Typography>
                        <Typography fontSize={{ md: 20, xs: 16 }}>Review Your Items</Typography>
                        <Typography paddingTop={'54px'} paddingBottom={'63px'}>Items ({cart.items.length})</Typography>
                    </Box>
                    <Box>
                        <Box maxHeight={'727px'} overflow={'auto'} className='custom-scrollbar'>
                            {cart.items.map((index) => {
                                return (
                                    <Grid2 container justifyContent={'space-between'} alignItems={'center'} key={index.id} padding={'0 1rem'}>
                                        <Grid2>
                                            <img src={`http://test-ecomerce.xn--hrt-w-ova.de/${index.productimage[0]?.link}`} height={'135px'} width={'135px'} alt="test" style={{ backgroundColor: theme.palette.grey[500], borderRadius: '26px', padding: '5px 12px' }} />
                                        </Grid2>
                                        <Grid2>
                                            <Typography fontWeight={'500'}>{index.title}</Typography>
                                            <Typography>About the Chair</Typography>
                                        </Grid2>
                                        <Grid2 display={'flex'} alignItems={'center'}>
                                            <IconButton onClick={() => dispatch(deleteBtn(index))}  sx={{color: theme.palette.common.black}}>
                                                <RiDeleteBin6Line cursor={'pointer'} />
                                            </IconButton>
                                            <Box display={'flex'}>
                                                <RemoveCircleIcon sx={{ cursor: 'pointer' }} />
                                                <Typography>01</Typography>
                                                <AddCircleIcon sx={{ cursor: 'pointer' }} />
                                            </Box>
                                        </Grid2>
                                        <Grid2>
                                            <Typography fontSize={25.71} fontWeight={'600'} position={'relative'}>
                                                <span style={{ fontSize: '18.37px', position: 'absolute', left: -15, top: 0, fontWeight: '600' }}>€</span>
                                                {index.price}
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                )
                            })}
                        </Box>
                        {/* title below it para */}
                        {/* quantatity with decrease and incresse numbers */}
                        {/* below alld of that hidden bg for box shadow */}
                        <Divider />
                        <Box display={'flex'} justifyContent={'space-between'} paddingBlock='1.5rem'>
                            <Typography>Total</Typography>
                            <Typography>{cart.total}€</Typography>
                        </Box>
                        <Button variant='contained' color='warning' sx={{ color: 'black', textTransform: 'capitalize', width: '100%', borderRadius: '58px' }}>
                            <Link to={cart.items.length === 0 ? '/' : '/data'} style={{ color: theme.palette.common.black, textDecoration: 'none', width: '100%', fontWeight: 'bold' }}>Place order</Link>
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Cart;
