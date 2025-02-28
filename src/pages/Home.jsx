import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Dreams from "../components/Dreams";


const Home = ({theme2, handleDarkMode, mode }) => {
    return (
        <div>
            <Box className='main-bg'>
                <NavBar theme={theme2} handleDarkMode={handleDarkMode} mode={mode} />
                <Hero />
            </Box>
                <Categories />
                <Dreams />
                <Features />
                <Footer />
        </div>
    )
    }

export default Home;
