import { Box, Button, Typography, useTheme } from "@mui/material"
import ballons from '../assets/Ballons.webp'
import { Link } from 'react-router';

const Thanks = () => {
    const theme = useTheme()
    return (
        <Box component={'section'}>
            <Box textAlign={'center'}>
                <Typography variant='h2' fontWeight={800} fontSize={58.07} paddingBottom={'1rem'} paddingTop={'5rem'}>
                    Thank you for your purchase!
                </Typography>
                <Typography fontSize={20} paddingBottom={'5.125rem'}>We're doing a little happy dance over here.</Typography>
                <img src={ballons} alt='ballons' />
                <Box py={10}>
                    <Button sx={{ textTransform: 'capitalize', backgroundColor: theme.palette.warning.main, borderRadius: '26.57px', paddingBlock: '0.7rem', marginTop: '6rem', width: '100%' }}>
                        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white', width: '100%' }}>go to home</Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Thanks;
