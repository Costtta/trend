import { Box, Container, Grid2, Typography, useTheme } from "@mui/material";
import features1 from '../assets/features1.webp'
import features2 from '../assets/features2.webp'
import features3 from '../assets/features3.webp'

const Features = () => {
    const theme = useTheme()
    return (
        <Box component={'section'} marginBlock={15} paddingBlock={8} bgcolor={theme.palette.featuresBg.main}>
            <Container>
                <Box textAlign={'center'}>
                    <Typography fontSize={'18px'} color="warning">SOME OF OUR</Typography>
                    <Typography variant="h2" fontSize={'42px'} marginTop={'19.58px'}>Featuers we offer to you</Typography>
                </Box>
                <Grid2 container spacing={4} paddingTop={'3rem'}>
                    <Grid2 size={4}>
                        <img src={features1} alt="" width={'100%'} height={'476px'} style={{borderRadius: '18.12px'}}/>
                    </Grid2>
                    <Grid2 size={4}>
                        <img src={features2} alt="" width={'100%'} height={'476px'} style={{borderRadius: '18.12px'}}/>
                    </Grid2>
                    <Grid2 size={4}>
                        <img src={features3} alt="" width={'100%'} height={'476px'} style={{borderRadius: '18.12px'}}/>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Features;
