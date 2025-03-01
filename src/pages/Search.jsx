import { Box, Container, Grid2, Input, InputAdornment, Typography, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import rightSearch from '../assets/search-right.webp'
import leftSearch from '../assets/search-left.webp'
import NavBarPhoneSearch from "../components/NavBarPhoneSearch";

const Search = () => {
  const theme = useTheme()
  return (
    <>
      <Box display={{md: 'block', xs: 'none'}}>
        <NavBar />
      </Box>
      <Box display={{md: 'none', xs: 'block'}}>
        <NavBarPhoneSearch />
      </Box>
      <Box component={'section'} marginBlock={'11rem'} position={'relative'} className="search-section">
        <Container>
          <Grid2 container spacing={6}>
            <Grid2 size={3} display={{md: 'block', xs: 'none'}}>
              <img src={leftSearch} alt="" width={'100%'}  style={{borderRadius: '20px', maxHeight: '209.05px', maxWidth: '295.49px'}}/>
            </Grid2>
            <Grid2 size={{md: 6, xs: 12}}>
              <Box sx={{position: 'relative', width: '100%', textAlign: 'center'}} className='bg-orange'>
                <Typography variant="h2" fontSize={'24px'} fontWeight={'800'} lineHeight={{md: '75.49px', xs: '41.6px'}}>Chic Furnishings Online <br /> Furniture Store</Typography>
                <Typography paddingTop={1} fontSize={'17.42px'}>Discover Elegant Comfort for Every Room</Typography>
              </Box>
              <Input endAdornment={
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              } placeholder="Search" sx={{marginTop: '8.25rem' ,border: `1px solid ${theme.palette.warning.main}`, borderRadius: '20px', paddingLeft: '20px', paddingRight: '5px',width: '100%', '&::before': {borderBottom: "none"}, '&::after': {borderBottom: 'none'}, '&:hover::after' : {borderBottom: 'none !important'}, '&:hover::before': {borderBottom: 'none !important'}}}/>
            </Grid2>
            <Grid2 size={{md: 3, xs: 12}} textAlign={'center'}>
              <img src={rightSearch} alt="" width={'100%'} style={{borderRadius: '20px', maxHeight: '209.05px', maxWidth: '295.49px'}} />
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box display={{md: 'block', xs: 'none'}}>
        <Footer />
      </Box>
    </>
  )
}

export default Search
