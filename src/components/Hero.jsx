import { Box, Container, InputAdornment, TextField, Typography } from "@mui/material"
import { BiSearchAlt } from "react-icons/bi";

const Hero = () => {
    return (
        <Box paddingBlock={'507px'} component={'section'} textAlign={'center'}>
            <Container>
                <Typography fontSize={{md: 80, xs: 36}} variant="h2" fontWeight={'bold'} textTransform={'capitalize'}>Make your interior more minimalistic & modern</Typography>
                <Typography fontSize={{md: 24, xs: 16}} marginTop={5.625} lineHeight={{md: '38.4px', xs: '25.6px'}}>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</Typography>
                <TextField variant="outlined" placeholder="Search" sx={{borderRadius: '19.5px', color: 'white', backgroundColor: '#FDFDFD33', height: '39px', width: '280px', justifyContent: 'center', outlineColor: 'transparent'}} type="search" slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <BiSearchAlt size={'21px'} color="white"/>
                            </InputAdornment>
                        )
                    }
                }}/>
            </Container>
        </Box>
    )
}

export default Hero;