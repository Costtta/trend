import { Box, Container, Grid2, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}
const Register = () => {

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <NavBar />

            {/* small screen */}

            <Container sx={{display: { md: 'none', xs: 'block' }}}>
                <Box sx={{ width: '100%' }} >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Sign In" {...a11yProps(0)} sx={{flexGrow: 1}} />
                        <Tab label="Sign Up" {...a11yProps(1)} sx={{flexGrow: 1, color: '', fontWeight: '400'}} />
                    </Tabs>
                    <Box textAlign={'center'} paddingTop={5}>
                        <Typography variant='h1' fontWeight={'bold'} fontSize={{ md: 58, xs: 36 }} marginBottom={'1rem'}>Welcome to Our store</Typography>
                        <Typography fontSize={{ md: 20, xs: 16 }}>Bringing Your Style Home</Typography>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <SignIn />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <SignUp />
                    </CustomTabPanel>
                </Box>
            </Container>
            {/* large screen */}

            <Container fixed sx={{display: { md: 'block', xs: 'none' }}}>
                <Box textAlign={'center'} paddingTop={5}>
                    <Typography variant='h1' fontWeight={'bold'} fontSize={{ md: 58, xs: 36 }} marginBottom={'1rem'}>Welcome to Our store</Typography>
                    <Typography fontSize={{ md: 20, xs: 16 }}>Bringing Your Style Home</Typography>
                </Box>
                <Grid2 container paddingBottom={4} spacing={2}>
                    <SignIn />
                    <SignUp />
                </Grid2>
            </Container>
            <Footer />
        </>
    )
}

export default Register;
