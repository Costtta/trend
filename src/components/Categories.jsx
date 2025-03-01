import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid2, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categoriesSlice";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


const Categories = () => {
    const theme = useTheme()
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchCategories())
    },[])
    
    return (
        <Box component={'section'} marginBlock={10}>
            <Container>
                <Grid2 container spacing={8}>
                    <Grid2 size={{md: 3, xs: 12}} display={'flex'} alignItems={'end'}>
                        <Typography variant="h2" fontSize={42} fontWeight={'bold'} paddingBottom={8}>Our Categories</Typography>
                    </Grid2>
                        {categories.fetchData.map((index) => {
                            return(
                                <Grid2 size={{md: 3, xs: 12}} key={index.id}>
                                    <Card sx={{maxWidth: 345}} variant="0">
                                        <CardMedia image={`https://test-ecomerce.xn--hrt-w-ova.de/${index.image}`} alt='Categories' sx={{borderRadius: '23px'}} width={'277px'} height={'267px'} component={'img'} />
                                        <CardContent>
                                            <Typography fontSize={24} variant="h5" fontWeight={'bold'}>{index.title}</Typography>
                                            <Typography lineHeight={'29.6px'} sx={{color: '#1E1E1E'}} fontSize={16} paddingTop={'1.5rem'}>{index.description}</Typography>
                                        </CardContent>
                                        <CardActions sx={{color: theme.palette.warning.main}}>
                                            <Button sx={{textTransform: 'capitalize', color: theme.palette.warning.main, fontSize: '14px'}} endIcon={<TrendingFlatIcon />}>more info</Button>
                                        </CardActions>
                                    </Card>
                                </Grid2>
                            )
                        })}
                </Grid2>
            </Container>
        </Box>
    )
}

export default Categories;
