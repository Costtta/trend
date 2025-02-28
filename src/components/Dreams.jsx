import { Box, Button, Container, Grid2, Typography, useTheme } from "@mui/material";
import dreams from '../assets/dreams.webp'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Dreams = () => {
    const theme = useTheme()
    return (
        <Box component={'section'} marginBlock={'5rem'}>
            <Container>
                <Grid2 container spacing={10}>
                    <Grid2 size={{md: 6, xs: 12}}>
                        <img src={dreams} alt="sofa" width={'100%'} style={{borderRadius: '0 20px 20px 0'}}/>
                    </Grid2>
                    <Grid2 size={{md: 6, xs: 12}}>
                        <Typography variant="h2" fontSize={42} fontWeight={400}>Furnish Your Dreams, Choose Wisely</Typography>
                        <Typography fontSize={18} lineHeight={'33.3px'} paddingBlock={'20px'}>Discover quality furniture, curated styles, and exceptional service at Our Store. We make furnishing your home easy and enjoyable.</Typography>
                        <Button endIcon={<TrendingFlatIcon />} sx={{textTransform: 'capitalize', color: theme.palette.warning.main}}>More Info</Button>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Dreams;
