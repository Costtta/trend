import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/productSlice";
import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid2, IconButton, Typography, useTheme } from '@mui/material'
import NavBar from "../components/NavBar";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import livingRoom from '../assets/features1.webp'
import Footer from '../components/Footer'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addToCart } from "../redux/cartSlice";


const CategoryLivingRoom = () => {
    const theme = useTheme()
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    console.log(products);
    const categoryImage = products.data[0]?.categories[0]?.image;

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <>
            <NavBar />
            {products.isLoading ? (
                <Typography variant="h1">Loading</Typography>
            ) : products.data && products.data.length > 0 ? (
                <>
                    <Box component={'section'}>
                        <Container>
                            <Grid2 container spacing={4}>
                                <Grid2 size={12} order={{md: 0, xs: 2}}>
                                    <Box display={{md: 'block', xs: 'none'}}>
                                        <KeyboardBackspaceIcon color="warning"/>
                                    </Box>
                                    <Box color={theme.palette.warning.main} display={'flex'} paddingTop={'2.375rem'}>
                                        <Typography fontSize={17.42}>Categories</Typography>
                                        <KeyboardArrowRightIcon />
                                        <Typography fontSize={17.42} >Living Room</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{md: 8, xs: 12}} order={{md: 0, xs: 3}}>
                                    <Box>
                                        <Typography variant="h2" fontSize={{md: 58.07, xs: 36}} fontWeight={800} paddingTop={{md: '7.68rem', xs: '1rem'}} paddingBottom={3}>All Living Room</Typography>
                                        <Typography fontSize={{md: 17.42, xs: 16}}> Sofas, loveseats, armchairs, coffee tables, end tables, entertainment centers, bookshelves.</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{md: 4, xs: 10}} order={{md: 0, xs: 1}} sx={{'&::before': {backgroundColor: theme.palette.grey[700]}}} className={'category-main-image'}>
                                    {/* endpoint category img doesn't have width and height like the design */}
                                    <img src={`http://test-ecomerce.xn--hrt-w-ova.de/${categoryImage}`} alt="living-room" width={'100%'}/>
                                    {/* <img src={livingRoom} alt="" width={''} height={'445px'}/> */}
                                </Grid2>
                            </Grid2>
                        </Container>
                    </Box>
                    <Box component={'section'} marginBlock={'10.125rem'}>
                        <Container>
                            <Grid2 container spacing={{md: 8, xs: 3}}>
                                {products.data.map((index) => {
                                    return (
                                        <Grid2 size={{ md: 3, xs: 6 }} key={index.id}>
                                            <Card variant="0">
                                                <CardMedia component={'img'} image={`http://test-ecomerce.xn--hrt-w-ova.de/${index.productimage[0].link}`} width={'100%'} sx={{backgroundColor: theme.palette.grey[500]}}/>
                                                <CardContent>
                                                    <Typography fontSize={{ md: 21.33, xs: 13.96 }} fontWeight={600}>{index.title}</Typography>
                                                </CardContent>
                                                <CardActions sx={{ justifyContent: 'space-between' }}>
                                                    <Typography fontWeight={600}>€{index.price}</Typography>
                                                    <IconButton sx={{ color: `${theme.palette.common.black}` }} onClick={() => dispatch(addToCart(index))}>
                                                        <AddCircleIcon />
                                                    </IconButton>
                                                </CardActions>
                                            </Card>
                                        </Grid2>
                                    )
                                })}
                            </Grid2>
                        </Container>
                    </Box>
                    <Footer />
                </>
            ) : (
                <Typography>No Products Found</Typography>
            )}
        </>
    )
}

export default CategoryLivingRoom
