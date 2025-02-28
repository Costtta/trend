import { Box } from "@mui/material";
import NavBar from "./NavBar";
import Hero from "./Hero";

const NavBarHeros = () => {
    return (
        <Box className='main-bg'>
            <NavBar />
            <Hero />
        </Box>
    )
}

export default NavBarHeros;
