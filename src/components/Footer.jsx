import {Box, Container, Grid2, List, ListItem, ListItemButton, ListItemIcon, Typography, useTheme} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const theme = useTheme()
    return (
        <Box component={'footer'} bgcolor={theme.palette.footerBg.main} marginTop={{ md: 10, lg: 20, xl: 45 }}>
            <Container>
                <Grid2 container justifyContent={'space-between'} paddingBlock={'2rem'}>
                    <Grid2 display={'flex'} justifyContent={'center'} flexDirection={'column'} size={{md: 3, xs: 12}} alignItems={{md: 'start', xs: 'center'}}>
                        <Typography fontSize={'28px'}>Logo</Typography>
                        <Typography fontSize={'15px'}>The advantage of hiring a workspace with <br /> us is that givees you comfortable service <br /> and all-around facilities.</Typography>
                    </Grid2>
                    <Grid2 display={'flex'} justifyContent={'center'} flexDirection={'column'} size={{md: 3, xs: 6}} alignItems={{md: 'start', xs: 'center'}}>
                        <List>
                            <ListItem>
                                <Typography color='warning' fontSize={'17px'}>Services</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>Email Marketing</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>Campaigns</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>Branding</Typography>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 display={'flex'} justifyContent={'center'} flexDirection={'column'} size={{md: 3, xs: 6}} alignItems={{md: 'start', xs: 'center'}}>
                        <List>
                            <ListItem>
                                <Typography color='warning' fontSize={'17px'}>Furniture</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>Beds</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>Chair</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography fontSize={'17px'}>All</Typography>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 display={'flex'} justifyContent={'center'} flexDirection={'column'} size={{md: 3, xs: 12}} alignItems={{md: 'start', xs: 'center'}}>
                        <List>
                            <ListItem>
                                <Typography color='warning' fontSize={'17px'}>Follow Us</Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <FacebookIcon color='black'/>
                                    </ListItemIcon>
                                    <Typography fontSize={'15px'}>Facebook</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TwitterIcon color='black'/>
                                    </ListItemIcon>
                                    <Typography fontSize={'15px'}>Twitter</Typography>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InstagramIcon color='black'/>
                                    </ListItemIcon>
                                    <Typography fontSize={'15px'}>Instagram</Typography>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid2>
                </Grid2>
                <Box display={'flex'} justifyContent={'space-between'} paddingBottom={'1rem'}>
                    <Typography>Copyright © 2021</Typography>
                    <Box display={'flex'} gap={5}>
                        <Typography>Terms & Conditions</Typography>
                        <Typography>Privacy Policy</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;
